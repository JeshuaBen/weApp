import { Restaurant } from "../../../dtos/RestaurantDTO";

export enum FavoriteTypes {
  ADD_TO_FAVORITES = "@favorite/ADD_TO_FAVORITES",
  REMOVE_FROM_FAVORITES = "@favorite/REMOVE_FROM_FAVORITES",
}

export interface FavoriteState {
  readonly favorites: Restaurant[];
}
