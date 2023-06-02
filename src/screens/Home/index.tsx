import { StatusBar } from "expo-status-bar";
import { Header } from "./components/Header";
import * as S from "./styles";
import { HomeContentWrapper } from "./components/HomeContentWrapper";
import { RestaurantCard } from "../../components/RestaurantCard";

import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "@reduxjs/toolkit";
import { ApplicationState } from "../../store";

import * as RestaurantsActions from "../../store/ducks/restaurants/actions";
import { HomeProps } from "./types";
import { useEffect } from "react";

export interface RandomData {
  id: number;
  url: string;
  name: string;
  restaurantType: string;
  currency: string;
  timezone: string;
}

const Home = ({ navigation, restaurants, loadRequest, loading }: HomeProps) => {
  const handleRestaurantDetails = (id: string) => {
    navigation.navigate("Details", { id });
  };

  const handleNavigateToFavorites = () => {
    navigation.navigate("Favorites");
  };

  useEffect(() => {
    loadRequest();
  }, []);

  return (
    <S.Container>
      <Header onNavigateFavorites={handleNavigateToFavorites} />
      <StatusBar style="light" translucent />

      <S.HomeContent>
        <HomeContentWrapper totalRestaurants={restaurants.docs?.length} />

        {restaurants.docs?.length > 0 && (
          <S.RestaurantList
            data={restaurants.docs}
            refreshing={loading}
            keyExtractor={(item) => String(item.name)}
            renderItem={({ item }) => (
              <RestaurantCard
                url={item.image?.url}
                name={item.name}
                restaurantType={item.mealType}
                currency={item.currencyCode}
                timezone={item.timezone}
                onPress={() => handleRestaurantDetails(item.id)}
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
