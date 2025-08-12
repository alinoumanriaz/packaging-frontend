import React from "react";
import Titles from "../Titles";
import Container from "../Container";
import ProductCard from "../ProductCard";

const FeaturedProducts = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center space-y-10">
        <Titles
          title="Featured Products"
          subtitle="make your trend stand out with our personolized packging solution"
        />
        <div className="w-[91%]">
          <div className="grid grid-cols-4 gap-x-4 gap-y-6">
            {[...Array(8)].map((_, idx) => (
              <div key={idx}>
                <ProductCard />
              </div>
            ))}
          </div>
        </div>
        <div className="py-1 px-4 ring-1 ring-gray-700 rounded-md">
          View All
        </div>
      </div>
    </Container>
  );
};

export default FeaturedProducts;
