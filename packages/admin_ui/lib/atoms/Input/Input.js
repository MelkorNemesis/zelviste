import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  color: red;
`;

export const Input = ({ ...rest }) => <StyledInput {...rest} />;
