import AllPagesBanner from "@/components/AllPagesBanner";
import Container from "@/components/Container";
import ProductCard, { ProductCardProps } from "@/components/ProductCard";
import React from "react";

interface CategoryItem {
  slug: string;
}

// Helper function to get API URL with validation
function getApiUrl(): string {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    throw new Error("NEXT_PUBLIC_API_URL environment variable is not defined");
  }
  return apiUrl;
}

// 1. Generate static params for all slugs
export async function generateStaticParams() {
  const apiUrl = getApiUrl();
  const res = await fetch(`${apiUrl}/graphql`, {
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
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch static params: ${res.status}`);
  }

  const { data } = await res.json();

  const materials: CategoryItem[] = data?.getAllMaterial || [];
  const industries: CategoryItem[] = data?.getAllIndustry || [];
  const styles: CategoryItem[] = data?.getAllStyle || [];

  return [...materials, ...industries, ...styles].map((item) => ({
    slug: item.slug,
  }));
}

async function getAllProducts(): Promise<ProductCardProps[]> {
  const apiUrl = getApiUrl();
  const res = await fetch(`${apiUrl}/graphql`, {
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
            materials { slug }
            industry { slug }
            styles { slug }
          }
        }
      `,
    }),
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  const { data } = await res.json();
  console.log({ getAllProducts: data?.getAllProduct || [] });
  return data?.getAllProduct || [];
}

async function getCategoryData(slug: string) {
  const apiUrl = getApiUrl();
  const typeRes = await fetch(`${apiUrl}/graphql`, {
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
    cache: "force-cache",
  });

  if (!typeRes.ok) {
    throw new Error(`Failed to fetch category data: ${typeRes.status}`);
  }

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

// Fix: Use the correct PageProps type with Promise for params
interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {
  // Await the params promise
  const { slug } = await params;

  const [allProducts, categoryData] = await Promise.all([
    getAllProducts(),
    getCategoryData(slug),
  ]);

  console.log({ allProducts: allProducts });

  // 4. Filter products by slug
  const filteredProducts = allProducts.filter(
    (product) =>
      product.industry?.slug === slug ||
      product.materials?.some((m) => m.slug === slug) ||
      product.styles?.some((s) => s.slug === slug)
  );

  console.log({ filteredProducts: filteredProducts });

  return (
    <div className="">
      <AllPagesBanner
        title={`${categoryData?.name || "All"}`}
        description={categoryData?.description}
        imageUrl={categoryData?.bannerImage}
      />
      <Container>
        <div className="border-t-[1px] border-gray-200 flex justify-center">
          <div className="w-[90%] py-4 h-full flex flex-col space-y-8">
            {filteredProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product._id} data={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium">No products found</h3>
                <div className="text-gray-500 mt-2">
                  There are no products matching this category.
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
