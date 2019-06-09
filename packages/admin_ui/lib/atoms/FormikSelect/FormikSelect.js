import React from "react";
import Select from "react-select";
import styled from "@emotion/styled";

import { InputError, Label } from "..";
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
  form: { touched, errors, setFieldValue },
  options,
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
      <Select
        id={id}
        {...field}
        {...props}
        onChange={option => {
          setFieldValue(field.name, option.value);
        }}
        value={options.filter(option => option.value === field.value)}
        options={options}
        hasError={hasError}
      />
      {hasError && <InputError htmlFor={id}>{errors[field.name]}</InputError>}
    </StyledFormikSelect>
  );
};
