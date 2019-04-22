import App from "./frontend/App";
import React from "react";
import { hydrate } from "react-dom";

import "./frontend/index.scss";

console.log(process.env.RAZZLE_SIGN_IN_URL);

hydrate(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
