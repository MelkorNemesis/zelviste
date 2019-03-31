import React, { Fragment } from "react";
import { Route, Router, Switch } from "react-router-dom";
import * as history from "history";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

import { Content, Wrapper, Sidebar } from "./components/layout";
import { Dashboard } from "./components/pages";
import { font_size_base, font_family, font_color } from "./styles";

const browserHistory = history.createBrowserHistory({ basename: "/admin" });

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${font_family};
    font-size: ${font_size_base};
    color: ${font_color}
  }
  
  html, body, #root {
    height: 100%;
  }
`;

const App = () => (
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
);

export default App;
