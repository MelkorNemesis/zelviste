import React from "react";
import ReactDOM from "react-dom";
import { Subscribe, Provider } from "unstated";

import App from "./App";
import { UserContainer } from "./unstated";

import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider>
    <Subscribe to={[UserContainer]}>
      {user => {
        return (
          <App
            onMount={() => {
              user.signIn().catch(() => {
                window.location.href = process.env.REACT_APP_SIGN_IN_URL;
              });
            }}
            bootstrapped={user.isLoggedIn}
          />
        );
      }}
    </Subscribe>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
