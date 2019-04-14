import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  width: 100%;
  height: ${({ theme }) => theme.inputHeight};
  margin-top: ${({ theme }) => theme.controlMarginTop};

  font-size: 14px;
  font-weight: 600;
  color: #fff;

  cursor: pointer;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: #2980b9;
`;

export const Button = ({ ...rest }) => <StyledButton {...rest} />;
