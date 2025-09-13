import BoxFinishingSection from "@/components/home-components/BoxFinishingSection";
import FeaturedBoxesSections from "@/components/home-components/FeaturedBoxesSections";
import Features from "@/components/home-components/Features";
import HeroBanner from "@/components/home-components/HeroBanner";
import QuoteSection from "@/components/home-components/QuoteSection";
import PagesSEOContent from "../components/PagesSEOContent";
import BoxesInCarousel from "@/components/home-components/BoxesInCarousel";
import TrustFactor from "@/components/home-components/TrustFactor";
import ReviewsSection from "@/components/home-components/ReviewSection";

export default async function Home() {
  let AllIndustries = [];
  let AllMaterials = [];
  let AllStyles = [];
  let pageContent = '';

  try {
    // Fetch categories data
    const categoriesRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-secret-key": process.env.API_SECRET_KEY!,
      },
      body: JSON.stringify({
        query: `
          query {
            getAllMaterial {
              slug
              name
              imageUrl
            }
            getAllIndustry {
              slug
              name
              imageUrl
            }
            getAllStyle {
              slug
              name
              imageUrl
            }
          }
        `,
      }),
      cache: "force-cache",
    });
    
    if (categoriesRes.ok) {
      const categoriesData = await categoriesRes.json();
      AllIndustries = categoriesData?.data?.getAllIndustry || [];
      AllMaterials = categoriesData?.data?.getAllMaterial || [];
      AllStyles = categoriesData?.data?.getAllStyle || [];
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
  }

  try {
    // Fetch page content data
    const contentRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-secret-key": process.env.API_SECRET_KEY!,
      },
      body: JSON.stringify({
        query: `
          query {
            getPageContent(slug: "home") {
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
      // cache: "force-cache",
    });
    
    if (contentRes.ok) {
      const contentData = await contentRes.json();
      pageContent = contentData?.data?.getPageContent?.data?.content || {};
    }
  } catch (error) {
    console.error("Error fetching page content:", error);
  }

  console.log({pageContent:pageContent})
  return (
    <div className="flex-col space-y-16 md:space-y-24 mb-20">
      <div>
        <HeroBanner />
        <TrustFactor />
      </div>
      <FeaturedBoxesSections
        title={"Boxes By Industries"}
        subTitle="Discover custom packaging tailored for every industry — from cosmetics to apparel, electronics, gifts, and more."
        featuredData={AllIndustries}
      />

      <BoxesInCarousel
        title={"Boxes By Material"}
        subTitle="Choose from durable materials like Cardboard, Kraft, Corrugated, Rigid, and Bux Board to match your packaging needs."
        Data={AllMaterials}
      />

      <BoxesInCarousel
        title={"Boxes By Styles"}
        subTitle="Explore a variety of box styles — Display, Tuck Top, Gable, Drawer, Die-Cut, Mailer, and Book Style Boxes."
        Data={AllStyles}
      />
      <BoxFinishingSection />
      <Features />
      <QuoteSection />
      <ReviewsSection />
      <PagesSEOContent content={pageContent} />
    </div>
  );
}
