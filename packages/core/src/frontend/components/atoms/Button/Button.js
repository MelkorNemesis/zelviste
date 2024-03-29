import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";

import * as Icons from "../../icons";

import "./Button.scss";

function ButtonHOC(WrappedComponent) {
  function ButtonWrapper({ children, className, larger = false, ...rest }) {
    return (
      <WrappedComponent
        className={cx("Button", { "Button--larger": larger }, className)}
        {...rest}
      >
        {children}
      </WrappedComponent>
    );
  }

  ButtonWrapper.AddToBasket = ({ children, className, ...rest }) => (
    <ButtonWrapper
      className={cx("Button--icon-right Button--add-to-basket", className)}
      {...rest}
    >
      {children}
      <Icons.Cart className="Button__icon" />
    </ButtonWrapper>
  );

  // Next Button
  ButtonWrapper.Next = ({ children, className, ...rest }) => (
    <ButtonWrapper className={cx("Button--icon-right", className)} {...rest}>
      {children}
      <Icons.ArrowRight className="Button__icon" />
    </ButtonWrapper>
  );

  ButtonWrapper.Secondary = ({ children, className, ...rest }) => (
    <ButtonWrapper className={cx("Button--secondary", className)} {...rest}>
      {children}
    </ButtonWrapper>
  );

  ButtonWrapper.Plus = ({ className, ...rest }) => (
    <ButtonWrapper className={cx("Button--plus", className)} {...rest}>
      +
    </ButtonWrapper>
  );

  ButtonWrapper.Minus = ({ className, ...rest }) => (
    <ButtonWrapper className={cx("Button--minus", className)} {...rest}>
      -
    </ButtonWrapper>
  );

  ButtonWrapper.Category = ({ children, className, ...rest }) => (
    <ButtonWrapper className={cx("Button--category", className)} {...rest}>
      {children}
    </ButtonWrapper>
  );

  ButtonWrapper.Page = ({ children, className, active = false, ...rest }) => (
    <ButtonWrapper
      className={cx(
        "Button--page",
        {
          "Button--page-active": active
        },
        className
      )}
      {...rest}
    >
      {children}
    </ButtonWrapper>
  );

  return ButtonWrapper;
}

export const ButtonLink = ButtonHOC(Link);
export const Button = ButtonHOC("button");
