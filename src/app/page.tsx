import Features from "@/components/home-components/Features";
import HeroBanner from "@/components/home-components/HeroBanner";
import IndustryBoxesSection from "@/components/home-components/IndustryBoxesSection";
import MaterialBoxesSection, {
  IMaterial,
} from "@/components/home-components/MaterialBoxesSection";
import QuoteSection from "@/components/home-components/QuoteSection";
import StyleBoxesSection from "@/components/home-components/StyleBoxesSection";
import { GET_ALL_MATERIAL } from "@/graphql/queries/material.query";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: GET_ALL_MATERIAL.loc?.source.body,
    }),
  });
  const { data } = await res.json();
  console.log({ matdata: data });
  return (
    <div className="flex-col space-y-16 md:space-y-24 mb-20">
      <HeroBanner />
      <MaterialBoxesSection materials={data?.getAllMaterial as IMaterial[]} />
      <IndustryBoxesSection />
      <StyleBoxesSection />
      <Features />
      <QuoteSection />
    </div>
  );
}
