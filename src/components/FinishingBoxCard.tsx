import React from "react";

interface IProps {
  topText: string;
  title: string;
  desc: string;
}

const FinishingBoxCard = ({ topText, title, desc }: IProps) => {
  return (
    <div className="p-8 flex flex-col justify-between h-full">
      <div>
        <div className="w-fit text-xs px-2 py-1 text-gray-500 ring-1 ring-gray-300 rounded-xl ">
          {topText}
        </div>
      </div>
      <div className="">
        <h1 className="font-semibold text-4xl py-2">{title}</h1>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

export default FinishingBoxCard;
