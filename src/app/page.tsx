import CategoryList from "@/components/home-components/CategoryList";
import Features from "@/components/home-components/Features";
import HeroBanner from "@/components/home-components/HeroBanner";
// import LeftImageWithContent from "@/components/home-components/LeftImageWithContent";

// const leftSideContent = {
//   image:
//     "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
//   heading: "Strategic Content Planning",
//   description: `We don't just write articles - we build content ecosystems. Our approach begins with detailed audience research and competitive analysis to identify the most valuable content opportunities. We then develop a strategic content calendar that aligns with your business goals and buyer's journey. Each piece is designed to work as part of a larger system, with internal linking strategies that boost domain authority and keep readers engaged across your site.`,
// };
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
