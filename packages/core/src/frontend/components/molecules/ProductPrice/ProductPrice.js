import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import { Currency, Text } from "../../atoms";

import "./ProductPrice.scss";

export const ProductPrice = ({
  price,
  priceBefore,
  large,
  className,
  ...rest
}) => (
  <div className={cx("ProductPrice", className)} {...rest}>
    <span className="ProductPrice__current">
      <Text.Price large={large}>
        {price}
        <Currency className="ProductPrice__currency" />
      </Text.Price>
    </span>
    {priceBefore && (
      <del className="ProductPrice__before">
        <Text.PriceBefore large={large}>
          {priceBefore}
          <Currency className="ProductPrice__currency" />
        </Text.PriceBefore>
      </del>
    )}
  </div>
);

ProductPrice.propTypes = {
  price: PropTypes.number.isRequired,
  priceBefore: PropTypes.number,
  className: PropTypes.string
};
