import getState from "../getStateFromGlobal";
import { produce } from "immer";

import { createAction } from "../helpers";
import { Statuses } from "../../consts";

// -- default state
const initialState = {
  data: undefined,
  products: [],
  status: Statuses.DEFAULT,
  total: 0
};

// -- actions
const LOAD_REQUEST = "@eshop/category/load/REQUEST";
const LOAD_SUCCESS = "@eshop/category/load/SUCCESS";
const LOAD_FAILURE = "@eshop/category/load/FAILURE";

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
  return produce(state, draft => {
    /* eslint-disable default-case */
    switch (action.type) {
      case LOAD_REQUEST:
        /* we don't unset draft.data because it causes
           blink in menu navigation */

        draft.status = Statuses.PENDING;
        draft.products = [];
        draft.total = 0;
        break;
      case LOAD_SUCCESS:
        draft.status = Statuses.SUCCESS;
        const { category, products, total } = action.payload;
        draft.data = category;
        draft.products = products;
        draft.total = total;
        break;
      case LOAD_FAILURE:
        draft.status = Statuses.BUILD_ERROR(action.error);
        draft.data = initialState.data;
        draft.products = [];
        break;
      case UNSET:
        return { ...initialState };
    }
    /* eslint-enable */
  });
}
