import React from "react";
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div className=" w-full md:pt-4 flex justify-center items-center h-[calc(100dvh-100px)] md:h-[calc(100dvh-160px)] ">
      <div className="w-[95%] bg-[#f1eee3] rounded-2xl h-full overflow-hidden">
        <Image
        className="w-full h-full"
        src={'/home/banner/banner1.png'}
        alt="Eco Custom Boxes"
        width={1100}
        height={800}
        />
      </div>
    </div>
  )
};

export default HeroBanner;
