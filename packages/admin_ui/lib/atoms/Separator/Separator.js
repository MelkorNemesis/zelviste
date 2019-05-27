import React from "react";
import styled from "styled-components";

export const Separator = styled.hr`
  margin: ${({ theme }) => theme.spacing_m} 0;

  font-size: 0;
  background: none;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.c_grey};
`;
