import React from "react";
import styled from "styled-components";

const getFontSize = ({ h1, h2 }) => {
  if (h1) {
    return "28px";
  } else if (h2) {
    return "24px";
  } else {
    return "20px";
  }
};

const StyledText = styled.p`
  font-size: ${getFontSize};
`;

export const Text = ({ children }) => <StyledText>{children}</StyledText>;

Text.Paragraph = ({ children, ...rest }) => (
  <StyledText as="p" {...rest}>
    {children}
  </StyledText>
);

Text.Header = ({ children, ...rest }) => {
  let HeaderTag;
  const { h1, h2, h3 } = rest;

  if (h1) {
    HeaderTag = "h1";
  } else if (h2) {
    HeaderTag = "h2";
  } else if (h3) {
    HeaderTag = "h3";
  }

  return (
    <StyledText as={HeaderTag} {...rest}>
      {children}
    </StyledText>
  );
};
