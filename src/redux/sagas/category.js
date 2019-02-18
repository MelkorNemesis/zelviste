import { call, put } from "redux-saga/effects";

import { getCategoryBySeoUrl, getCategoryProducts } from "../../api";
import { api } from "./helpers";
import {
  categoryLoadFailure,
  categoryLoadRequest,
  categoryLoadSuccess
} from "../ducks";

export function* loadCategorySaga(seoUrl) {
  yield put(categoryLoadRequest());
  try {
    const { data: category } = yield call(api, getCategoryBySeoUrl, seoUrl);
    const { data: products } = yield call(
      api,
      getCategoryProducts,
      category.id
    );
    yield put(categoryLoadSuccess({ category, products }));
  } catch (err) {
    yield put(categoryLoadFailure(err));
  }
}
