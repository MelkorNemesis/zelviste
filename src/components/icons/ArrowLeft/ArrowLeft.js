import React from "react";
import { ArrowRight } from "..";

export const ArrowLeft = ({ ...rest }) => {
  return <ArrowRight style={{ transform: "rotate(180deg)" }} {...rest} />;
};
