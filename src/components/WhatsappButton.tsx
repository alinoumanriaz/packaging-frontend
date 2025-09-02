'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatsappButton = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-10 z-50  ">
      <Link
        // href="https://wa.me/447884529639?text=Hello%20Unique%20Custom%20Boxes%20Team%2C%20I%20would%20like%20to%20get%20a%20quote."
        href="/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="hover:scale-110 h-12 w-12 md:h-14 md:w-14 transition-transform cursor-pointer drop-shadow-lg"
          src={"/whatsapp.png"}
          alt="unique custom boxes"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
};

export default WhatsappButton;
