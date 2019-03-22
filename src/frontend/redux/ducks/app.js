import getState from "../getStateFromGlobal";
import { produce } from "immer/dist/immer";

import { createAction } from "../helpers";
import { Statuses } from "../../consts";

// -- default state
const initialState = {
  categories: [],
  categoriesStatus: Statuses.DEFAULT
};

// -- actions
const CATEGORIES_REQUEST = "@eshop/app/categories/REQUEST";
const CATEGORIES_SUCCESS = "@eshop/app/categories/SUCCESS";
const CATEGORIES_FAILURE = "@eshop/app/categories/FAILURE";

// -- action creators
export function categoriesRequest() {
  return createAction(CATEGORIES_REQUEST)();
}

export function categoriesFailure(err) {
  return createAction(CATEGORIES_FAILURE)(undefined, err);
}

export function categoriesSuccess(categories) {
  return createAction(CATEGORIES_SUCCESS)(categories);
}

// -- selectors
export function selectCategories(state) {
  return state.app.categories;
}

// -- reducer
export function reducer(state = getState("app") || initialState, action) {
  return produce(state, draft => {
    /* eslint-disable default-case */
    switch (action.type) {
      case CATEGORIES_REQUEST:
        draft.categoriesStatus = Statuses.PENDING;
        draft.categories = [];
        break;
      case CATEGORIES_SUCCESS:
        draft.categoriesStatus = Statuses.SUCCESS;
        draft.categories = action.payload;
        break;
      case CATEGORIES_FAILURE:
        draft.categoriesStatus = Statuses.ERROR;
    }
    /* eslint-enable */
  });
}
