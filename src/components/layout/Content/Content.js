import React, { PureComponent } from "react";
import cx from "classnames";

import "./Content.scss";

export class Content extends PureComponent {
  render() {
    const { children, hasOverlay } = this.props;
    return (
      <div
        className={cx("Content", {
          "Content--has-overlay": hasOverlay
        })}
      >
        {children}
      </div>
    );
  }
}
