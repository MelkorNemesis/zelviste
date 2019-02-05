import getState from "../getStateFromGlobal";

// -- default state
const initialState = {
  products: []
};

// -- actions

// -- action creators

// -- reducer
export function reducer(state = getState("category") || initialState, action) {
  return state;
}
