import React from "react";
import styled from "styled-components";

const StyledError = styled.div`
  color: ${({ theme }) => theme.c_red_1};
  font-weight: 700;
`;

export const Err = ({ children, ...rest }) => (
  <StyledError {...rest}>{children}</StyledError>
);
