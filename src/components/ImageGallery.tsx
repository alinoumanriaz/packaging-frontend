"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
};

export default function ImageGalleryClient({ images }: Props) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <>
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 order-2 md:order-1">
        {images.map((img, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveImage(img)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition 
              ${activeImage === img ? "border-blue-500" : "border-gray-200"}`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Swappable main image */}
      <div className="relative flex-1 w-full order-1 md:order-2 md:hidden">
        <Image
          src={activeImage}
          alt="Active product image"
          width={600}
          height={600}
          sizes="(max-width: 768px) 100vw, 600px"
          className="rounded-xl w-full h-[28rem] object-cover"
          priority
        />
      </div>
    </>
  );
}
