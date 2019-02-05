import React from "react";
import cx from "classnames";

import "./Input.scss";

export const Input = ({ className, inputRef, wrapperProps, ...rest }) => {
  return (
    <div className={cx("Input", className)} {...wrapperProps}>
      <input ref={inputRef} {...rest} />
    </div>
  );
};
