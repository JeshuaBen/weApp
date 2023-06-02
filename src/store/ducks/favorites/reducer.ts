import { Reducer } from "@reduxjs/toolkit";
import { FavoriteState, FavoriteTypes } from "./types";

const INITIAL_STATE: FavoriteState = {
  favorites: [],
};

const reducer: Reducer<FavoriteState> = (
  state: FavoriteState = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case FavoriteTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload.favorite],
      };

    case FavoriteTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite._id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default reducer;
