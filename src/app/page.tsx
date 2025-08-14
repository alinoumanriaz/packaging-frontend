// import FeaturedProducts from "@/components/home-components/FeaturedProducts";
import Features from "@/components/home-components/Features";
import HeroBanner from "@/components/home-components/HeroBanner";
import IndustryBoxesSection from "@/components/home-components/IndustryBoxesSection";
import MaterialBoxesSection from "@/components/home-components/MaterialBoxesSection";
// import PromiseList from "@/components/home-components/PromiseList";
import QuoteSection from "@/components/home-components/QuoteSection";
// import Reviews from "@/components/home-components/Reviews";
import StyleBoxesSection from "@/components/home-components/StyleBoxesSection";

export default function Home() {
  return (
    <div className="flex-col space-y-24 mb-20">
      <HeroBanner />
      <MaterialBoxesSection />
      <IndustryBoxesSection />
      <StyleBoxesSection />
      {/* <PromiseList /> */}
      {/* <FeaturedProducts /> */}
      <Features />
      <QuoteSection />
      {/* <Reviews /> */}
    </div>
  );
}
