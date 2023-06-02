import { Reducer } from "@reduxjs/toolkit";
import { RestaurantState, RestaurantTypes } from "./types";

const INITIAL_STATE: RestaurantState = {
  data: { docs: [] },
  selected: undefined,
  error: false,
  loading: false,
};

const reducer: Reducer<RestaurantState> = (
  state: RestaurantState = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case RestaurantTypes.LOAD_REQUEST:
      return { ...state, loading: true };

    case RestaurantTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: { docs: [...state.data.docs, ...action.payload.data.docs] },
      };

    case RestaurantTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: { docs: [] } };

    case RestaurantTypes.GET_ONE_REQUEST:
      return { ...state, loading: true };

    case RestaurantTypes.GET_ONE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        selected: action.payload,
      };
    case RestaurantTypes.GET_ONE_FAILURE:
      return { ...state, loading: false, error: true, selected: undefined };

    case RestaurantTypes.TOGGLE_FAVORITE:
      const { id } = action.payload;
      const { docs } = state.data;
      const index = docs.findIndex((doc) => doc._id === id);
      const doc = docs[index];
      const newDoc = {
        ...doc,
        isFavorite: !doc.isFavorite,
      };
      docs[index] = newDoc;
      return {
        ...state,
        data: {
          ...state.data,
          docs,
        },
      };
    default:
      return state;
  }
};

export default reducer;
