import AllPagesBanner from "@/components/AllPagesBanner";
import Container from "@/components/Container";
import React from "react";

const page = () => {
  return (
    <div className="">
      <AllPagesBanner
        title="View our all Blogs"
        description="Design and personalized packaging for your brand."
        imageUrl="https://oxopackaging.com/assets/blog-posts/gift-packaging-ideas.webp"
      />
      <Container>
        {/* <PagesSEOContent content={} /> */}
        <div className="border-t-[1px] border-gray-200 flex justify-center items-center">
          <div className="w-[90%] p-4 h-full flex flex-col space-y-8">
            <div className="font-semibold text-3xl w-full ">10 Trendy Gift Packaging Ideas for This Season in 2025</div>
            <div>There is something magical about receiving a beautifully wrapped gift. The excitement, the effort, and the aesthetic all speak volumes. Whether prepping for a birthday bash or brainstorming Christmas gift wrapping ideas, the right presentation can make your gift feel even more meaningful. Unwrap some of the trendy and stylish gift packaging ideas to elevate your gift-giving game in this blog. From sustainable choices to over-the-top glam, we have got you covered. So, stay with us till the end!</div>
            <div>There is something magical about receiving a beautifully wrapped gift. The excitement, the effort, and the aesthetic all speak volumes. Whether prepping for a birthday bash or brainstorming Christmas gift wrapping ideas, the right presentation can make your gift feel even more meaningful. Unwrap some of the trendy and stylish gift packaging ideas to elevate your gift-giving game in this blog. From sustainable choices to over-the-top glam, we have got you covered. So, stay with us till the end!</div> 
          </div>
          
        </div>
      </Container>
    </div>
  );
};

export default page;
