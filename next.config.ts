import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      domains: [
        'avatar.vercel.sh',
        'via.placeholder.com',
        'source.unsplash.com',
        'dummyimage.com',
        'picsum.photos',
        'images.unsplash.com',
      ]
    }
};

export default nextConfig;
