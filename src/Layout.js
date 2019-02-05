import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Routes } from "./consts";

import * as Pages from "./components/pages";
import * as L from "./components/layout";
import { NavigationContainer } from "./containers";

import "./Layout.scss";

export class Layout extends Component {
  state = {
    isNavOpen: false
  };

  handleNavToggle = () => {
    this.setState(state => ({ ...state, isNavOpen: !state.isNavOpen }));
  };

  render() {
    return (
      <div className="Layout">
        <L.Pusher isNavOpen={this.state.isNavOpen}>
          <NavigationContainer
            watchOutsideClick={this.state.isNavOpen}
            onClickOutside={() => {
              this.setState(() => ({ isNavOpen: false }));
            }}
          />
          <L.Content hasOverlay={this.state.isNavOpen}>
            <L.Header onMenuClick={this.handleNavToggle} />
            <L.Wrapper>
              <Switch>
                <Route exact path="/" component={Pages.Homepage} />
                <Route
                  path={Routes.category.pattern}
                  component={Pages.Category}
                />
                <Route
                  path={Routes.product.pattern}
                  component={Pages.Product}
                />
                <Route component={Pages.NotFound} />
              </Switch>
              <L.Footer />
            </L.Wrapper>
          </L.Content>
        </L.Pusher>
      </div>
    );
  }
}
