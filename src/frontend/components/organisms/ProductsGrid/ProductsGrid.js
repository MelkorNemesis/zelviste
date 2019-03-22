import React from "react";
import { Product } from "../../molecules";

import "./ProductsGrid.scss";

export const ProductsGrid = ({ children }) => (
  <div className="ProductsGrid">
    {React.Children.toArray(children).filter(c => c.type === Product)}
  </div>
);
