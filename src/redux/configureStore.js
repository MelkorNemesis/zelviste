import { applyMiddleware, createStore, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";

import { isBrowser } from "../utils";
import { category, app, product } from "./ducks";
import { logger } from "./middlewares";

const rootReducer = combineReducers({
  category: category.reducer,
  app: app.reducer,
  product: product.reducer
});

export const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// add some middlewares only in browser
if (isBrowser()) {
  middlewares.unshift(logger);
}

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(...middlewares));
}
