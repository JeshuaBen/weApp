import { action } from "typesafe-actions";
import { FavoriteTypes } from "./types";
import { Restaurant } from "../../../dtos/RestaurantDTO";

export const addToFavorites = (restaurant: Restaurant) =>
  action(FavoriteTypes.ADD_TO_FAVORITES, { restaurant });

export const removeFromFavorites = (restaurant: Restaurant) => {
  action(FavoriteTypes.REMOVE_FROM_FAVORITES, { restaurant });
};
