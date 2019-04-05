import React from "react";
import cx from "classnames";

import { Tap } from "../../icons";
import { Colors } from "../../../consts";

import "./TouchSwipeHint.scss";

export const TouchSwipeHint = ({ className, ...rest }) => (
  <div className={cx("TouchSwipeHint", className)} {...rest}>
    <Tap size={25} fill={Colors.PRIMARY} />
  </div>
);
