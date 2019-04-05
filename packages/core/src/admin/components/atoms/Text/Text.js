import styled from "styled-components";

import { theme } from "../../../styles";

export const Text = styled.div``;

function getHeaderFontSize({ h1 }) {
  if (h1) {
    return "26px";
  }

  return "22px";
}

Text.Header = styled.h1`
  margin-bottom: 0.5em;

  font-weight: 700;
  font-size: ${getHeaderFontSize};
  font-family: ${theme("font_family_alt")};
`;
