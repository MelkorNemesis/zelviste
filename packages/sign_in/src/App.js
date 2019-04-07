import React, { Component } from "react";
import { AdminThemeProvider, Input } from "@eshop/admin_ui";

class App extends Component {
  render() {
    return (
      <AdminThemeProvider>
        <Input />
      </AdminThemeProvider>
    );
  }
}

export default App;
