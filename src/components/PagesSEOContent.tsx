import React from "react";
import Container from "./Container";
import Markdown from "react-markdown";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const PagesSEOContent = () => {
  return (
    <Container>
      <div className="w-full ">
        {/* Sticky Box */}
        <div className="w-full ring-1 ring-gray-200 rounded-xl p-4 md:p-10 h-[calc(100dvh-120px)] bg-white">
          <div
            className={`${poppins.className} pr-4 md:pr-6 overflow-y-auto h-full prose prose-lg`}
          >
            <Markdown>
              {`
# **Custom Packaging Boxes – Designed to Elevate Your Brand**

Looking for custom packaging boxes that make your brand stand out?  

At **[Your Brand Name]**, we specialize in creating high-quality, eco-friendly, and fully customizable packaging solutions tailored to your products and audience.  

## Why Choose Us?
- **Eco-friendly materials** for sustainability  
- **Custom sizes & designs** to fit your brand  
- **Premium quality** that leaves a lasting impression  

## Our Packaging Options
- Retail Packaging  
- Shipping Boxes  
- Luxury Packaging  

Whether you run a small business or a large brand, our packaging ensures you make the **best first impression**.
Whether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large ether you run a small business or a large 
              `}
            </Markdown>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PagesSEOContent;
