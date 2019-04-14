import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSize};
    color: ${({ theme }) => theme.color}
  }
  
  html, body, #root {
    height: 100%;
  }
  
  * {
    box-sizing: border-box;
  }
`;
