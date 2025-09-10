import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  blog: {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    imageUrl: string;
  };
}

const BlogCard: React.FC<{ blog: BlogCardProps["blog"] }> = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.slug}`} className="w-full">
      <Image
        className="rounded-md w-full max-h-[14rem] object-cover"
        src={blog.imageUrl[0] || "/placeholder.png"} // fallback if no image
        alt={blog.title}
        width={300}
        height={160}
      />
      <div className="p-2 flex flex-col space-y-1">
        <h3 className="text-md font-semibold line-clamp-2">{blog.title}</h3>
        <div className="text-gray-600 line-clamp-3 text-sm">
          {blog.excerpt}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
