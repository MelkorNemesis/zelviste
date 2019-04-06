import React, { PureComponent } from "react";
import cx from "classnames";
import uniqueId from "lodash/uniqueId";

import { Button, Input } from "../../atoms";

import "./NumericStepper.scss";

const TIMER_INITIAL_DELAY_MS = 500;
const TIMER_DELAY_MS = 50;

export class NumericStepper extends PureComponent {
  ref = null;

  stepTimerId = null;

  constructor(...args) {
    super(...args);
    this.id = uniqueId("input-");
  }

  componentDidMount() {
    window.addEventListener("mouseup", this.handleMouseUp);
  }

  componentWillUnmount() {
    window.removeEventListener("mouseup", this.handleMouseUp);
  }

  handleMouseUp = () => {
    if (this.stepTimerId) {
      clearTimeout(this.stepTimerId);
      this.stepTimerId = null;
    }
  };

  step = (delta = 1) => {
    this.ref.stepUp(delta);
    this.ref.dispatchEvent(new Event("change", { bubbles: true }));
  };

  stepTimer = (initial, delta) => {
    this.step(delta);
    this.stepTimerId = setTimeout(
      () => {
        this.stepTimer(false, delta);
      },
      initial ? TIMER_INITIAL_DELAY_MS : TIMER_DELAY_MS
    );
  };

  render() {
    const { className, ...rest } = this.props;

    return (
      <div className={cx("NumericStepper", className)}>
        <Button.Minus
          onMouseDown={() => {
            this.stepTimer(true, -1);
          }}
        />
        <Input
          className="NumericStepper__input"
          inputRef={input => {
            this.ref = input;
          }}
          type="number"
          {...rest}
        />
        <Button.Plus
          onMouseDown={() => {
            this.stepTimer(true, 1);
          }}
        />
      </div>
    );
  }
}
