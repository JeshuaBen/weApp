import { takeLatest } from "redux-saga/effects";
import { RestaurantTypes } from "../../types";
import { getAll } from "./getAll";
import { getOne } from "./getOne";

const tasks = [
  takeLatest(RestaurantTypes.LOAD_REQUEST, getAll),
  takeLatest(RestaurantTypes.GET_ONE_REQUEST, getOne),
];

export default tasks;
