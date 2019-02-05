import React, { PureComponent } from "react";

import { ProductCount, ProductSorter } from "../../molecules";

import "./CategoryControls.scss";

export class CategoryControls extends PureComponent {
  render() {
    const { productsCount, sortOptions } = this.props;

    return (
      <div className="CategoryControls">
        <ProductSorter
          className="CategoryControls__Sorter"
          options={sortOptions}
        />
        <ProductCount count={productsCount} />
      </div>
    );
  }
}
