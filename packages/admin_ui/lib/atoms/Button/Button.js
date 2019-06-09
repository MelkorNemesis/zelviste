import React from "react";
import styled from "@emotion/styled";

// -- Default Button
const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ theme }) => theme.input_height};
  margin-top: ${({ theme }) => theme.control_margin_top};

  &[type="submit"] {
    margin-top: ${({ theme }) => theme.control_submit_margin_top};
  }

  font-size: 14px;
  font-weight: 600;
  color: #fff;

  cursor: pointer;
  border: none;
  border-radius: ${({ theme }) => theme.border_radius};
  background: #2980b9;
  outline: none;

  &:hover {
    background: #2969a2;
  }
  
  &:active {
    transform: translateY(2px);
  }
`;

export const Button = ({ ...rest }) => <StyledButton {...rest} />;

// -- Primary button
const StyledPrimaryButton = styled(StyledButton)`
  background: #2ecc71;
  color: #fff;

  &:hover {
    background: #2eb259;
  }
`;

Button.Primary = ({ children, ...rest }) => (
  <StyledPrimaryButton {...rest}>{children}</StyledPrimaryButton>
);
