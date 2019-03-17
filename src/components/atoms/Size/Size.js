import React from "react";
import cx from "classnames";

import { Units } from "../../../consts";
import { mm2cm } from "../../../utils";

import "./size.scss";

export const Size = ({ millimeters, className, ...rest }) => (
  <span className={cx(className, "Size")} {...rest}>
    {mm2cm(millimeters)} {Units.CENTIMETER}
  </span>
);
