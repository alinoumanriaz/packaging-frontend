import React from "react";
import Container from "../Container";
import Titles from "../Titles";
import Image from "next/image";

const promisesList = [
  {
    imageUrl: "/no.webp",
    title: "No die & plate charges",
    description: "Free custom die-cutting with no hidden fees",
  },
  {
    imageUrl: "/high.webp",
    title: "Quick turnaround",
    description: "Get your order in as fast as 3-5 business days",
  },
  {
    imageUrl: "/15-business.webp",
    title: "Free shipping",
    description: "Free standard shipping on all orders over $50",
  },
  {
    imageUrl: "/starting.webp",
    title: "Low minimums",
    description: "Order quantities starting from just 50 boxes",
  },
  {
    imageUrl: "/custom.webp",
    title: "Custom designs",
    description: "Fully customizable sizes, styles and materials",
  },
  {
    imageUrl: "/ellipse.webp",
    title: "Free design help",
    description: "Our design team will help bring your vision to life",
  },
];

const PromiseList = () => {
  return (
    <Container>
      <div className="flex flex-col items-center space-y-10 md:space-y-14">
        <Titles
          title="Premium packaging solutions"
          subtitle="Quality you can trust with benefits that matter"
        />

        <div className="w-full px-4 sm:px-0">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10">
            {promisesList.map((item, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col items-center text-center p-5 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1"
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 20vw, 16vw"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PromiseList;