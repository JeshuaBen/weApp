import { StatusBar } from "expo-status-bar";
import * as S from "./styles";
import { FavoritesHeader } from "./components/FavoritesHeader";

import { RestaurantCard } from "../../components/RestaurantCard";

import { ApplicationState } from "../../store";
import { Dispatch, bindActionCreators } from "@reduxjs/toolkit";
import * as RestaurantsActions from "../../store/ducks/restaurants/reducer/actions";
import { connect } from "react-redux";
import { FavoriteProps } from "./types";
import { useMemo } from "react";

const Favorites = ({
  navigation,
  restaurants,
  toggleRestaurants,
}: FavoriteProps) => {
  const handleRestaurantDetails = (id: string) => {
    navigation.navigate("Details", { id });
  };

  const filterFavorites = useMemo(
    () => restaurants.docs.filter((restaurant) => restaurant.isFavorite),
    [restaurants]
  );

  return (
    <S.Container>
      <StatusBar style="dark" />
      <FavoritesHeader handleGoBack={() => navigation.goBack()} />

      <S.InfoWrapper>
        <S.FavoriteInfo>Restaurantes favoritos</S.FavoriteInfo>
        <S.InfoComplement>
          Todos os restaurantes com <S.Favorite /> são seus favoritos. Toque no
          card para navegar para os detalhes.
        </S.InfoComplement>
      </S.InfoWrapper>
      <S.FavoriteRestaurants>
        {filterFavorites.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            data={restaurant}
            onPress={() => handleRestaurantDetails(String(restaurant._id))}
            toggleFavorite={() => toggleRestaurants(String(restaurant._id))}
            disabled={restaurant.isFavorite}
          />
        ))}
      </S.FavoriteRestaurants>
    </S.Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  restaurants: state.restaurants.data,
  loading: state.restaurants.loading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RestaurantsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
