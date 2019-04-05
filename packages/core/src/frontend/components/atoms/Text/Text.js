import React from "react";
import cx from "classnames";

import "./Text.scss";

export const Text = ({
  children,
  className,

  bold,
  mediumBold,
  thin,
  smaller,
  small,
  center,

  success,
  warning,

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  paragraph,
  block,

  inline,
  inlineBlock,
  light,
  strong,

  first,
  last,
  ...rest
}) => {
  let Component;

  if (h1) {
    Component = "h1";
  } else if (h2) {
    Component = "h2";
  } else if (h3) {
    Component = "h3";
  } else if (h4) {
    Component = "h4";
  } else if (h5) {
    Component = "h5";
  } else if (h6) {
    Component = "h6";
  } else if (paragraph) {
    Component = "p";
  } else if (block) {
    Component = "div";
  } else if (strong) {
    Component = "strong";
  } else {
    Component = "span";
  }

  return (
    <Component
      className={cx("Txt", className, {
        "Txt--bold": bold,
        "Txt--medium-bold": mediumBold,
        "Txt--inline": inline,
        "Txt--inline-block": inlineBlock,
        "Txt--light": light,
        "Txt--thin": thin,
        "Txt--first": first,
        "Txt--last": last,
        "Txt--smaller": smaller,
        "Txt--small": small,
        "Txt--center": center,
        "Txt--success": success,
        "Txt--warning": warning
      })}
      {...rest}
    >
      {children}
    </Component>
  );
};

Text.Header = ({ children, className, ...rest }) => {
  return (
    <Text className={cx("Txt--header", className)} {...rest}>
      {children}
    </Text>
  );
};

Text.SubHeader = ({ children, className, ...rest }) => {
  return (
    <Text className={cx("Txt--subheader", className)} bold {...rest}>
      {children}
    </Text>
  );
};

Text.Paragraph = ({ children, ...rest }) => {
  return (
    <Text paragraph {...rest}>
      {children}
    </Text>
  );
};

Text.Block = ({ children, ...rest }) => {
  return (
    <Text block {...rest}>
      {children}
    </Text>
  );
};

Text.Success = ({ children, className, ...rest }) => {
  return (
    <Text className={cx("Txt--success", className)} {...rest}>
      {children}
    </Text>
  );
};

Text.Warning = ({ children, className, ...rest }) => {
  return (
    <Text className={cx("Txt--warning", className)} {...rest}>
      {children}
    </Text>
  );
};

Text.Price = ({ children, className, large, ...rest }) => {
  return (
    <Text
      className={cx("Txt--price", { "Txt--price-large": large }, className)}
      {...rest}
    >
      {children}
    </Text>
  );
};

Text.PriceBefore = ({ children, className, large, ...rest }) => {
  return (
    <Text
      className={cx(
        "Txt--price-before",
        { "Txt--price-before-large": large },
        className
      )}
      {...rest}
    >
      <del>{children}</del>
    </Text>
  );
};
