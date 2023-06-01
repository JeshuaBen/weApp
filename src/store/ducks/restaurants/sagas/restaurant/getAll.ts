import { call, put } from "redux-saga/effects";
import api from "../../../../../services/api";

import { loadSuccess, loadFailure } from "../../actions";
import { RestaurantData } from "../../types";

export function* getAll(): Generator {
  try {
    const response: RestaurantData[] = yield call(api.get, "/restaurants");

    console.log(response);

    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}
