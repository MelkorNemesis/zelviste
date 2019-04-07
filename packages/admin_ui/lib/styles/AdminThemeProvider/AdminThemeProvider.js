import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../GlobalStyles/GlobalStyles";

import * as theme from "../theme";

export const AdminThemeProvider = ({ children }) => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyles />
          {children}
        </Fragment>
      </ThemeProvider>
    </Fragment>
  );
};
