import React from "react";
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div className=" w-full flex justify-center items-center h-[calc(100dvh-100px)] md:h-[calc(100dvh-120px)] ">
      <div className="w-full h-full overflow-hidden">
        <div className="bg-[#f4f2f0] px-4 md:px-8 w-full h-full flex-col flex md:flex-row justify-center md:justify-between items-center">
          <div className="flex flex-col py-8">
            <div className=" w-full md:w-[600px] space-y-6">
              <h2 className="font-extrabold text-3xl md:text-5xl">Your Custom Globle packaging Boxes </h2>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis consequuntur ex doloremque, atque alias architecto.</p>
              <button className="bg-blue-700 text-sm text-white rounded-md px-6 py-3">Quote Request</button>
            </div>
          </div>
          <div className="">
            <Image
            className=" w-full"
            src={'/Untitled-t.png'}
            alt="banner"
            width={600}
            height={600}
            />
          </div>
        </div>
      </div>
    </div>
  )
};

export default HeroBanner;
