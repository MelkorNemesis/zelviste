import { call, put, select } from "redux-saga/effects";

import {
  categoriesFailure,
  categoriesRequest,
  categoriesSuccess,
  selectCategories
} from "../ducks";
import { getCategories } from "../../api";
import { api } from "./helpers";

export function* bootstrapSaga() {
  // load categories
  const categories = yield select(selectCategories);
  if (!categories.length) {
    yield put(categoriesRequest());

    try {
      const { data } = yield call(api, getCategories);
      yield put(categoriesSuccess(data));
    } catch (err) {
      yield put(categoriesFailure(err));
    }
  }
}
