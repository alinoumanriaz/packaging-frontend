import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

const HeroBanner = () => {
  return (
    <section className="w-full bg-gradient-to-br from-primary-50 via-white to-primary-100 h-[calc(100dvh-105px)] flex justify-center items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10% left-5% w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-5% right-10% w-80 h-80 bg-accent-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-10% left-15% w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      </div>
      
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between relative z-10">
          {/* Left Content */}
          <div className="flex md:w-[600px] flex-col text-center md:text-left space-y-6 md:space-y-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl  font-extrabold text-gray-900 leading-tight">
              Your Custom <span className="text-primary-800">Global Packaging</span> Boxes
            </h1>
            <p className="text-md text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
              Create premium, sustainable, and eye-catching packaging designed
              to fit your brand. Deliver a memorable unboxing experience to your
              customers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href={"#quoteSection"}
                className="bg-primary-800 hover:bg-primary-900 transition-all duration-300 text-white rounded-xl px-8 py-2 text-md font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
              >
                Request a Quote
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </Link>
              <Link
                href={"/portfolio"}
                className="border-1 border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white transition-all duration-300 rounded-xl px-8 py-2 text-md font-semibold shadow-sm hover:shadow-md transform hover:-translate-y-1 inline-flex items-center justify-center"
              >
                View Portfolio
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start mt-4">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Free Design</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-2">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end mb-8 md:mb-0 animate-fade-in">
            <div className="relative h-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-300 to-accent-300 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Image
                src="/Untitled-t.png"
                alt="Custom Packaging"
                width={600}
                height={600}
                priority
                className="object-contain drop-shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroBanner;