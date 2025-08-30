"use client";
import { useState } from "react";
import Image from "next/image";

type ProductGalleryProps = {
  images: string[];
};

export default function ImageGallery({ images }: ProductGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex flex-col md:flex-row gap-6 sticky top-32 h-fit">
      {/* Left Thumbnails */}
      <div className="flex md:flex-col gap-3 order-2 md:order-1 ">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(img)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition 
              ${activeImage === img ? "border-blue-500" : "border-gray-200"}`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="relative flex-1 w-full order-1 md:order-2">
        <Image
          src={activeImage}
          alt="Product Preview"
          width={600}
          height={600}
          className=" rounded-xl w-full"
          priority
        />
      </div>
    </div>
  );
}
