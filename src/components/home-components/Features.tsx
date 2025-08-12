import React from "react";
import Container from "../Container";
import Titles from "../Titles";
import { Package, Leaf, Truck, MessageCircle } from "lucide-react";

const Features = () => {
  const data = [
    {
      imageUrl: Package, // icon component
      title: "Minimum Order",
      subtitle: "Order from just 50 units, perfect for small businesses.",
    },
    {
      imageUrl: Leaf,
      title: "Eco-friendly Material",
      subtitle: "Sustainable and recyclable packaging materials.",
    },
    {
      imageUrl: Truck,
      title: "Delivery in 3 Days",
      subtitle: "Fast production and delivery for urgent needs.",
    },
    {
      imageUrl: MessageCircle,
      title: "Free Advice",
      subtitle: "Get expert guidance for your packaging needs.",
    },
  ];
  return (
    <Container>
      <div className="w-[90%]">
        <div className=" flex flex-col justify-center items-center space-y-14">
          <Titles title="Why we are best in packaging industry" />
          <div className="grid grid-cols-4 gap-x-4 gap-y-6">
            {data.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col space-y-2 bg-[#f1eee3] p-4 rounded-lg "
              >
                <item.imageUrl className="size-8" />
                <div className="font-bold">{item.title}</div>
                <div className="">{item.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Features;
