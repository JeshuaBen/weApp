import { Action, action } from "typesafe-actions";
import {
  RestaurantTypes,
  RestaurantData,
  LoadRequestAction,
  GetOneRequestAction,
  GetOneSuccess,
} from "./types";
import { Restaurant } from "../../../../dtos/RestaurantDTO";

export const loadRequest = (offset: number, limit: number): LoadRequestAction =>
  action(RestaurantTypes.LOAD_REQUEST, { offset, limit });

export const loadSuccess = (data: RestaurantData) =>
  action(RestaurantTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(RestaurantTypes.LOAD_FAILURE);

export const getOneRequest = (id: string): GetOneRequestAction =>
  action(RestaurantTypes.GET_ONE_REQUEST, { id });

export const getOneSuccess = (selected: Restaurant): GetOneSuccess =>
  action(RestaurantTypes.GET_ONE_SUCCESS, selected);

export const getOneFailure = () => action(RestaurantTypes.GET_ONE_FAILURE);

export const toggleFavorite = (id: string) =>
  action(RestaurantTypes.TOGGLE_FAVORITE, { id });
