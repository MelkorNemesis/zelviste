import React from "react";
import styled from "styled-components";

import { Input, InputError, Label } from "..";

const StyledFormikInput = styled.div`
  margin-top: ${({ theme }) => theme.controlMarginTop};
  width: 100%;
`;

let id = 0;
export const FormikInput = ({ field, form: { touched, errors }, ...props }) => {
  const { label } = props;
  ++id;

  return (
    <StyledFormikInput>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input {...field} id={id} {...props} />
      {touched[field.name] && errors[field.name] && (
        <InputError htmlFor={id}>{errors[field.name]}</InputError>
      )}
    </StyledFormikInput>
  );
};
