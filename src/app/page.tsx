import BoxFinishingSection from "@/components/home-components/BoxFinishingSection";
import FeaturedBoxesSections from "@/components/home-components/FeaturedBoxesSections";
import Features from "@/components/home-components/Features";
import HeroBanner from "@/components/home-components/HeroBanner";
import QuoteSection from "@/components/home-components/QuoteSection";
import Reviews from "@/components/home-components/Reviews";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
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
  const { data } = await res.json();
  const AllIndustries = data?.getAllIndustry || [];
  const AllMaterials = data?.getAllMaterial || [];
  const AllStyles = data?.getAllStyle || [];
  
  return (
    <div className="flex-col space-y-16 md:space-y-24 mb-20">
      <HeroBanner />
      <FeaturedBoxesSections
        title={"Boxes By Industries"}
        subTitle="Discover custom packaging tailored for every industry — from cosmetics to apparel, electronics, gifts, and more."
        featuredData={AllIndustries}
      />

      <FeaturedBoxesSections
        title={"Boxes By Material"}
        subTitle="Choose from durable materials like Cardboard, Kraft, Corrugated, Rigid, and Bux Board to match your packaging needs."
        featuredData={AllMaterials}
      />

      <FeaturedBoxesSections
        title={"Boxes By Styles"}
        subTitle="Explore a variety of box styles — Display, Tuck Top, Gable, Drawer, Die-Cut, Mailer, and Book Style Boxes."
        featuredData={AllStyles}
      />
      <BoxFinishingSection />
      <Features />
      <QuoteSection />
      <Reviews />
    </div>
  );
}
