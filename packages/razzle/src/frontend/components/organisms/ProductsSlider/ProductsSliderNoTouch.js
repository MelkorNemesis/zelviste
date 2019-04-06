import React, { PureComponent } from "react";
import cx from "classnames";

import { Product } from "../../molecules";

import "./ProductsSliderNoTouch.scss";

export class ProductsSliderNoTouch extends PureComponent {
  get products() {
    return React.Children.toArray(this.props.children)
      .filter(c => c.type === Product)
      .map(product =>
        React.cloneElement(product, {
          className: "ProductsSliderNoTouch__product"
        })
      );
  }

  render() {
    const { className } = this.props;

    return (
      <div className={cx("ProductsSliderNoTouch", className)}>
        {this.products}
      </div>
    );
  }
}
