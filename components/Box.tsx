import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IBox {
  children: ReactNode;
  className?: string;
}

const Box = ({ children, className }: IBox) => {
  return (
    <div
      className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full`, className)}
    >
      {children}
    </div>
  );
};

export default Box;
