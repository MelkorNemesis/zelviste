import React, { Fragment } from "react";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

import { Content, Wrapper, Sidebar } from "./components/layout";
import { fontSizeBase, fontFamily, fontColor } from "./styles";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${fontFamily};
    font-size: ${fontSizeBase};
    color: ${fontColor}
  }
  
  html, body, #root {
    height: 100%;
  }
`;

const App = () => (
  <Fragment>
    <Reset />
    <GlobalStyles />

    <Wrapper>
      <Sidebar />
      <Content>Here goes router</Content>
    </Wrapper>
  </Fragment>
);

export default App;
