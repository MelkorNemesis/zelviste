import React from "react";
import styled from "styled-components";

import { Select, InputError, Label } from "..";
import { useNextId } from "../../hooks";

const StyledFormikSelect = styled.div`
  margin-top: ${({ theme }) => theme.control_margin_top};
  width: 100%;

  &:first-child {
    margin-top: 0;
  }
`;

export const FormikSelect = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  const id = useNextId();
  const { label } = props;
  const hasError = touched[field.name] && errors[field.name];

  return (
    <StyledFormikSelect>
      {label && (
        <Label htmlFor={id} hasError={hasError}>
          {label}
        </Label>
      )}
      <Select id={id} {...field} {...props} hasError={hasError} />
      {hasError && <InputError htmlFor={id}>{errors[field.name]}</InputError>}
    </StyledFormikSelect>
  );
};
