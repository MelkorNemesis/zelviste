import styled from "styled-components";

export const Text = styled.div``;

function getHeaderFontSize({ h1 }) {
  if (h1) {
    return "32px";
  }

  return "22px";
}

Text.Header = styled.h1`
  font-weight: 700;
  font-size: ${getHeaderFontSize};
`;
