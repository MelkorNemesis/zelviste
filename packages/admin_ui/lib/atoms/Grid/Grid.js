import React from "react";
import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(345px, 1fr));
  grid-column-gap: ${({ theme }) => theme.spacing_m};
  grid-row-gap: ${({ theme }) => theme.spacing_m};
`;

export const Grid = ({ children, ...rest }) => (
  <StyledGrid {...rest}>{children}</StyledGrid>
);

const StyledGridItem = styled.div``;

Grid.Item = ({ children, ...rest }) => (
  <StyledGridItem {...rest}>{children}</StyledGridItem>
);
