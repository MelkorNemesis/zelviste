import { createGlobalStyle } from "styled-components";
import { theme } from "../../../styles";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${theme("font_family")};
    font-size: ${theme("font_size_base")};
    color: ${theme("c_font")}
  }
  
  html, body, #root {
    height: 100%;
  }
`;
