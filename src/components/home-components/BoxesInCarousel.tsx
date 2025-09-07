"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion"; // ✅ import framer motion
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Titles from "@/components/Titles";
import Container from "../Container";
import { IProductType } from "@/Types/types";
import Image from "next/image";
import Link from "next/link";

interface MaterialBoxesSectionProps {
  Data: IProductType[];
  title?: string;
  subTitle?: string;
}

const BoxesInCarousel = ({ Data, title, subTitle }: MaterialBoxesSectionProps) => {
  return (
    <Container>
      <div className="mx-auto w-full">
        <div className="text-center mb-12">
          <Titles title={title} subtitle={subTitle} />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: ".review-swiper-button-next",
            prevEl: ".review-swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".review-pagination",
            bulletClass: "review-bullet",
            bulletActiveClass: "review-bullet-active",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            240: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 5 },
          }}
          className="pb-16 relative"
        >
          {Data.map((item, index) => (
            <SwiperSlide key={index} className="px-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Link
                  href={`/${item.slug}`}
                  className="group text-center flex flex-col space-y-3 transition-transform hover:scale-[1.02]"
                >
                  <div className="relative aspect-square overflow-hidden rounded-xl shadow-md">
                    <Image
                      src={item.imageUrl || "/moe.png"}
                      alt={item.name || ""}
                      width={300}
                      height={300}
                      className="object-cover transition-transform group-hover:scale-105 w-full h-full"
                      loading="eager"
                    />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base capitalize transition-colors group-hover:text-primary-800">
                    {item.name}
                  </h3>
                </Link>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* Custom navigation buttons */}
          <div className="review-swiper-button-next bg-black/60 absolute top-1/2 -translate-y-1/2 right-0 z-10 cursor-pointer rounded-full shadow-md p-2 hidden md:flex items-center justify-center w-10 h-10">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div className="review-swiper-button-prev bg-black/60 hover:bg-primary-800 absolute top-1/2 -translate-y-1/2 left-0 z-10 cursor-pointer rounded-full shadow-md p-2 hidden md:flex items-center justify-center w-10 h-10">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </Swiper>
      </div>
    </Container>
  );
};

export default BoxesInCarousel;
