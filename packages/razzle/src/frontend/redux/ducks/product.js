import { produce } from "immer/dist/immer";

import getState from "../getStateFromGlobal";
import { createAction } from "../helpers";
import { Statuses } from "../../consts";

// -- default state
const initialState = {
  data: undefined,
  status: Statuses.DEFAULT
};

// -- actions
const LOAD_REQUEST = "@eshop/product/load/REQUEST";
const LOAD_SUCCESS = "@eshop/product/load/SUCCESS";
const LOAD_FAILURE = "@eshop/product/load/FAILURE";

const UNSET = "@eshop/product/unset";

// -- action creators
export function productLoadRequest() {
  return createAction(LOAD_REQUEST)();
}

export function productLoadFailure(err) {
  return createAction(LOAD_FAILURE)(undefined, err);
}

export function productLoadSuccess(data) {
  return createAction(LOAD_SUCCESS)(data);
}

export function productUnset() {
  return createAction(UNSET)();
}

// -- reducer
export function reducer(state = getState("product") || initialState, action) {
  const payload = action.payload;

  return produce(state, draft => {
    /* eslint-disable default-case */
    switch (action.type) {
      case LOAD_REQUEST:
        draft.status = Statuses.PENDING;
        break;

      case LOAD_SUCCESS:
        draft.status = Statuses.SUCCESS;
        draft.data = payload;
        break;

      case LOAD_FAILURE:
        draft.status = Statuses.BUILD_ERROR(action.error);
        draft.data = initialState.data;
        break;

      case UNSET:
        return { ...initialState };
    }
    /* eslint-enable */
  });
}
