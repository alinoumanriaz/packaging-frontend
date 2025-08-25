import React from "react";
import Image from 'next/image';

const HeroBanner = () => {
  return (
    <div className=" w-full md:pt-4 flex justify-center items-center h-[calc(100dvh-100px)] md:h-[calc(100dvh-160px)] ">
      <div className="w-[95%] ring-1 ring-gray-300 bg-[#f1eee3] rounded-2xl h-full overflow-hidden">
        <div className="bg-[#f4f2f0]  ring-1 ring-gray-400 px-10 w-full h-full flex justify-between items-center">
          <div className="flex flex-col">
            <div className=" w-[500px] space-y-6">
              <h2 className="font-extrabold text-5xl">Your Globle packaging </h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis consequuntur ex doloremque, atque alias architecto.</p>
              <button className="bg-blue-700 text-sm text-white rounded-md px-6 py-3">Quote Request</button>
              {/* <p>We are the voice of Europe</p> */}
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
        {/* <img
        className="w-full h-full"
        src={'/banner-tempe.png'}
        alt="Eco Custom Boxes"
        width={1100}
        height={800}
        className='blur-[1px] w-full'
        
        /> */}
        </div>
      </div>
    </div>
  )
};

export default HeroBanner;
