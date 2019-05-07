import React from "react";
import styled from "styled-components";

import { Input, InputError, Label } from "..";
import { useNextId } from "../../hooks";

const StyledFormikInput = styled.div`
  margin-top: ${({ theme }) => theme.control_margin_top};
  width: 100%;

  &:first-child {
    margin-top: 0;
  }
`;

export const FormikInput = ({ field, form: { touched, errors }, ...props }) => {
  const id = useNextId();
  const { label } = props;
  const hasError = touched[field.name] && errors[field.name];

  return (
    <StyledFormikInput>
      {label && (
        <Label htmlFor={id} hasError={hasError}>
          {label}
        </Label>
      )}
      <Input {...field} id={id} {...props} hasError={hasError} />
      {hasError && <InputError htmlFor={id}>{errors[field.name]}</InputError>}
    </StyledFormikInput>
  );
};
