import CategoryList from "@/components/home-components/CategoryList";
import Features from "@/components/home-components/Features";
import HeroBanner from "@/components/home-components/HeroBanner";
export default function Home() {
  return (
    <div className="flex-col space-y-20 mb-20">
      <HeroBanner />
      <CategoryList />
      <Features />
      {/* <LeftImageWithContent content={leftSideContent} /> */}
    </div>
  );
}
