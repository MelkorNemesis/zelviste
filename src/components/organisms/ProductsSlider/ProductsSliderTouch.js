import React, { PureComponent } from "react";
import cx from "classnames";

import { Product, TouchSwipeHint } from "../../molecules";

import "./ProductsSliderTouch.scss";

export class ProductsSliderTouch extends PureComponent {
  $inner = null;

  isTouching = false;
  startX = null;
  currentX = null;
  elTranslateX = 0;

  state = {
    isAnimating: false,
    hasTouched: false
  };

  onTouchStart = e => {
    this.setState({ hasTouched: true });

    this.isTouching = true;
    this.startX = e.nativeEvent.touches[0].clientX;
    this.currentX = this.startX;
    this.elTranslateX = this.getInnerElementTranslateX();

    requestAnimationFrame(this.update);
  };

  onTouchMove = e => {
    this.currentX = e.nativeEvent.touches[0].clientX;
  };

  onTransitionEnd = () => {
    this.setState({ isAnimating: false });
  };

  onTouchEnd = () => {
    this.isTouching = false;
    this.correct();
  };

  correct = () => {
    const clientWidth = this.$inner.clientWidth;
    const scrollWidth = this.$inner.scrollWidth;
    const translateX = this.getInnerElementTranslateX();

    const isOverScrolled = clientWidth + Math.abs(translateX) > scrollWidth;
    const isUnderScrolled = translateX > 0;
    let correction = null;

    if (isOverScrolled) {
      correction = (scrollWidth - clientWidth) * -1;
    } else if (isUnderScrolled) {
      correction = 0;
    }

    if (correction !== null) {
      this.setState({ isAnimating: true }, () => {
        requestAnimationFrame(() => {
          this.$inner.style.transform = `translateX(${correction}px)`;
        });
      });
    }
  };

  update = () => {
    // on link click it may happen
    // that this.$inner is null
    if (!this.$inner) {
      return;
    }

    if (this.isTouching) {
      requestAnimationFrame(this.update);
    }

    const deltaX = this.currentX - this.startX;
    this.$inner.style.transform = `translateX(${this.elTranslateX + deltaX}px)`;
  };

  getInnerElementTranslateX = () => {
    const style = window.getComputedStyle(this.$inner);
    return new window.WebKitCSSMatrix(style.webkitTransform).m41;
  };

  get products() {
    return React.Children.toArray(this.props.children)
      .filter(c => c.type === Product)
      .map(product =>
        React.cloneElement(product, {
          className: "ProductsSliderTouch__product"
        })
      );
  }

  render() {
    const { className } = this.props;

    return (
      <div
        className={cx("ProductsSliderTouch", className)}
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
      >
        {!this.state.hasTouched && (
          <TouchSwipeHint className="ProductsSliderTouch__touch-swipe-hint" />
        )}
        <div
          className={cx("ProductsSliderTouch__inner", {
            "ProductsSliderTouch__inner--anim": this.state.isAnimating
          })}
          onTransitionEnd={this.onTransitionEnd}
          ref={div => {
            this.$inner = div;
          }}
        >
          {this.products}
        </div>
      </div>
    );
  }
}
