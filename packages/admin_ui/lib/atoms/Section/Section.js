import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  padding: ${({ theme }) => theme.spacing_l};

  background: #fff;
  border-radius: ${({ theme }) => theme.border_radius};

  & + & {
    margin-top: ${({ theme }) => theme.spacing_m};
  }
`;

export const Section = ({ children, ...rest }) => (
  <StyledSection {...rest}>{children}</StyledSection>
);
