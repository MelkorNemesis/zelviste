import React from "react";
import cx from "classnames";

import "./ProductOtherImages.scss";

export const ProductOtherImages = ({
  images,
  className,
  onClick,
  children,
  ...rest
}) => {
  return (
    <ul className={cx("ProductOtherImages", className)} {...rest}>
      {React.Children.toArray(children).filter(
        c => c.type === ProductOtherImages.Item
      )}
    </ul>
  );
};

ProductOtherImages.Item = ({ alt, src, isActive, className, ...rest }) => (
  <li className={cx(className, { active: isActive })}>
    <img alt={alt} src={src} {...rest} />
  </li>
);
