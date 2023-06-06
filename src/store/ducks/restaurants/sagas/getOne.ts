import { call, put } from "redux-saga/effects";

import {
  getOneFailure,
  getOneSuccess,
} from "../../restaurants/reducer/actions";

import { GetOneRequestAction } from "../../restaurants/reducer/types";
import api from "../../../../services/api";

export function* getOne(action: GetOneRequestAction): Generator {
  const { id } = action.payload;

  try {
    const response: any = yield call(api.get, `restaurants/${id}`);

    yield put(getOneSuccess(response.data));
  } catch (err) {
    yield put(getOneFailure());
  }
}
