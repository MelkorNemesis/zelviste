import { call, put } from "redux-saga/effects";

import { getCategoryBySeoUrl, getCategoryProducts } from "../../api";
import { api } from "./helpers";
import {
  categoryLoadFailure,
  categoryLoadRequest,
  categoryLoadSuccess
} from "../ducks";
import { Category as CategoryConsts } from "../../shared/consts";
import { calculateLimitOffset } from "../../utils";

export function* loadCategorySaga({
  seo_url,
  order = CategoryConsts.DEFAULT_SORTING,
  page = 1
}) {
  const { offset, limit } = calculateLimitOffset({
    page,
    itemsPerPage: CategoryConsts.ITEMS_PER_PAGE
  });

  yield put(categoryLoadRequest());
  try {
    const { data: category } = yield call(api, getCategoryBySeoUrl, seo_url);
    const { data: products, total } = yield call(
      api,
      getCategoryProducts,
      category.id,
      {
        limit,
        offset,
        sort: order
      }
    );
    yield put(categoryLoadSuccess({ category, products, total }));
  } catch (err) {
    yield put(categoryLoadFailure(err));
  }
}
