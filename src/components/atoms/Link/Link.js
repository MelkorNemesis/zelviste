import React from "react";
import { Link as L } from "react-router-dom";
import cx from "classnames";

import "./Link.scss";

export const Link = ({ to, children, className, ...rest }) => (
  <L className={cx("Link", className)} to={to} {...rest}>
    {children}
  </L>
);

Link.Product = ({ className, children, ...rest }) => (
  <Link className={cx("Link--product", className)} {...rest}>
    {children}
  </Link>
);
