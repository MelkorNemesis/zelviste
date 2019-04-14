import React from "react";
import styled from "styled-components";

import { Input, InputError, Label } from "..";

const StyledFormikInput = styled.div`
  margin-top: ${({ theme }) => theme.controlMarginTop};
  width: 100%;
`;

export const FormikInput = ({ field, form: { touched, errors }, ...props }) => {
  const { label } = props;

  return (
    <StyledFormikInput>
      {label && <Label>{label}</Label>}
      <Input {...field} {...props} />
      {touched[field.name] && errors[field.name] && (
        <InputError>{errors[field.name]}</InputError>
      )}
    </StyledFormikInput>
  );
};
