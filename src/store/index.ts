//  Here we are going to implement Sagas middleware

import { createStore, Store as StoreType } from "redux";
import rootReducer from "./ducks/rootReducer";
import { RestaurantState } from "./ducks/restaurants/reducer/types";
import { StateType } from "typesafe-actions";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./ducks/rootSaga";
import { applyMiddleware } from "@reduxjs/toolkit";

export interface ApplicationState {
  restaurants: RestaurantState;
}

const sagaMiddleware = createSagaMiddleware();

const store: StoreType = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

export type Store = StateType<typeof store>;

export type RootState = StateType<typeof rootReducer>;

sagaMiddleware.run(rootSaga);

export default store;
