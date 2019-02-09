import { call, put, select } from "redux-saga/effects";

import { getCategories } from "../api";
import {
  categoriesFailure,
  categoriesRequest,
  categoriesSuccess,
  selectCategories
} from "../redux/ducks";

/* eslint-disable require-yield */
export function* initWatchersSaga() {
  console.log("initWatchersSaga");
}
/* eslint-enable require-yield */

export function* startupSaga() {
  // load categories
  const categories = yield select(selectCategories);
  if (!categories.length) {
    yield put(categoriesRequest());
    try {
      const { data } = yield call(getCategories);
      yield put(categoriesSuccess(data));
    } catch (err) {
      yield put(categoriesFailure(err));
    }
  }
}
