import React from "react";
import cx from "classnames";

import { Text } from "../../atoms";

export const ProductCount = ({ count, className }) => (
  <div className={cx("ProductCount", className)}>
    <Text.Block smaller thin>
      Celkem{" "}
      <Text smaller bold>
        {count}{" "}
      </Text>
      položek
    </Text.Block>
  </div>
);
