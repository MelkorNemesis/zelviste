import { call, put } from "redux-saga/effects";

import { getCategories } from "../api";
import {
  categoriesFailure,
  categoriesRequest,
  categoriesSuccess
} from "../redux/ducks";

export function* initWatchersSaga() {
  console.log("initWatchersSaga");
}

export function* startupSaga() {
  yield put(categoriesRequest());
  try {
    const { data } = yield call(getCategories);
    yield put(categoriesSuccess(data));
  } catch (err) {
    yield put(categoriesFailure(err));
  }
}
