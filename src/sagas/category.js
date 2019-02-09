import { call, put } from "redux-saga/effects";

import { getCategoryBySeoUrl } from "../api";
import {
  categoryLoadFailure,
  categoryLoadRequest,
  categoryLoadSuccess
} from "../redux/ducks";

export function* loadCategorySaga(seoUrl) {
  yield put(categoryLoadRequest());

  try {
    const { data } = yield call(getCategoryBySeoUrl, seoUrl);
    yield put(categoryLoadSuccess(data));
  } catch (err) {
    yield put(categoryLoadFailure(err));
  }
}
