import { call, put } from "redux-saga/effects";

import { getProductBySeoUrl } from "../../api";
import { api } from "./helpers";

import {
  productLoadRequest,
  productLoadSuccess,
  productLoadFailure
} from "../ducks";

export function* loadProductSaga({ seo_url }) {
  yield put(productLoadRequest());
  try {
    const { data: product } = yield call(api, getProductBySeoUrl, seo_url);
    yield put(productLoadSuccess(product));
  } catch (err) {
    yield put(productLoadFailure(err));
  }
}
