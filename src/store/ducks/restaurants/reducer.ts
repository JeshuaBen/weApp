import { Reducer } from "@reduxjs/toolkit";
import { RestaurantState, RestaurantTypes } from "./types";

const INITIAL_STATE: RestaurantState = {
  data: { docs: [] },
  selected: undefined,
  error: false,
  loading: false,
};

const reducer: Reducer<RestaurantState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RestaurantTypes.LOAD_REQUEST:
      console.log("Manga");
      return { ...state, loading: true };
    case RestaurantTypes.LOAD_SUCCESS:
      console.log("UVA MIZERA", action.payload.data);
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case RestaurantTypes.LOAD_FAILURE:
      console.log("Ab");
      return { ...state, loading: false, error: true, data: [] };

    case RestaurantTypes.GET_ONE_REQUEST:
      console.log("Manga");
      return { ...state, loading: true };
    case RestaurantTypes.GET_ONE_SUCCESS:
      console.log("UVA MIZERA", action.payload.data);
      return {
        ...state,
        loading: false,
        error: false,
        selected: action.payload.data,
      };
    case RestaurantTypes.GET_ONE_FAILURE:
      console.log("Ab");
      return { ...state, loading: false, error: true, selected: undefined };
    default:
      return state;
  }
};

export default reducer;
