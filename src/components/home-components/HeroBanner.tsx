import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";

const HeroBanner = () => {
  return (
    <section className="w-full bg-primary-100 h-[calc(100dvh-105px)] flex justify-center items-center">
        <Container>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="flex md:w-[600px] flex-col text-center md:text-left space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Your Custom Global Packaging Boxes
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              Create premium, sustainable, and eye-catching packaging designed
              to fit your brand. Deliver a memorable unboxing experience to your
              customers worldwide.
            </p>
            <div>
              <Link
                href={"#quoteSection"}
                className="bg-primary-800 hover:bg-primary-800 transition-colors text-white rounded-lg px-6 md:py-3 py-2 text-base font-medium shadow-md"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative h-auto">
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
        </Container>
    </section>
  );
};

export default HeroBanner;
