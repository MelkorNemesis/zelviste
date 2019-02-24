import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import "./ProductAvailability.scss";
import { Text } from "../../atoms";

export const ProductAvailability = ({ stockQuantity, className, ...rest }) => (
  <div className={cx("ProductAvailability", className)} {...rest}>
    {stockQuantity <= 0 && (
      <Text.Warning smaller bold>
        není skladem
      </Text.Warning>
    )}
    {stockQuantity > 0 && (
      <Text.Success smaller bold>
        skladem
      </Text.Success>
    )}
  </div>
);

ProductAvailability.propTypes = {
  stockQuantity: PropTypes.number.isRequired,
  className: PropTypes.string
};
