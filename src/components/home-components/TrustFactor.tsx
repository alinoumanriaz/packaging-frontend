import React from "react";
import Container from "../Container";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";

const TrustFactor = () => {
  return (
    <div className=" bg-primary-800/10 py-8 text-black">
      <Container>
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          {/* Trust Badge - Brands & Ratings */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className=" font-medium text-lg text-center sm:text-left">
              5,000+ brands big and small love us!
            </div>
            <div className="flex items-center gap-1 bg-primary-800 px-3 py-1 rounded-full">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className=" text-sm text-yellow-300" />
                ))}
              </div>
              <span className="text-white text-sm ml-1">5.0</span>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-4">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <div className="bg-white p-1.5 rounded-full">
                <Image src={"/put.png"} alt="Quick Turnaround" height={30} width={30} />
              </div>
              <div className=" font-medium text-sm">Quick Turnaround</div>
            </div>
            
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <div className="bg-white p-1.5 rounded-full">
                <Image src={"/cube.png"} alt="Free Design" height={30} width={30} />
              </div>
              <div className=" font-medium text-sm">Free Design</div>
            </div>
            
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
              <div className="bg-white p-1.5 rounded-full">
                <Image src={"/fast-delivery.png"} alt="Fast Delivery" height={30} width={30} />
              </div>
              <div className=" font-medium text-sm">Fast Delivery</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TrustFactor;