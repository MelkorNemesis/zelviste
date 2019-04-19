import React from "react";
import styled from "styled-components";

export const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 3px;

  color: ${({ hasError, theme: { input_error_color } }) =>
    hasError ? input_error_color : "#636e72"};
`;
