import React from "react";
import Container from "../Container";
import Titles from "../Titles";
import Image from "next/image";

const promisesList = [
  {
    imageUrl: "/no.webp",
    title: "No die & Plate Charges",
  },
  {
    imageUrl: "/high.webp",
    title: "Quick Turnaround Time",
  },
  {
    imageUrl: "/15-business.webp",
    title: "Free Shipping",
  },
  {
    imageUrl: "/starting.webp",
    title: "Starting From 50 Boxes",
  },
  {
    imageUrl: "/custom.webp",
    title: "Customize Size & Style",
  },
  {
    imageUrl: "/ellipse.webp",
    title: "Free Graphic designing",
  },
];

const PromiseList = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center space-y-10 ">
        <Titles
          title="One place to get your custom packaging"
          subtitle="Packaging offers a variety of custom packaging solutions and project assistance with pricing and service you will love."
        />
        <div className=" flex justify-between space-x-10 ">
          {promisesList.map((item, idx) => (
            <div key={idx} className="text-center flex flex-col space-y-6 ">
              <Image
                className="rounded-xl w-28 h-28"
                src={item.imageUrl}
                alt={item.title}
                width={800}
                height={800}
              />
              <div className="font-bold w-32">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PromiseList;
