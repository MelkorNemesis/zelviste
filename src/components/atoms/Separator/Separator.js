import React from "react";
import cx from "classnames";

import "./Separator.scss";

export const Separator = ({ small = false, taller = false }) => (
  <hr
    className={cx("Separator", {
      "Separator--small": small,
      "Separator--taller": taller
    })}
  />
);
