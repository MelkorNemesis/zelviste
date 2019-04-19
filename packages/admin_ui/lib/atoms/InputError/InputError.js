import React from "react";
import styled from "styled-components";

export const InputError = styled.label`
  display: block;
  margin-top: 3px;

  color: ${({ theme }) => theme.input_error_color};
  font-weight: 600;
`;
