import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../GlobalStyles/GlobalStyles";

import * as theme from "../theme";

export const AdminThemeProvider = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Fragment>
  );
};
