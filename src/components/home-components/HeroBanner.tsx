import React from "react";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="w-full bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 py-12 md:py-20">
        
        {/* Left Content */}
        <div className="flex flex-col text-center md:text-left space-y-6 md:space-y-8 max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Your Custom Global Packaging Boxes
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Create premium, sustainable, and eye-catching packaging designed to
            fit your brand. Deliver a memorable unboxing experience to your
            customers worldwide.
          </p>
          <div>
            <button className="bg-blue-700 hover:bg-blue-800 transition-colors text-white rounded-lg px-6 md:py-3 py-2 text-base font-medium shadow-md">
              Request a Quote
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-[280px] sm:w-[400px] md:w-[480px] lg:w-[550px] h-auto">
            <Image
              src="/Untitled-t.png"
              alt="Custom Packaging"
              width={600}
              height={600}
              priority
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
