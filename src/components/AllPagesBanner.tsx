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
    <div className="relative flex flex-col justify-center items-center w-full h-44 md:h-80 text-white overflow-hidden">
      {/* Background image with preload */}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title || "Banner"}
          fill
          className="object-cover"
          priority  // 👈 ensures preloaded
          sizes="100vw"
          placeholder="blur" // 👈 optional: nice blur while loading
          blurDataURL="/blur-placeholder.png" // small low-quality image
        />
      )}

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text content */}
      <div className="relative z-10 w-full text-center px-4">
        {title && <h1 className="text-xl md:text-5xl font-bold">{title}</h1>}
        {description && (
          <p className="mt-2 text-xs md:text-lg max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default AllPagesBanner;
