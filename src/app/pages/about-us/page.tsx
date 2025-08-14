import React from "react";
import AllPagesBanner from "@/components/AllPagesBanner";
import Container from "@/components/Container";
import Titles from "@/components/Titles";

const page = () => {
  return (
    <div className="">
      <AllPagesBanner
        title="About Us"
      />
      <Container>
        <div className="w-full space-y-12 my-14">
          <div className="">
            <Titles
              className="text-start"
              title="About Eco Custom Boxes"
              paragraph="At Eco Custom Boxes, we're revolutionizing packaging in the UK with environmentally responsible solutions that don't compromise on quality or performance. Founded in London, we've grown from a small startup to one of the UK's leading providers of custom eco-friendly packaging."
            />
            <Titles
              className="text-start"
              paragraph="We're committed to helping businesses transition to sustainable packaging by offering innovative, biodegradable, and recyclable alternatives to conventional packaging materials. Our team of packaging experts works closely with clients across industries to develop solutions that protect products while protecting the planet."
            />
          </div>
          <div>
            <Titles className="text-start" title="About Eco Custom Boxes" />
            <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                UK-based manufacturing using locally sourced sustainable
                materials
              </li>
              <li>Carbon-neutral production process</li>
              <li>Custom designs tailored to your specific products</li>
              <li>Fast turnaround without compromising on sustainability</li>
              <li>Competitive pricing for businesses of all sizes</li>
            </ul>
          </div>
          <div>
            <Titles
              className="text-start"
              title="Our Materials"
              paragraph="We specialize in recycled cardboard, biodegradable plastics, plant-based inks, and other sustainable materials that meet rigorous environmental standards. All our materials are carefully selected for durability, recyclability, and minimal environmental impact."
            />
          </div>
          <div>
            <Titles
              className="text-start"
              title="The Eco Custom Boxes Difference"
              paragraph="What sets us apart is our dual commitment to exceptional packaging quality and environmental responsibility. We believe sustainable packaging should be accessible to all businesses, which is why we offer solutions at various price points without cutting corners on our ecological commitments."
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
