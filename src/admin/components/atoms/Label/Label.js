import React from "react";
import styled from "styled-components";

import { StyledTextInput } from "..";
import { theme } from "../../../styles";

export const StyledLabel = styled.label`
  display: block;

  font-size: 14px;
  font-weight: 500;

  & + ${StyledTextInput} {
    margin-top: ${theme("spacing_xs")};
  }
`;

export const Label = ({ children, ...rest }) => (
  <StyledLabel {...rest}>{children}</StyledLabel>
);
