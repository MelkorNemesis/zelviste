import { isBrowser } from "../utils";

export default function getStateFromGlobal(reducer) {
  if (
    isBrowser() &&
    "__REDUX_DATA__" in window &&
    window.__REDUX_DATA__[reducer] !== undefined
  ) {
    return window.__REDUX_DATA__[reducer];
  }
  return undefined;
}
