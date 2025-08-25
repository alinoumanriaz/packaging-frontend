'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WhatsappButton = () => {
  return (
    <div className="fixed bottom-8 right-10 z-50">
      <Link
        href="https://wa.me/447884529639?text=Hello%20Unique%20Custom%20Boxes%20Team%2C%20I%20would%20like%20to%20get%20a%20quote."
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="hover:scale-110 transition-transform cursor-pointer drop-shadow-lg"
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
