import AllPagesBanner from "@/components/AllPagesBanner";
import Container from "@/components/Container";
import ProductCard, { ProductCardProps } from "@/components/ProductCard";
import React from "react";

interface CategoryItem {
  slug: string;
}

// 1. Generate static params for all slugs
export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          getAllMaterial {
            slug
          }
          getAllIndustry {
            slug
          }
          getAllStyle {
            slug
          }
        }
      `,
    }),
    cache: "no-store",
  });

  const { data } = await res.json();

  const materials: CategoryItem[] = data?.getAllMaterial || [];
  const industries: CategoryItem[] = data?.getAllIndustry || [];
  const styles: CategoryItem[] = data?.getAllStyle || [];

  return [...materials, ...industries, ...styles].map((item) => ({
    slug: item.slug,
  }));
}

async function getAllProducts(): Promise<ProductCardProps[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          getAllProduct {
            _id
            name
            slug
            imageUrl
            material { slug }
            industry { slug }
            style { slug }
          }
        }
      `,
    }),
    cache: "no-store",
  });

  const { data } = await res.json();
  return data?.getAllProduct || [];
}

async function getCategoryData(slug: string) {
  const typeRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query ($slug: String!) {
          getMaterialBySlug(slug: $slug) { name description bannerImage }
          getIndustryBySlug(slug: $slug) { name description bannerImage }
          getStyleBySlug(slug: $slug) { name description bannerImage }
        }
      `,
      variables: { slug },
    }),
    cache: "no-store",
  });

  const { data } = await typeRes.json();
  console.log({ getCategoryDataBySlug: data });
  // pick whichever is not null
  return (
    data?.getMaterialBySlug ||
    data?.getIndustryBySlug ||
    data?.getStyleBySlug ||
    null
  );
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {
  const allProducts = await getAllProducts();
  const { slug } = await params;
  console.log({ allProducts: allProducts });

  const categoryData = await getCategoryData(slug);

  // 4. Filter products by slug
  const filteredProducts = allProducts.filter((product) =>
    [
      product.material?.slug,
      product.industry?.slug,
      product.style?.slug,
    ].includes(slug)
  );

  console.log({ filteredProducts: filteredProducts });

  return (
    <div className="">
      <AllPagesBanner
        title={`View our ${categoryData.name || "All"} Products`}
        description={categoryData.description}
        imageUrl={categoryData.bannerImage}
      />
      <Container>
        <div className="border-t-[1px] border-gray-200 flex justify-center">
          <div className="w-[80%] p-4 h-full flex flex-col space-y-8">
            {filteredProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product._id} data={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium">No products found</h3>
                <p className="text-gray-500 mt-2">
                  There are no products matching this category.
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
