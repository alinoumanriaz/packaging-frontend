import CategoryList from "@/components/home-components/CategoryList";
import FeaturedProducts from "@/components/home-components/FeaturedProducts";
import Features from "@/components/home-components/Features";
import HeroBanner from "@/components/home-components/HeroBanner";
import PromiseList from "@/components/home-components/PromiseList";
import QuoteSection from "@/components/home-components/QuoteSection";

export default function Home() {
  return (
    <div className="flex-col space-y-28 mb-20">
      <HeroBanner />
      <CategoryList />
      <PromiseList />
      <FeaturedProducts />
      <Features />
      <QuoteSection />
    </div>
  );
}
