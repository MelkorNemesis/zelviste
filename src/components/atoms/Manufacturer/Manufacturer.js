import React from "react";
import cx from "classnames";

export const Manufacturer = ({ manufacturer, className, ...rest }) => (
  <div className={cx("Manufacturer", className)} {...rest}>
    {(manufacturer && manufacturer.name) || "Neuvedeno"}
  </div>
);
