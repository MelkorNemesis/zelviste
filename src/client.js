import App from "./frontend/App";
import React from "react";
import { hydrate } from "react-dom";

import "./frontend/index.scss";

hydrate(<App />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
