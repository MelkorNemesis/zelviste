import React from "react";

import { ProductsSliderTouch } from "./ProductsSliderTouch";
import { ProductsSliderNoTouch } from "./ProductsSliderNoTouch";
import { DeviceContext } from "../../../contexts";

export const ProductsSlider = ({ children }) => {
  return (
    <DeviceContext.Consumer>
      {({ isTouch }) => {
        const Slider = isTouch ? ProductsSliderTouch : ProductsSliderNoTouch;
        return <Slider>{children}</Slider>;
      }}
    </DeviceContext.Consumer>
  );
};
