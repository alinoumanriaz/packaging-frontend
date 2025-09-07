"use client";
import React from "react";
import RequestQuote from "../RequestQuote";
import Image from "next/image";
import Container from "../Container";

const QuoteSection = () => {
  return (
    <Container>
      <div id="quoteSection" className="flex flex-col w-full justify-center items-center space-y-10 md:bg-primary-50 ">
      <div className="w-full flex justify-between items-start relative h-full lg:space-x-12">
        <div className="w-full  lg:w-[70%] md:rounded-4xl md:bg-white md:ring-1 md:ring-gray-300">
          <RequestQuote />
        </div>
        <div className="lg:w-[30%] hidden lg:flex sticky top-24 justify-center items-center">
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
    </Container>
  );
};

export default QuoteSection;
