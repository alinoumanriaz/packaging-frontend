"use client";
import React from "react";
import RequestQuote from "../RequestQuote";
import Image from "next/image";

const QuoteSection = () => {
  return (
      <div className="flex flex-col w-full justify-center items-center p-10 space-y-10 bg-[#f1eee3] ">
        <div className="flex justify-between items-start relative h-full w-full space-x-12">
          <div className="w-[50%] rounded-4xl bg-white ring-1 ring-gray-300 px-8">
            <RequestQuote />
          </div>
          <div className="w-[50%] sticky top-24 flex justify-center items-center">
            <Image
            className=""
              src={"/home/trust-pilot.webp"}
              alt="alt work"
              width={1100}
              height={800}
            />
          </div>
        </div>
      </div>
  );
};

export default QuoteSection;
