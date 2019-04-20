import React, { Fragment } from "react";
import { Provider } from "unstated";
import { Route, Router, Switch } from "react-router-dom";
import * as history from "history";
import UNSTATED from "unstated-debug";
import { AdminThemeProvider, Spinner } from "@eshop/admin_ui";

import { Content, Wrapper, Sidebar } from "./components/layout";
import { Dashboard, Orders, Products } from "./components/pages";

// log unstated only in development mode
UNSTATED.logStateChanges = process.env.NODE_ENV === "development";

const browserHistory = history.createBrowserHistory();

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
              <Route path="/" exact component={Dashboard} />
              <Route path="/orders" component={Orders} />
              <Route path="/products" component={Products} />
              <Route render={() => "Stránka nenalezena"} />
            </Switch>
          </Content>
        </Fragment>
      </Router>
    );
  }

  static get loader() {
    return <Spinner fullPage>
      Načítám...
    </Spinner>
  }

  render() {
    const { router, loader } = this.constructor;

    return (
      <Provider>
        <AdminThemeProvider>
          <Wrapper>{this.state.bootstrapped ? router : loader}</Wrapper>
        </AdminThemeProvider>
      </Provider>
    );
  }
}

export default App;
