import React from "react";

import { Colors } from "../../../consts";

export const List = ({
  size,
  fill = Colors.SECONDARY_D1,
  className,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      height={size}
      viewBox="0 -52 512 512"
      width={size}
      {...rest}
    >
      <path
        d="M0 113.293h113.293V0H0zm30.004-83.29h53.289v53.29h-53.29zm0 0M149.297 0v113.293H512V0zm332.7 83.293H179.3v-53.29h302.695zm0 0M0 260.3h113.293V147.009H0zm30.004-83.292h53.289v53.289h-53.29zm0 0M149.297 260.3H512V147.009H149.297zm30.004-83.292h302.695v53.289H179.301zm0 0M0 407.309h113.293V294.012H0zm30.004-83.293h53.289v53.289h-53.29zm0 0M149.297 407.309H512V294.012H149.297zm30.004-83.293h302.695v53.289H179.301zm0 0"
        fill={fill}
      />
    </svg>
  );
};
