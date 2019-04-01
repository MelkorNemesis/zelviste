import React from "react";
import styled from "styled-components";

import { theme } from "../../../styles";

// -- Default button
const StyledButton = styled.button`
  height: 38px;
  padding: 0 ${theme("spacing_m")};
  margin-top: ${props => (props.first ? 0 : theme("spacing_m"))};

  color: #fff;
  font-size: ${theme("input_font_size")};
  font-weight: 500;
  font-family: ${theme("font_family")};
  letter-spacing: 0.5px;

  background: #95a5a6;
  border: none;
  border-radius: ${theme("border_radius")};

  cursor: pointer;
`;

export const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

// -- Primary button
const StyledPrimaryButton = styled(StyledButton)`
  background: #2ecc71;
  color: #fff;
`;

Button.Primary = ({ children, ...rest }) => (
  <StyledPrimaryButton {...rest}>{children}</StyledPrimaryButton>
);
