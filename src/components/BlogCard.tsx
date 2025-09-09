import Image from "next/image";
import React from "react";

const BlogCard = () => {
  return (
    <div className="w-full ">
      <Image
        className="rounded-md w-full max-h-[14rem]"
        src={"/moe.png"}
        alt="image"
        width={300}
        height={60}
      />
      <div className="p-2 flex flex-col space-y-1">
        <h3 className=" text-md font-semibold line-clamp-2">
          10 Trendy Gift Packaging Ideas for This Season in 2025
        </h3>
        <div className="text-gray-600 line-clamp-3 text-sm">
          There is something magical about receiving a beautifully wrapped gift.
          The excitement, the effort, and the aesthetic all speak volumes.
          Whether prepping for a birthday bash or brainstorming Christmas gift
          wrapping ideas, the right presentation can make your gift feel even
          more meaningful. Unwrap some of the trendy and stylish gift packaging
          ideas to elevate your gift-giving game in this blog. From sustainable
          choices to over-the-top glam, we have got you covered. So, stay with
          us till the end!
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
