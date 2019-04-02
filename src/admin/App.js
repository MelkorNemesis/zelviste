import React, { Fragment } from "react";
import { Provider } from "unstated";
import { Route, Router, Switch } from "react-router-dom";
import * as history from "history";
import { ThemeProvider } from "styled-components";
import UNSTATED from "unstated-debug";

import { Content, Wrapper, Sidebar } from "./components/layout";
import { Dashboard } from "./components/pages";
import * as variables from "./styles/variables";
import { GlobalStyles, Reset } from "./components/styles";

// log unstated only in development mode
UNSTATED.logStateChanges = process.env.NODE_ENV === "development";

const browserHistory = history.createBrowserHistory({ basename: "/admin" });

const App = () => (
  <Provider>
    <ThemeProvider theme={variables}>
      <Fragment>
        <Reset />
        <GlobalStyles />

        <Wrapper>
          <Router history={browserHistory}>
            <Fragment>
              <Sidebar />
              <Content>
                <Switch>
                  <Route path="/dashboard" component={Dashboard} />
                  <Route render={() => "Stránka nenalezena"} />
                </Switch>
              </Content>
            </Fragment>
          </Router>
        </Wrapper>
      </Fragment>
    </ThemeProvider>
  </Provider>
);

export default App;
