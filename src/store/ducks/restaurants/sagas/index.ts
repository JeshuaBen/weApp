// Here where we are going to set the combined tasks from saga

import { all } from "redux-saga/effects";
import RestaurantTasks from "./restaurant/index";

export default function* rootSaga(): Generator {
  return yield all([...RestaurantTasks]);
}
