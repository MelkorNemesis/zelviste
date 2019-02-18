import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { routes } from "./routes";
import * as L from "./components/layout";
import { Navigation } from "./containers";

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
          <Navigation
            watchOutsideClick={this.state.isNavOpen}
            onClickOutside={() => {
              this.setState(() => ({ isNavOpen: false }));
            }}
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
