import React, { Fragment } from "react";
import { Route, Router, Switch } from "react-router-dom";
import * as history from "history";
import UNSTATED from "unstated-debug";
import PropTypes from "prop-types";
import { EmotionAdminThemeProvider, Spinner } from "@eshop/admin_ui";

import { Content, Wrapper, Sidebar } from "./components/layout";
import {
  Dashboard,
  Categories,
  Orders,
  Products,
  Product
} from "./components/pages";

// log unstated only in development mode
UNSTATED.logStateChanges = process.env.NODE_ENV === "development";

const browserHistory = history.createBrowserHistory();

class App extends React.PureComponent {
  componentDidMount() {
    this.props.onMount();
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
              <Route path="/categories" component={Categories} />
              <Route path="/products" component={Products} />
              <Route path="/product/:id([0-9]+)" component={Product} />
              <Route render={() => "Stránka nenalezena"} />
            </Switch>
          </Content>
        </Fragment>
      </Router>
    );
  }

  static get loader() {
    return <Spinner fullPage>Načítám...</Spinner>;
  }

  render() {
    const { router, loader } = this.constructor;
    const { bootstrapped } = this.props;

    return (
      <EmotionAdminThemeProvider>
        <Wrapper>{bootstrapped ? router : loader}</Wrapper>
      </EmotionAdminThemeProvider>
    );
  }
}

App.propTypes = {
  onMount: PropTypes.func.isRequired,
  bootstrapped: PropTypes.bool.isRequired
};

export default App;
