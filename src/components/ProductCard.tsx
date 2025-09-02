import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface ProductCardProps {
  _id: string;
  name: string;
  slug: string;
  h1Tag: string;
  description: string;
  specification: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  imageUrl: string[];
  tags: string[];
  materials?: { slug: string }[];
  industry?: { slug: string };
  styles?: { slug: string }[];
}

const ProductCard = ({ data }: { data: ProductCardProps }) => {
  return (
    <Link
      href={`/${data.slug}`}
      className="group text-center flex flex-col space-y-3 transition-transform hover:scale-[1.02]"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl shadow-md">
        <Image
          src={data.imageUrl[0] || "/moe.png"}
          alt={data.name}
          width={300}
          height={300}
          className="object-cover transition-transform group-hover:scale-105 w-full h-full"
          // sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
          loading="eager"
        />
      </div>
      <h3 className=" line-clamp-3 text-sm md:text-sm capitalize transition-colors group-hover:text-primary-800">
        {data.name}
      </h3>
    </Link>
  );
};

export default ProductCard;
