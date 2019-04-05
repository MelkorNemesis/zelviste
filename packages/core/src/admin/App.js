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

class App extends React.PureComponent {
  state = {
    bootstrapped: false
  };

  componentDidMount() {
    // TODO: bootstrap app
    setTimeout(() => {
      this.setState({
        bootstrapped: true
      });
    }, 1000);
  }

  static get router() {
    return (
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
    );
  }

  static get loader() {
    return "loading...";
  }

  render() {
    const { router, loader } = this.constructor;

    return (
      <Provider>
        <ThemeProvider theme={variables}>
          <Fragment>
            <Reset />
            <GlobalStyles />

            <Wrapper>{this.state.bootstrapped ? router : loader}</Wrapper>
          </Fragment>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
