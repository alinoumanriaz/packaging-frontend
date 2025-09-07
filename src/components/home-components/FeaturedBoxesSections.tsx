"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import Titles from "../Titles";
import Container from "../Container";
import { motion } from "framer-motion";

export interface IFeaturedSectionData {
  name: string;
  slug: string;
  iconName: string;
  imageUrl?: string;
  bannerImage?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface MaterialBoxesSectionProps {
  featuredData: IFeaturedSectionData[];
  title?: string;
  subTitle?: string;
}

const FeaturedBoxesSections = ({
  featuredData,
  title,
  subTitle,
}: MaterialBoxesSectionProps) => {
  const sectionRef = useRef(null);

  return (
    <Container>
      <div ref={sectionRef} className="flex flex-col items-center space-y-8 md:space-y-12">
        <Titles title={title} subtitle={subTitle} />

        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {featuredData.map((item: IFeaturedSectionData, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.4,
                    delay: idx * 0.1, // Reduced delay between items
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true, amount: 0.1 }} // Reduced threshold
              >
                <Link
                  href={`/${item.slug}`}
                  className="group text-center flex flex-col space-y-3 transition-transform hover:scale-[1.02]"
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl shadow-md">
                    <Image
                      src={item.imageUrl || "/moe.png"}
                      alt={item.name}
                      width={300}
                      height={300}
                      className="object-cover transition-transform group-hover:scale-105 w-full h-full"
                      loading="eager"
                    />
                    {/* Hover overlay effect */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base capitalize transition-colors group-hover:text-primary-800">
                    {item.name}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeaturedBoxesSections;