import React from "react";
import styled from "@emotion/styled";

const StyledCheckbox = styled.input``;

export const Checkbox = ({ ...rest }) => (
  <StyledCheckbox type="checkbox" {...rest} />
);
