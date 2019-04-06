import React from "react";
import cx from "classnames";

import { Units } from "../../../consts";

import "./Weight.scss";

export const Weight = ({ weight, className, ...rest }) => (
  <span className={cx(className, "Weight")} {...rest}>
    {weight} {Units.GRAM}
  </span>
);
