import React from "react";

import { Colors } from "../../../consts";

export const Menu = ({
  size,
  fill = Colors.SECONDARY_D1,
  className,
  onClick,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 512 512"
      onClick={onClick}
      {...rest}
    >
      <path
        d="M491.318 235.318H20.682C9.26 235.318 0 244.577 0 256s9.26 20.682 20.682 20.682h470.636c11.423 0 20.682-9.259 20.682-20.682 0-11.422-9.259-20.682-20.682-20.682zM491.318 78.439H20.682C9.26 78.439 0 87.699 0 99.121c0 11.422 9.26 20.682 20.682 20.682h470.636c11.423 0 20.682-9.26 20.682-20.682 0-11.422-9.259-20.682-20.682-20.682zM491.318 392.197H20.682C9.26 392.197 0 401.456 0 412.879s9.26 20.682 20.682 20.682h470.636c11.423 0 20.682-9.259 20.682-20.682s-9.259-20.682-20.682-20.682z"
        fill={fill}
      />
    </svg>
  );
};
