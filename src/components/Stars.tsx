/** @format */

import React from "react";
import { IoStarSharp } from "react-icons/io5";

type Props = {
  label: string;
  className?: string;
};

export default function Stars({ label, className }: Props) {
  return (
    <div
      className={` flex items-center bg-light-grayish-magenta rounded-md px-6 py-3 gap-2 md:gap-5 max-w-[380px] flex-col md:flex-row  ${className}`}
    >
      <div className="flex items-center text-lg text-yellow-500 gap-2">
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
      </div>
      <p className=" whitespace-nowrap text-very-dark-magenta font-bold text-sm">
        Rated 5 Starts in {label}
      </p>
    </div>
  );
}
