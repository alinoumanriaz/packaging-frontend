// app/components/PackagingTabs.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Titles from '@/components/Titles';

const PackagingTabs = () => {
  const [activeTab, setActiveTab] = useState("Materials");

  const tabs = ["Materials", "Ad-Ons & Finishing", "Paper Weight", "Shipping"];

  const materials = [
    {
      name: "Cardboard",
      image: "/edible-mylar-bag.webp", // put your images inside /public/images
    },
    {
      name: "Kraft",
      image: "/edible-mylar-bag.webp",
    },
    {
      name: "Rigid",
      image: "/edible-mylar-bag.webp",
    },
    {
      name: "Corrugated",
      image: "/edible-mylar-bag.webp",
    },
  ];

  return (
    <section className="py-8 px-6 bg-gray-50">
      {/* Title */}
      <div className="text-center mx-auto mb-10">
        <Titles 
        title="Custom Packaging Designed"
        subtitle="Offering personalized services to provide custom packaging that fits
          your brand like a glove."
        />
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-4 bg-white p-2 rounded-lg shadow">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-5 py-2 rounded-md font-medium ${
                activeTab === tab
                  ? "bg-green-700 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "Materials" && (
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left text */}
          <div className="text-gray-700 leading-relaxed">
            <p>
              Experience the real quality with our premium stock, as we source
              only the finest materials, providing durability, reliability, and
              an amazing texture! From the sturdiness of cardboard and
              corrugated stock to the shimmer of holographic and metallic
              options, the eco-friendliness of Kraft boxes to the opulence of
              rigid packaging – our thorough selection guarantees that each
              material satisfies our rigorous standards.
            </p>
          </div>

          {/* Right cards */}
          <div className="flex space-x-2">
            {materials.map((item) => (
              <div key={item.name} className="flex flex-col">
                <div className="bg-swiper-lazy-preloader-white shadow rounded-xl overflow-hidden text-center hover:shadow-lg transition">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={500}
                    height={300}
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="p-2 font-semibold text-gray-800">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Placeholder content for other tabs */}
      {activeTab !== "Materials" && (
        <div className="text-center text-gray-600 mt-6">
          Content for <span className="font-semibold">{activeTab}</span> will go
          here.
        </div>
      )}
    </section>
  );
};

export default PackagingTabs;
