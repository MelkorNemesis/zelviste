import React from "react";
import styled from "styled-components";

import { Checkbox, InputError, Label } from "..";

import { useNextId } from "../../hooks";

const StyledFormikCheckbox = styled.div`
  margin-top: ${({ theme }) => theme.control_margin_top};
  width: 100%;

  &:first-child {
    margin-top: 0;
  }
`;

const StyledControl = styled.div`
  display: flex;

  label {
    margin-left: ${({ theme }) => theme.spacing_s};
  }
`;

export const FormikCheckbox = ({
  field,
  form: { touched, errors },
  label,
  ...props
}) => {
  const id = useNextId();
  const hasError = touched[field.name] && errors[field.name];

  return (
    <StyledFormikCheckbox>
      <StyledControl>
        <Checkbox
          checked={field.value}
          id={id}
          {...field}
          {...props}
          hasError={hasError}
        />
        {label && (
          <Label htmlFor={id} hasError={hasError}>
            {label}
          </Label>
        )}
      </StyledControl>
      {hasError && <InputError htmlFor={id}>{errors[field.name]}</InputError>}
    </StyledFormikCheckbox>
  );
};
