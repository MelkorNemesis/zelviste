import React from "react";
import styled from "styled-components";

const StyledProductPrice = styled.span``;
const PriceBefore = styled.span`
  display: inline-block;
  margin-left: ${({ theme }) => theme.spacing_xs};

  text-decoration: line-through;
  color: ${({ theme }) => theme.c_text_faded};
`;

export const ProductPrice = ({ price, priceBefore, ...rest }) => {
  return (
    <StyledProductPrice {...rest}>
      <strong>{price} Kč</strong>
      {priceBefore && <PriceBefore>({priceBefore} Kč)</PriceBefore>}
    </StyledProductPrice>
  );
};
