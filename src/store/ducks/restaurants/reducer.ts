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
        selected: {
          ...action.payload,
          isFavorite: false,
        },
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

      const updatedDocs = [...docs];
      updatedDocs[index] = newDoc;

      const selected =
        state.selected && state.selected?._id === id
          ? { ...state.selected, isFavorite: newDoc.isFavorite }
          : state.selected;

      return {
        ...state,
        data: {
          ...state.data,
          docs: updatedDocs,
        },
        selected,
      };

    default:
      return state;
  }
};

export default reducer;
