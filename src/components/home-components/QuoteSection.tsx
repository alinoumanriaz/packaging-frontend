"use client";
import React from "react";
import RequestQuote from "../RequestQuote";
import Container from "../Container";
import Gurantee from "../Gurantee";

const QuoteSection = () => {
  return (
    <Container>
      <div id="quoteSection" className="flex flex-col w-full justify-center items-center space-y-10 md:bg-primary-50 ">
      <div className="w-full flex justify-between items-start relative h-full lg:space-x-12">
        <div className="w-full  lg:w-[70%] md:rounded-4xl md:bg-white md:ring-1 md:ring-gray-300">
          <RequestQuote />
        </div>
        <div className="lg:w-[30%] hidden lg:flex sticky top-44 justify-center items-center">
          <div className="">
            <Gurantee />
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default QuoteSection;
