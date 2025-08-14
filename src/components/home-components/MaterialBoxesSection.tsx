import React from "react";
import Container from "../Container";
import Titles from "../Titles";
import Image from "next/image";
import Link from 'next/link';
import { MaterialItems } from "@/custom-data/data";

const MaterialBoxesSection = () => {
  return (
    <Container>
      <div className="flex w-[90%] flex-col items-center space-y-8 md:space-y-12">
        
        <Titles
          title="Boxes By Material"
          subtitle="Packaging offers a variety of custom packaging solutions and project assistance with pricing and service you will love."
        />

        <div className="w-full ">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {MaterialItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group text-center flex flex-col space-y-3 transition-transform hover:scale-[1.02]"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-md">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
                <h3 className="font-semibold text-sm md:text-base capitalize transition-colors group-hover:text-green-600">
                  {item.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* <Link
          href="/categories"
          className="inline-block px-6 py-2 border border-gray-700 rounded-md font-medium text-sm md:text-base transition-colors hover:bg-gray-100 hover:border-gray-800"
        >
          View All Categories
        </Link> */}
      </div>
    </Container>
  );
};

export default MaterialBoxesSection;
