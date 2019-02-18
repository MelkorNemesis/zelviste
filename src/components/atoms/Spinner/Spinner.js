import React from "react";
import cx from "classnames";

import "./Spinner.scss";

export const Spinner = ({ className, children, ...rest }) => (
  <div className={cx("Spinner", className)}>
    <span className="Circle" {...rest} />
    {children && <span className="Spinner__text">{children}</span>}
  </div>
);

Spinner.Block = ({ className, ...rest }) => (
  <Spinner className={cx("Spinner--block", className)} {...rest} />
);
