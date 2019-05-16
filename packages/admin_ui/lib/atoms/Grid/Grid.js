import React from "react";
import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: ${({ theme }) => theme.spacing_m};
  grid-row-gap: ${({ theme }) => theme.spacing_m};
`;

export const Grid = ({ children, ...rest }) => (
  <StyledGrid {...rest}>{children}</StyledGrid>
);

const StyledGridItem = styled.div`
  grid-column: span ${({ span }) => span || 12};
`;

Grid.Item = ({ children, ...rest }) => (
  <StyledGridItem {...rest}>{children}</StyledGridItem>
);
