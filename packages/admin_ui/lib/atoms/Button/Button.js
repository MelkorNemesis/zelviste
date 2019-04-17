import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: block;
  width: 100%;
  height: ${({ theme }) => theme.inputHeight};
  margin-top: ${({ theme }) => theme.controlMarginTop};

  &[type="submit"] {
    margin-top: ${({ theme }) => theme.controlSubmitMarginTop};
  }

  font-size: 14px;
  font-weight: 600;
  color: #fff;

  cursor: pointer;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: #2980b9;

  &:hover {
    background: #2969a2;
  }
`;

export const Button = ({ ...rest }) => <StyledButton {...rest} />;
