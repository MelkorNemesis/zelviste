import React from "react";
import styled from "@emotion/styled";

const StyledProductQuantity = styled.span`
  color: ${({ quantity, theme }) =>
    quantity > 3 ? theme.c_green_2 : theme.c_red_1};
`;

const StyledUnit = styled.span`
  color: ${({ theme }) => theme.c_text_alt};
`;

export const ProductQuantity = ({ quantity }) => (
  <StyledProductQuantity quantity={quantity}>
    {quantity} <StyledUnit>ks</StyledUnit>
  </StyledProductQuantity>
);
