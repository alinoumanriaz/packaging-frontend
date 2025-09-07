"use client";
import Link from "next/link";
import React from "react";
import { BiPhone } from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";
import Container from "./Container";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { StyleItems } from "@/custom-data/data";

const Footer = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/user")) {
    return null;
  }

  return (
    <>
      <footer className="h-fit footer-color mt-5 sm:pt-0 relative overflow-hidden flex justify-center bg-darkmodebtncolor flex-col items-center">
        <Container>
          <div className="border-t border-gray-600/20 border-b flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 my-8 md:my-16 w-full gap-8 md:gap-4">
              {/* Company Info - spans full width on mobile, 2 cols on md, 2 cols on lg */}
              <div className="col-span-1 md:col-span-2 lg:col-span-2 text-sm flex">
                <div className="flex flex-col space-y-4">
                  <div>
                    <Link
                      href="/"
                      className="flex space-x-3 items-center font-medium text-lg md:text-xl text-white"
                    >
                      <Image
                        className="md:w-12 w-10"
                        src={"/logo.png"}
                        alt="Unique Custom Boxes"
                        width={60}
                        height={50}
                        priority
                      />
                      <div className="text-lg md:text-xl font-bold">
                        PackBox
                      </div>
                    </Link>
                  </div>
                  <p className="text-white/80 leading-relaxed text-sm md:text-sm">
                    Leading manufacturer of custom packaging boxes with over 15
                    years of experience. We specialize in eco-friendly, durable
                    packaging solutions for businesses of all sizes.
                  </p>

                  {/* Contact Info Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-primary-800/5 border-slate-700 rounded-xl">
                      <div className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary-800/20 rounded-lg flex items-center justify-center">
                            <BiPhone className="w-5 h-5 text-primary-800" />
                          </div>
                          <div>
                            <p className="text-white font-medium">
                              Sales Hotline
                            </p>
                            <p className="text-sm text-gray-400">
                              1-800-PACK-BOX
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-primary-800/5 border-slate-700 rounded-xl">
                      <div className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary-800/20 rounded-lg flex items-center justify-center">
                            <BiPhone className="w-5 h-5 text-primary-800" />
                          </div>
                          <div>
                            <p className="text-white font-medium">
                              Support Line
                            </p>
                            <p className="text-sm text-gray-400">
                              1-800-SUPPORT
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Information Column */}
              <div className="flex justify-start md:justify-center px-4">
                <div className="flex flex-col space-y-4 w-full">
                  <h3 className="text-white pl-2 font-bold text-lg md:text-xl">
                    Information
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      {
                        name: "Contact Us",
                        url: "/contact-us",
                      },
                      {
                        name: "About Us",
                        url: "/about-us",
                      },
                      {
                        name: "Delivery Info",
                        url: "/delivery-info",
                      },
                      {
                        name: "Privacy Policy",
                        url: "/privacy-policy",
                      },
                      {
                        name: "Terms & Conditions",
                        url: "/terms-conditions",
                      },
                      {
                        name: "Blogs",
                        url: "/blog",
                      },
                      {
                        name: "Portfolio",
                        url: "/portfolio",
                      },
                      {
                        name: "Sitemap",
                        url: "/sitemap",
                      },
                    ].map((item, index) => (
                      <li key={index}>
                        <Link
                          href={`${item.url}`}
                          className="flex items-center text-white/50 hover:text-white transition-colors group"
                        >
                          <BsChevronRight className="w-3 h-3 mr-2 text-white/50 group-hover:text-white transition-colors" />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Products Column */}
              <div className="flex justify-start md:justify-center px-4">
                <div className="flex flex-col space-y-4 w-full">
                  <h3 className="text-white pl-2 font-bold text-lg md:text-xl">
                    Popular Products
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {StyleItems.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={`/${item.slug}`}
                          className="flex items-center text-white/50 hover:text-white transition-colors group"
                        >
                          <BsChevronRight className="w-3 h-3 mr-2 text-white/50 group-hover:text-white transition-colors" />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Resources Column */}
              <div className="flex justify-start md:justify-center px-4">
                <div className="flex flex-col space-y-4 w-full">
                  <h3 className="text-white pl-2 font-bold text-lg md:text-xl">
                    Resources
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      // "Packaging Calculator",
                      // "Size Guide",
                      // "Material Specifications",
                      // "Design Templates",
                      // "Sustainability Report",
                      // "Case Studies",
                      // "FAQ",
                      "packaging",
                      "packaging",
                      "packaging",
                      "packaging",
                      "packaging",
                      "packaging",
                    ].map((item, index) => (
                      <li key={index}>
                        <Link
                          href="#"
                          className="flex items-center text-white/50 hover:text-white transition-colors group"
                        >
                          <BsChevronRight className="w-3 h-3 mr-2 text-white/50 group-hover:text-white transition-colors" />
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <div className="my-4 w-full text-sm text-neutral-400 text-center md:text-left">
            Copyright © 2026. All rights reserved.
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
