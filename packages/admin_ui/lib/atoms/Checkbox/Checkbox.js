import React from "react";
import styled from "styled-components";

const StyledCheckbox = styled.input``;

export const Checkbox = ({ ...rest }) => (
  <StyledCheckbox type="checkbox" {...rest} />
);
