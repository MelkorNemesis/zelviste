import React from "react";
import styled from "@emotion/styled";

export const FormError = styled.label`
  display: block;

  color: ${({ theme }) => theme.c_form_error};
  font-weight: 600;
`;
