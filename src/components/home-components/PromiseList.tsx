import React from "react";
import Container from "../Container";
import Titles from "../Titles";
import Image from "next/image";

const PromiseList = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center space-y-10">
        <Titles
          title="One place to get your custom packaging"
          subtitle="Packaging offers a variety of custom packaging solutions and project assistance with pricing and service you will love."
        />
        <div className=" w-full flex justify-between items-center">
          {[...Array(6)].map((_, idx) => (
            <div key={idx} className="text-center flex flex-col space-y-2 ">
              <Image
                className="rounded-xl w-32 h-32"
                src={"/custom.webp"}
                alt=""
                width={800}
                height={800}
              />
              <div className="font-bold">Shopping Bag</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PromiseList;
