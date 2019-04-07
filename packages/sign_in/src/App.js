import React, { Component } from "react";
// import { AdminThemeProvider } from "@eshop/admin_ui";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      // <AdminThemeProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Sign in: Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      // </AdminThemeProvider>
    );
  }
}

export default App;
