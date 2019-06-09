import React from "react";
import styled from "@emotion/styled";

import { Textarea, InputError, Label } from "..";
import { useNextId } from "../../hooks";

const StyledFormikTextarea = styled.div`
  margin-top: ${({ theme }) => theme.control_margin_top};
  width: 100%;

  &:first-child {
    margin-top: 0;
  }
`;

export const FormikTextarea = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  const id = useNextId();
  const { label } = props;
  const hasError = touched[field.name] && errors[field.name];

  return (
    <StyledFormikTextarea>
      {label && (
        <Label htmlFor={id} hasError={hasError}>
          {label}
        </Label>
      )}
      <Textarea {...field} id={id} {...props} hasError={hasError} />
      {hasError && <InputError htmlFor={id}>{errors[field.name]}</InputError>}
    </StyledFormikTextarea>
  );
};
