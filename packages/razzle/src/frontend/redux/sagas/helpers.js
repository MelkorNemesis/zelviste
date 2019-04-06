import { call } from "redux-saga/effects";

import { isBrowser } from "../../utils";

export function handleError(err, prefix = "Error: ") {
  console.error(prefix, err);
}

export function errorLogClient(...args) {
  if (isBrowser()) {
    return handleError(...args);
  }
}

export function* api(fn, ...args) {
  try {
    return yield call(fn, ...args);
  } catch (err) {
    errorLogClient(err, "API Error: ");
    throw err;
  }
}
