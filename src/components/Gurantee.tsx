import Image from "next/image";
import React from "react";

const Gurantee = () => {
  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center justify-center bg-[#0369a1] text-center p-6 rounded-lg">
      {/* Headings */}
      <h2 className="text-white font-bold text-xl">Shop with</h2>
      <h2 className="font-bold text-xl text-white">
        Confidence <span className="text-yellow-400">Money</span>
      </h2>
      <h3 className="text-yellow-400 text-lg font-semibold mb-6">
        Back Guarantee
      </h3>

      {/* Guarantee Badge */}
      <div className="mb-6">
        <Image
          src="/gutantee.webp"
          alt="guarantee"
          width={150}
          height={150}
        />
      </div>

      {/* Payment Methods */}
      <div>
        <Image
          src="/payment-img.webp"
          alt="payment"
          width={280}
          height={60}
        />
      </div>
    </div>
  );
};

export default Gurantee;
