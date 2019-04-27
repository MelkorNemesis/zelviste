import React from "react";
import styled from "styled-components";

const getFontSize = ({ h1, h2, smaller }) => {
  if (h1) {
    return "28px";
  } else if (h2) {
    return "24px";
  } else if (smaller) {
    return "12px";
  }
};

const getTextDecoration = ({ strike }) => {
  if (strike) {
    return "line-through";
  } else {
    return "none";
  }
};

const StyledText = styled.span`
  margin: ${({ first }) => (first ? 0 : "1em")} 0 1em;
  font-size: ${getFontSize};
  text-decoration: ${getTextDecoration};
`;

export const Text = ({ children, ...rest }) => (
  <StyledText {...rest}>{children}</StyledText>
);

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
