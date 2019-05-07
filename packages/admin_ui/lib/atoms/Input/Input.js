import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  height: ${({ theme }) => theme.input_height};
  width: 100%;
  padding: 0 10px;

  font-size: 16px;
  font-weight: 500;

  color: ${({ hasError, theme: { input_error_color_text } }) =>
    hasError ? input_error_color_text : "black"};

  border: 2px solid
    ${({ hasError, theme: { input_error_color } }) =>
      hasError ? input_error_color : "#eee"};
  border-radius: ${({ theme }) => theme.border_radius};
  background: ${({ hasError, theme: { input_error_bg_color } }) =>
    hasError ? input_error_bg_color : "#fff"};
  
  box-shadow: ${({ hasError, theme: { input_error_border_color } }) =>
    hasError ? `3px 3px 0 ${input_error_border_color}` : "none"}

  outline: none;
  
  transition: border-color 0.2s;

  &:focus {
    border-color: ${({
      hasError,
      theme: { input_error_color, input_accent_color }
    }) => (hasError ? input_error_color : input_accent_color)};
  }
`;

const StyledInputWrapper = styled.div`
  display: flex;
  align-items: center;

  .unit {
    font-weight: 700;
    padding-left: ${({ theme }) => theme.spacing_s};
  }
`;

export const Input = ({ unit, className, ...rest }) => (
  <StyledInputWrapper className={className}>
    <StyledInput {...rest} />
    {unit && <span className="unit">{unit}</span>}
  </StyledInputWrapper>
);
