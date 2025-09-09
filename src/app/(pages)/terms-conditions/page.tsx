import React from "react";
import AllPagesBanner from "@/components/AllPagesBanner";
import Container from "@/components/Container";
import PagesSEOContent from "@/components/PagesSEOContent";

const page =  async () => {
  let pageContent
  const contentRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-secret-key": process.env.API_SECRET_KEY!,
      },
      body: JSON.stringify({
        query: `
          query {
            getPageContent(slug: "terms-conditions") {
              success
              message
              data {
                _id
                slug
                content
                author {
                  _id
                  username
                  email
                }
                createdAt
                updatedAt
              }
            }
          }
        `,
      }),
      cache: "force-cache",
    });
    
    if (contentRes.ok) {
      const contentData = await contentRes.json();
      pageContent = contentData?.data?.getPageContent?.data?.content || {};
    }
  return (
    <div className="w-full">
      <AllPagesBanner
        title="About Us"
      />
      <Container>
        <div className="w-full">
          <PagesSEOContent content={pageContent} />
        </div>
      </Container>
    </div>
  );
};

export default page;
