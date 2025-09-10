import AllPagesBanner from "@/components/AllPagesBanner";
import Container from "@/components/Container";
import PagesSEOContent from "@/components/PagesSEOContent";
import React from "react";

export const revalidate = 60; // Revalidate every 60 seconds

function getApiUrl(): string {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl)
    throw new Error("NEXT_PUBLIC_API_URL environment variable is not defined");
  return apiUrl;
}

async function getAllBlogs() {
  const apiUrl = getApiUrl();
  const res = await fetch(`${apiUrl}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-secret-key": process.env.API_SECRET_KEY!,
    },
    next: { revalidate: 60 }, // ISR enabled
    body: JSON.stringify({
      query: `
        query GetAllBlogs {
          getAllBlogs {
              _id
              title
              imageUrl
              slug
              excerpt
              content
              status
              author {
                _id
                username
                imageUrl
              }
              tags
              isFeatured
              createdAt
              updatedAt
          }
        }
      `,
    }),
  });

  if (!res.ok) throw new Error("Failed to fetch blogs");
  const { data } = await res.json();
  return data?.getAllBlogs || [];
}

interface PageProps {
  params: Promise<{ slug?: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const blogs = await getAllBlogs();
  const blog = blogs.find((b: any) => b.slug === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="">
      <AllPagesBanner
        title={blog.title}
        description={blog.excerpt}
        imageUrl={blog.imageUrl[0]}
      />
      <Container>
        <div className="border-t w-full border-gray-200 flex justify-center items-center">
          <div className=" w-[90%] p-4 h-full flex flex-col space-y-8">
            {/* <div className="font-semibold text-3xl w-full ">{blog.title}</div> */}
            <PagesSEOContent content={blog.content} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
