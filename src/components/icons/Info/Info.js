import React from "react";

import { Colors } from "../../../consts";

export const Info = ({
  size,
  fill = Colors.SECONDARY_D1,
  className,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 65 65"
      width={size}
      height={size}
      {...rest}
    >
      <g fill={fill}>
        <path d="M32.5 0C14.58 0 0 14.579 0 32.5S14.58 65 32.5 65 65 50.421 65 32.5 50.42 0 32.5 0zm0 61C16.785 61 4 48.215 4 32.5S16.785 4 32.5 4 61 16.785 61 32.5 48.215 61 32.5 61z" />
        <circle cx="33.018" cy="19.541" r="3.345" />
        <path d="M32.137 28.342a2 2 0 0 0-2 2v17a2 2 0 0 0 4 0v-17a2 2 0 0 0-2-2z" />
      </g>
    </svg>
  );
};
