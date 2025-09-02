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
      image: "/edible-mylar-bag.webp",
      description: "Versatile and durable cardboard for various packaging needs."
    },
    {
      name: "Kraft",
      image: "/edible-mylar-bag.webp",
      description: "Eco-friendly kraft paper with natural strength and appeal."
    },
    {
      name: "Rigid",
      image: "/edible-mylar-bag.webp",
      description: "Premium rigid boxes for luxury product presentation."
    },
    {
      name: "Corrugated",
      image: "/edible-mylar-bag.webp",
      description: "Strong corrugated material for maximum protection."
    },
  ];

  const addOns = [
    {
      name: "Foiling",
      icon: "✨",
      description: "Add metallic foil accents for a premium look."
    },
    {
      name: "Embossing",
      icon: "🔲",
      description: "Create raised patterns for tactile appeal."
    },
    {
      name: "Spot UV",
      icon: "🔆",
      description: "Add glossy highlights to specific design elements."
    },
    {
      name: "Window Cutting",
      icon: "🪟",
      description: "Showcase your product with custom-shaped windows."
    },
  ];

  const paperWeights = [
    { weight: "80-100 lb", use: "Business cards, premium brochures" },
    { weight: "100-120 lb", use: "Presentation folders, document covers" },
    { weight: "120-150 lb", use: "Packaging sleeves, rigid boxes" },
    { weight: "150+ lb", use: "Heavy-duty packaging, luxury containers" },
  ];

  const shippingOptions = [
    {
      service: "Standard",
      time: "5-7 business days",
      price: "$8.99",
    },
    {
      service: "Express",
      time: "2-3 business days",
      price: "$14.99",
    },
    {
      service: "Overnight",
      time: "Next business day",
      price: "$24.99",
    },
  ];

  return (
    <section className=" py-8 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mx-auto mb-10 max-w-3xl">
          <Titles 
            title="Custom Packaging Designed"
            subtitle="Offering personalized services to provide custom packaging that fits your brand like a glove."
          />
        </div>

        {/* Tabs - Responsive */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="flex flex-wrap justify-center gap-2 bg-white p-2 rounded-lg shadow md:flex-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-md font-medium text-sm md:text-base md:px-5 md:py-2.5 transition-colors ${
                  activeTab === tab
                    ? "bg-primary-800 text-white shadow-md"
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
        <div className="max-w-6xl mx-auto">
          {/* Materials Tab */}
          {activeTab === "Materials" && (
            <div className="grid relative grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Left text */}
              <div className="text-gray-700 md:sticky md:top-36 h-fit leading-relaxed space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Premium Materials</h3>
                <p>
                  Experience the real quality with our premium stock, as we source
                  only the finest materials, providing durability, reliability, and
                  an amazing texture! From the sturdiness of cardboard and
                  corrugated stock to the shimmer of holographic and metallic
                  options, the eco-friendliness of Kraft boxes to the opulence of
                  rigid packaging – our thorough selection guarantees that each
                  material satisfies our rigorous standards.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-primary-800 mb-2">Custom Material Options</h4>
                  <p className="text-primary-800/80">We can source specialized materials based on your specific requirements and sustainability goals.</p>
                </div>
              </div>

              {/* Right cards */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {materials.map((item) => (
                  <div key={item.name} className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="relative h-40 md:h-48">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-1">{item.name}</h4>
                      <p className="md:text-sm text-xs text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ad-Ons & Finishing Tab */}
          {activeTab === "Ad-Ons & Finishing" && (
            <div className="grid relative grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div className="text-gray-700 md:sticky md:top-36 h-fit leading-relaxed space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Enhance Your Packaging</h3>
                <p>
                  Make your packaging stand out with our premium finishing options. 
                  From subtle elegance to bold statements, our finishing techniques 
                  add value and perceived quality to your products. Each technique 
                  is applied by experienced craftsmen who understand how to maximize 
                  visual impact.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                  <h4 className="font-semibold text-amber-800 mb-2">Custom Combinations</h4>
                  <p className="text-amber-700">We can combine multiple finishing techniques to create truly unique packaging solutions.</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {addOns.map((item) => (
                  <div key={item.name} className="bg-white p-5 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h4 className="font-semibold text-gray-800 mb-2">{item.name}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Paper Weight Tab */}
          {activeTab === "Paper Weight" && (
            <div className="grid relative grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div className="text-gray-700 md:sticky md:top-36 h-fit leading-relaxed space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Choosing the Right Weight</h3>
                <p>
                  Paper weight significantly impacts both the durability and perceived 
                  quality of your packaging. Heavier weights convey luxury and substance, 
                  while lighter weights offer flexibility and cost-efficiency. Our experts 
                  can help you select the perfect weight for your specific application.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <h4 className="font-semibold text-green-800 mb-2">Sustainability Note</h4>
                  <p className="text-green-700">We offer recycled options at various weights to meet your environmental goals.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h4 className="font-semibold text-gray-800 mb-4 text-center">Paper Weight Guide</h4>
                <div className="space-y-4">
                  {paperWeights.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700">{item.weight}</span>
                      <span className="text-gray-600 text-sm text-right">{item.use}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Shipping Tab */}
          {activeTab === "Shipping" && (
            <div className="grid relative grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div className="text-gray-700 md:sticky md:top-36 h-fit leading-relaxed space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Delivery Options</h3>
                <p>
                  We offer flexible shipping solutions to meet your timeline and budget requirements. 
                  Our logistics team ensures that your packaging arrives safely and on time, regardless 
                  of the destination. All shipments are carefully tracked and insured for your peace of mind.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <h4 className="font-semibold text-purple-800 mb-2">International Shipping</h4>
                  <p className="text-purple-700">We ship worldwide with customs documentation handled on your behalf.</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h4 className="font-semibold text-gray-800 mb-4 text-center">Shipping Options</h4>
                <div className="space-y-4">
                  {shippingOptions.map((item, index) => (
                    <div key={index} className="p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-gray-700">{item.service}</span>
                        <span className="font-semibold text-blue-600">{item.price}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PackagingTabs;