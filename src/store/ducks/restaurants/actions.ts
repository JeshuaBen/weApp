import { action } from "typesafe-actions";
import { RestaurantTypes, RestaurantData } from "./types";

export const loadRequest = () => action(RestaurantTypes.LOAD_REQUEST);

export const loadSuccess = (data: RestaurantData) =>
  action(RestaurantTypes.LOAD_SUCCESS, data);

export const loadFailure = () => action(RestaurantTypes.LOAD_FAILURE);
