/** @format */

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

export type CardType = {
  name: string;
  img: string | StaticImport;
  description: string;
  className?: string;
};

export default function Card({ name, img, description, className }: CardType) {
  return (
    <div
      className={`bg-very-dark-magenta rounded-lg p-7 flex flex-col gap-5 h-fit max-w-[400px] ${className}  `}
    >
      <div className="flex  gap-4">
        {/* img */}
        <Image className="rounded-full h-10 w-10" src={img} alt="user-img" />

        {/* right div */}
        <div className="flex  flex-col">
          <h2 className="text-white font-bold "> {name} </h2>
          <p className="text-soft-pink">Verified Buyer</p>
        </div>
      </div>
      <p className=" text-white">{description}</p>
    </div>
  );
}
