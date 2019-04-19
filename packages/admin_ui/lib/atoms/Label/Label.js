import React from "react";
import styled from "styled-components";

export const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 3px;

  color: ${({ hasError, theme: { inputErrorColor } }) =>
    hasError ? inputErrorColor : "#636e72"};
`;
