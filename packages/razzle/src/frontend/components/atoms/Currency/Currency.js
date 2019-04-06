import React from "react";
import cx from "classnames";

import { Currency as C } from "../../../consts";

export const Currency = ({ className, ...rest }) => (
  <span className={cx("Currency", className)} {...rest}>
    {C.CAPTION}
  </span>
);
