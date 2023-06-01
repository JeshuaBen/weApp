import { Restaurant } from "../../../dtos/RestaurantDTO";

export enum RestaurantTypes {
  LOAD_REQUEST = "@restaurant/LOAD_REQUEST",
  LOAD_SUCCESS = "@restaurant/LOAD_SUCCESS",
  LOAD_FAILURE = "@restaurant/LOAD_FAILURE",
  GET_ONE_REQUEST = "@restaurant/GET_ONE_REQUEST",
  GET_ONE_SUCCESS = "@restaurant/GET_ONE_SUCCESS",
  GET_ONE_FAILURE = "@restaurant/GET_ONE_FAILURE",
}

export type RestaurantData = {
  docs: Restaurant[];
};

export interface RestaurantState {
  readonly data: RestaurantData;
  readonly loading: boolean;
  readonly error: boolean;
  readonly selected?: Restaurant;
}
