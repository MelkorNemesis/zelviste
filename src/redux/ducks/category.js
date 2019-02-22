import getState from "../getStateFromGlobal";
import { produce } from "immer";

import { createAction } from "../helpers";
import { Statuses } from "../../consts";

// -- default state
const initialState = {
  data: undefined,
  products: [],
  status: Statuses.DEFAULT
};

// -- actions
const LOAD_REQUEST = "@eshop/category/load/REQUEST";
const LOAD_SUCCESS = "@eshop/category/load/SUCCESS";
const LOAD_FAILURE = "@eshop/category/load/FAILURE";

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

// -- reducer
export function reducer(state = getState("category") || initialState, action) {
  return produce(state, draft => {
    /* eslint-disable default-case */
    switch (action.type) {
      case LOAD_REQUEST:
        draft.status = Statuses.PENDING;
        draft.data = initialState.data;
        draft.products = [];
        break;
      case LOAD_SUCCESS:
        draft.status = Statuses.SUCCESS;
        const { category, products } = action.payload;
        draft.data = category;
        draft.products = products;
        break;
      case LOAD_FAILURE:
        draft.status = Statuses.BUILD_ERROR(action.error);
        draft.data = initialState.data;
        draft.products = [];
    }
    /* eslint-enable */
  });
}
