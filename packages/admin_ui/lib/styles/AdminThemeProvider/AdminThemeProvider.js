import React, { Fragment } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider } from "emotion-theming";

import { GlobalStylesEmotion } from "../GlobalStyles/GlobalStyles";

import * as theme from "../theme";

export const AdminThemeProvider = ({ children }) => {
  return (
    <Fragment>
      <StyledThemeProvider theme={theme}>
        <Fragment>{children}</Fragment>
      </StyledThemeProvider>
    </Fragment>
  );
};

export const EmotionAdminThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStylesEmotion />
      {children}
    </ThemeProvider>
  );
};
