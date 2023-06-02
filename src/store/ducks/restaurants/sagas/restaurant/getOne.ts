import { call, put } from "redux-saga/effects";
import api from "../../../../../services/api";
import { getOneFailure, getOneSuccess } from "../../actions";
import { Restaurant } from "../../../../../dtos/RestaurantDTO";
import { GetOneRequestAction } from "../../types";

export function* getOne(action: GetOneRequestAction): Generator {
  const { id } = action.payload;

  try {
    const response: any = yield call(api.get, `restaurants/${id}`);

    yield put(getOneSuccess(response.data));
  } catch (err) {
    yield put(getOneFailure());
  }
}
