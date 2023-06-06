import { StatusBar } from "expo-status-bar";
import { Header } from "./components/Header";
import * as S from "./styles";
import { HomeContentWrapper } from "./components/HomeContentWrapper";
import { RestaurantCard } from "../../components/RestaurantCard";

import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "@reduxjs/toolkit";
import { ApplicationState } from "../../store";

import * as RestaurantsActions from "../../store/ducks/restaurants/actions";
import { HomeProps, LoadMoreDataProps } from "./types";
import { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { useTheme } from "styled-components";

const Home = ({
  navigation,
  restaurants,
  loadRequest,
  loading,
  toggleFavorite,
}: HomeProps) => {
  const [filter, setFilter] = useState<string>("");
  const [isFiltering, setIsFiltering] = useState<boolean>(false);
  const [moreDataParams, setMoreDataParams] = useState<LoadMoreDataProps>({
    offset: 0,
    limit: 4,
  });
  const [flatListRef, setFlatListRef] = useState<FlatList>();

  const theme = useTheme();

  const handleRestaurantDetails = (id: string) => {
    navigation.navigate("Details", { id });
  };

  const handleNavigateToFavorites = () => {
    navigation.navigate("Favorites");
  };

  const filterRestaurants = useCallback(() => {
    return restaurants.docs.filter((restaurant) => {
      return (
        restaurant?.name?.toLowerCase().includes(filter.toLowerCase()) ||
        restaurant?.mealType?.toLowerCase().includes(filter.toLowerCase()) ||
        restaurant?.currencyCode
          ?.toLowerCase()
          .includes(filter.toLowerCase()) ||
        restaurant?.timezone?.toLowerCase().includes(filter.toLowerCase())
      );
    });
  }, [restaurants.docs, filter]);

  const loadData = useCallback(() => {
    loadRequest(moreDataParams.offset, moreDataParams.limit);
    setMoreDataParams({
      offset: moreDataParams.offset + moreDataParams.limit,
      limit: moreDataParams.limit,
    });
  }, [moreDataParams]);

  useEffect(() => {
    loadData();
  }, []);

  return (
    <S.Container>
      <Header
        onNavigateFavorites={handleNavigateToFavorites}
        filterRestaurants={filter}
        setFilterRestaurants={setFilter}
        onFilter={filterRestaurants}
      />
      <StatusBar style="light" translucent />

      <S.HomeContent>
        <HomeContentWrapper totalRestaurants={restaurants.docs?.length} />

        {restaurants.docs?.length === 0 ? (
          <S.ActivityIndicatorWrapper>
            <ActivityIndicator size={36} color={theme.colors.blue600} />
          </S.ActivityIndicatorWrapper>
        ) : (
          <S.RestaurantList
            data={restaurants.docs}
            refreshing={loading}
            onEndReached={loadData}
            onEndReachedThreshold={0.01}
            ListFooterComponent={
              loading ? (
                <ActivityIndicator size={20} color={theme.colors.blue600} />
              ) : null
            }
            ref={(ref: FlatList) => setFlatListRef(ref)}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item, index }) => (
              <RestaurantCard
                key={index}
                data={item}
                onPress={() => {
                  handleRestaurantDetails(item._id);
                }}
                toggleFavorite={() => toggleFavorite(item._id)}
              />
            )}
          />
        )}
      </S.HomeContent>
    </S.Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  restaurants: state.restaurants.data,
  loading: state.restaurants.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RestaurantsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
