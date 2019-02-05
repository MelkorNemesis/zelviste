import React from "react";
import cx from "classnames";

import "./ProductImage.scss";

export const ProductImage = ({ className, src, alt, ...rest }) => {
  return (
    <div className={cx("ProductImage", className)}>
      <img src={src} alt={alt} {...rest} />
    </div>
  );
};
