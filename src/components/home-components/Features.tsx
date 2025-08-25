import React from "react";
import Container from "../Container";
import Titles from "../Titles";
import { Package, Leaf, Truck, MessageCircle } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Package,
      title: "Minimum Order",
      description: "Order from just 50 units, perfect for small businesses",
    },
    {
      icon: Leaf,
      title: "Eco-friendly Materials",
      description: "Sustainable and recyclable packaging solutions",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick turnaround with delivery in as little as 3 days",
    },
    {
      icon: MessageCircle,
      title: "Expert Support",
      description: "Free professional guidance for your packaging needs",
    },
  ];

  return (
    <Container>
      <div className="flex flex-col items-center">
        <Titles
          title="Why Choose Our Packaging Solutions"
          subtitle="Quality, sustainability, and service that sets us apart"
        />
        
        <div className="w-full mt-10 md:mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group flex flex-col p-6 md:p-8 bg-[#f7fcff] ring-1 ring-blue-200 rounded-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-white shadow-sm group-hover:bg-green-50 transition-colors">
                  <feature.icon className="size-6 text-blue-600" />
                </div>
                <h3 className="md:text-xl text-md font-bold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-md text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Features;