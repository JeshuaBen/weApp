// Here is where we will set the rootReducer, thinking aboout

import { combineReducers } from "redux";

import restaurants from "./restaurants/reducer";

export default combineReducers({
  restaurants,
});
