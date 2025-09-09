"use client";
import React from "react";
import Image from "next/image";

interface IProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

const AllPagesBanner = ({ title, description, imageUrl }: IProps) => {
  return (
    <section
      aria-label={title || "Banner Image"}
      className={`relative ${
        !imageUrl ? "text-black" : "text-white"
      } flex flex-col justify-center items-center w-full h-44 md:h-[calc(100dvh-120px)] overflow-hidden`}
    >
      {/* Background image with preload */}
      {imageUrl && (
        <>
          <Image
            src={imageUrl}
            alt={title || ""}
            fill
            className="object-cover"
            priority 
            sizes="100vw"
            placeholder="blur" 
            blurDataURL="/blur-placeholder.png"
          />
          <div className={`absolute inset-0 bg-black/50`} />
        </>
      )}

      {/* Text content */}
      <div className={`relative z-10 w-full text-center px-4 `}>
        {title && <h1 className="text-xl md:text-5xl font-bold">{title}</h1>}
        {description && (
          <p className="mt-2 text-xs md:text-lg max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default AllPagesBanner;
