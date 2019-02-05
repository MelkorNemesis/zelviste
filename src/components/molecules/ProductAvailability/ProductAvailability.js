import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import "./ProductAvailability.scss";
import { Text } from "../../atoms";

export const ProductAvailability = ({ isAvailable, className, ...rest }) => (
  <div className={cx("ProductAvailability", className)} {...rest}>
    {(isAvailable && (
      <Text.Success smaller bold>
        skladem
      </Text.Success>
    )) || (
      <Text.Warning smaller bold>
        není skladem
      </Text.Warning>
    )}
  </div>
);

ProductAvailability.propTypes = {
  isAvailable: PropTypes.bool.isRequired,
  className: PropTypes.string
};
