import React from "react";
import cx from "classnames";

import "./Pusher.scss";

export const Pusher = ({ children, isNavOpen = false }) => (
  <div className={cx("Pusher", { "Pusher--nav-open": isNavOpen })}>
    {children}
  </div>
);
