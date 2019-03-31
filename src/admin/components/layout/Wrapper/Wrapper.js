import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: stretch;
`;

export const Wrapper = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
);
