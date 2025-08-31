import React from "react";
import Titles from "../Titles";
import Container from "../Container";
import FinishingBoxCard from "../FinishingBoxCard";
import Image from "next/image";

const BoxFinishingSection = () => {
  return (
    <Container>
      <div className="flex w-[90%] flex-col items-center space-y-8 md:space-y-12">
        <Titles
          title={"Premium Finishing"}
          subtitle={
            "Enhance your custom packaging with luxury finishes that add durability, elegance, and a lasting impression."
          }
        />
        <div className="w-full ">
          <div className="w-full flex flex-col justify-center items-center space-y-2">
            <div className="h-72 flex space-x-2 w-full">
              <div className="w-[70%] overflow-hidden h-72 rounded-md ring-1 ring-gray-300">
                <Image
                src={'/embossing.jpg'}
                alt="embossing"
                width={1200}
                height={400}
                className="cover-full w-full h-72 hover:scale-110 transition-all duration-300 ease-in-out"
                />
              </div>
              <div className="w-[30%] rounded-md ring-1 ring-gray-300">
                <FinishingBoxCard
                  topText="Embossing"
                  title="Embossing"
                  desc="Transform ordinary packaging into a premium experience with raised textures that highlight your brand."
                />
              </div>
            </div>
            <div className="h-72 flex space-x-2 w-full">
              <div className="w-[30%] rounded-md ring-1 ring-gray-300">
                <FinishingBoxCard
                  topText="Embossing"
                  title="Embossing"
                  desc="Transform ordinary packaging into a premium experience with raised textures that highlight your brand."
                />
              </div>
              <div className="w-[70%] rounded-md ring-1 ring-gray-300">
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BoxFinishingSection;
