import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { routes } from "../shared/routes";
import * as L from "./components/layout";
import { Navigation } from "./containers";

import "./Layout.scss";
import { Meta } from "./components/atoms";

export class Layout extends Component {
  state = {
    isNavOpen: false
  };

  handleNavToggle = () => {
    this.setState(state => ({ ...state, isNavOpen: !state.isNavOpen }));
  };

  closeNav = () => {
    this.setState(() => ({ isNavOpen: false }));
  };

  render() {
    return (
      <div className="Layout">
        <Meta />
        <L.Pusher isNavOpen={this.state.isNavOpen}>
          <Navigation
            watchOutsideClick={this.state.isNavOpen}
            onNavigate={this.closeNav}
            onClickOutside={this.closeNav}
          />
          <L.Content hasOverlay={this.state.isNavOpen}>
            <L.Header onMenuClick={this.handleNavToggle} />
            <L.Wrapper>
              <Switch>
                {routes.map((def, idx) => (
                  <Route key={idx} {...def} />
                ))}
              </Switch>
              <L.Footer />
            </L.Wrapper>
          </L.Content>
        </L.Pusher>
      </div>
    );
  }
}
