import React from "react";
import styled from "@emotion/styled";

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

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

// -- Text
export const Text = ({ children, ...rest }) => (
  <StyledText {...rest}>{children}</StyledText>
);

// -- Paragraph
Text.Paragraph = ({ children, ...rest }) => (
  <StyledText as="p" {...rest}>
    {children}
  </StyledText>
);

// -- Header
const StyledTextHeader = styled(StyledText)`
  margin-bottom: ${({ halfBottom }) => (halfBottom ? "0.5em" : "1em")};

  h2&,
  h3& {
    font-weight: 600;
  }
`;

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
    <StyledTextHeader as={HeaderTag} {...rest}>
      {children}
    </StyledTextHeader>
  );
};
