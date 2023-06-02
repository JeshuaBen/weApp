import { call, put } from "redux-saga/effects";
import api from "../../../../../services/api";

import { loadSuccess, loadFailure } from "../../actions";
import { LoadRequestAction } from "../../types";

export function* getAll(action: LoadRequestAction): Generator {
  const { offset, limit } = action.payload;

  try {
    const response: any = yield call(
      api.get,
      `/restaurants?offset=${offset}&limit=${limit}`
    );

    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}
