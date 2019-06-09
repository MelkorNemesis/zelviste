import React from "react";
import { ThemeProvider } from "emotion-theming";

import { GlobalStylesEmotion } from "../GlobalStyles/GlobalStyles";

import * as theme from "../theme";

export const EmotionAdminThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStylesEmotion />
      {children}
    </ThemeProvider>
  );
};
