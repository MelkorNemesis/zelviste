import React from "react";
import styled from "styled-components";

export const FormError = styled.label`
  display: block;

  color: ${({ theme }) => theme.c_form_error};
  font-weight: 600;
`;
