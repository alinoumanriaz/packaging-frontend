"use client";
import Image from "next/image";
import React from "react";

interface IProps {
  topText: string;
  title: string;
  desc: string;
  imageUrl?: string;
}

const FinishingBoxCard = ({ topText, title, desc, imageUrl }: IProps) => {
  return (
    <div className="relative overflow-hidden h-full ring-1 ring-gray-300 rounded-xl bg-white  ">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="embossing finishing in unique custom boxes"
          width={200}
          height={200}
          className="w-full h-full md:hidden"
        />
      )}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4 md:text-black text-white ">
        <div>
          <div className="w-fit text-xs px-4 py-1 m-2 bg-white text-gray-500 rounded-full ring-1 ring-gray-200  ">
            {topText}
          </div>
        </div>
        <div className="">
          <h1 className="font-semibold x text-4xl py-2 m-2">{title}</h1>
          <p className="text-xs  m-2 ">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FinishingBoxCard;
