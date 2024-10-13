import * as React from "react";

interface InfoIconProps {
  className: string;
}

export function InfoIcon(props: InfoIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <circle cx={12} cy={12} r={12} />
      <path
        fill="#fff"
        d="M11 11a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0v-6ZM11 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
      />
    </svg>
  );
}
