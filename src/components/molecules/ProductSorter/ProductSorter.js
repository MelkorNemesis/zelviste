import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import { Text } from "../../atoms";

import "./ProductSorter.scss";

export const ProductSorter = ({ className, options }) => (
  <div className={cx("ProductSorter", className)}>
    <Text thin smaller className="ProductSorter__caption">
      Řadit podle:
    </Text>

    {options.map(option => {
      return (
        <Link
          key={option.link}
          to={option.link}
          className={cx("ProductSorter__option", { active: option.active })}
        >
          <Text smaller mediumBold>
            {option.name}
          </Text>
        </Link>
      );
    })}
  </div>
);
