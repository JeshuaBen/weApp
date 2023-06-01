import { takeLatest } from "redux-saga/effects";
import { RestaurantTypes } from "../../types";
import { getAll } from "./getAll";

const tasks = [takeLatest(RestaurantTypes.LOAD_REQUEST, getAll)];

export default tasks;
