import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  height: ${({ theme }) => theme.inputHeight};
  width: 100%;
  padding: 0 10px;

  font-size: 16px;
  font-weight: 500;

  color: ${({ hasError, theme: { inputErrorColorText } }) =>
    hasError ? inputErrorColorText : "black"};

  border: 2px solid
    ${({ hasError, theme: { inputErrorColor } }) =>
      hasError ? inputErrorColor : "#eee"};
  border-radius: ${({ theme }) => theme.borderRadius};
  
  box-shadow: ${({ hasError, theme: { inputErrorBorderColor } }) =>
    hasError ? `0 0 12px ${inputErrorBorderColor}` : "none"}

  outline: none;

  &:focus {
    border-color: ${({
      hasError,
      theme: { inputErrorColor, inputAccentColor }
    }) => (hasError ? inputErrorColor : inputAccentColor)};
  }
`;

export const Input = ({ ...rest }) => <StyledInput {...rest} />;
