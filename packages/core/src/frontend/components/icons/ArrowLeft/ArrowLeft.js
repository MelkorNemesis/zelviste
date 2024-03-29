import React from "react";
import { ArrowRight } from "../index";

export const ArrowLeft = ({ ...rest }) => {
  return <ArrowRight style={{ transform: "rotate(180deg)" }} {...rest} />;
};
