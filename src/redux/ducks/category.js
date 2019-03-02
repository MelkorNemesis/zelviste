import getState from "../getStateFromGlobal";
import { produce } from "immer";

import { createAction } from "../helpers";
import { Statuses } from "../../consts";

// -- default state
const initialState = {
  data: undefined,
  products: [],
  status: Statuses.DEFAULT,
  productsStatus: Statuses.DEFAULT,
  total: 0
};

// -- actions
const LOAD_REQUEST = "@eshop/category/load/REQUEST";
const LOAD_SUCCESS = "@eshop/category/load/SUCCESS";
const LOAD_FAILURE = "@eshop/category/load/FAILURE";

const LOAD_PRODUCTS_REQUEST = "@eshop/category/load_products/REQUEST";
const LOAD_PRODUCTS_SUCCESS = "@eshop/category/load_products/SUCCESS";
const LOAD_PRODUCTS_FAILURE = "@eshop/category/load_products/FAILURE";

const UNSET = "@eshop/category/unset";

// -- action creators
export function categoryLoadRequest() {
  return createAction(LOAD_REQUEST)();
}

export function categoryLoadFailure(err) {
  return createAction(LOAD_FAILURE)(undefined, err);
}

export function categoryLoadSuccess(data) {
  return createAction(LOAD_SUCCESS)(data);
}

export function categoryLoadProductRequest() {
  return createAction(LOAD_PRODUCTS_REQUEST)();
}

export function categoryLoadProductFailure(err) {
  return createAction(LOAD_PRODUCTS_FAILURE)(undefined, err);
}

export function categoryLoadProductSuccess(data) {
  return createAction(LOAD_PRODUCTS_SUCCESS)(data);
}

export function categoryUnset() {
  return createAction(UNSET)();
}

// -- selectors
export function selectActiveIds(state) {
  const ids = [];
  const {
    category: { data }
  } = state;

  if (data) {
    ids.push(data.id);

    if (data.parent) {
      ids.push(data.parent.id);
    }
  }

  return ids;
}

// -- reducer
export function reducer(state = getState("category") || initialState, action) {
  const payload = action.payload;

  return produce(state, draft => {
    /* eslint-disable default-case */
    switch (action.type) {
      case LOAD_REQUEST:
        /* we don't unset draft.data because it causes
           blink in menu navigation */
        draft.status = draft.productsStatus = Statuses.PENDING;
        draft.products = [];
        draft.total = 0;
        break;

      case LOAD_SUCCESS:
        draft.status = draft.productsStatus = Statuses.SUCCESS;
        draft.data = payload.category;
        draft.products = payload.products;
        draft.total = payload.total;
        break;

      case LOAD_FAILURE:
        draft.status = draft.productsStatus = Statuses.BUILD_ERROR(
          action.error
        );
        draft.data = initialState.data;
        draft.products = [];
        break;

      case LOAD_PRODUCTS_REQUEST:
        draft.productsStatus = Statuses.PENDING;
        draft.products = [];
        draft.total = 0;
        break;

      case LOAD_PRODUCTS_SUCCESS:
        draft.productsStatus = Statuses.SUCCESS;
        draft.products = payload.products;
        draft.total = payload.total;
        break;

      case LOAD_PRODUCTS_FAILURE:
        draft.productsStatus = Statuses.BUILD_ERROR(
            action.error
        );
        draft.products = [];
        draft.total = 0;
        break;

      case UNSET:
        return { ...initialState };
    }
    /* eslint-enable */
  });
}
