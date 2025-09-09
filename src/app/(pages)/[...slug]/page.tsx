import AllPagesBanner from "@/components/AllPagesBanner";
import Container from "@/components/Container";
import ProductCard, { ProductCardProps } from "@/components/ProductCard";
import ImageGallery from "@/components/ImageGallery";
import MiniRequestQuote from "@/components/MiniRequestQuote";
import PackagingTabs from "@/components/PackagingTabs";
import Titles from "@/components/Titles";
import React from "react";
import PagesSEOContent from "@/components/PagesSEOContent";
import QuoteSection from "@/components/home-components/QuoteSection";
// import type { Metadata } from 'next';

interface CategoryItem {
  slug: string;
  name?: string;
  description?: string;
  bannerImage?: string;
}

function getApiUrl(): string {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    throw new Error("NEXT_PUBLIC_API_URL environment variable is not defined");
  }
  return apiUrl;
}

// Generate static params for all slugs
export async function generateStaticParams() {
  try {
    const apiUrl = getApiUrl();
    const res = await fetch(`${apiUrl}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-secret-key": process.env.API_SECRET_KEY!,
        "x-apollo-operation-name": "GetAllData",
      },
      body: JSON.stringify({
        query: `
          query GetAllData {
        getAllMaterial {
          slug
        }
        getAllIndustry {
          slug
        }
        getAllStyle {
          slug
        }
        getAllProduct {
          slug
        }
      }
        `,
        operationName: "GetAllData",
      }),
      cache: "force-cache",
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`Failed to fetch static params: ${res.status}`);
      return [];
    }

    const { data } = await res.json();

    const materials: CategoryItem[] = data?.getAllMaterial || [];
    const industries: CategoryItem[] = data?.getAllIndustry || [];
    const styles: CategoryItem[] = data?.getAllStyle || [];
    const products: CategoryItem[] = data?.getAllProduct || [];

    const allParams = [
      ...materials.map((item) => ({ slug: [item.slug] })),
      ...industries.map((item) => ({ slug: [item.slug] })),
      ...styles.map((item) => ({ slug: [item.slug] })),
      ...products.map((item) => ({ slug: [item.slug] })),
    ];

    return allParams;
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

async function getAllProducts(): Promise<ProductCardProps[]> {
  try {
    const apiUrl = getApiUrl();
    const res = await fetch(`${apiUrl}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-secret-key": process.env.API_SECRET_KEY!,
        "x-apollo-operation-name": "GetAllProduct",
      },
      body: JSON.stringify({
        query: `
      query GetAllProduct {
        getAllProduct {
          _id
          name
          slug
          h1Tag
          metaTitle
          metaDescription
          shortDescription
          description
          specification
          tags
          imageUrl
          materials { slug name }
          industry { slug name }
          styles { slug name }
        }
      }
    `,
        operationName: "GetAllProduct",
      }),
      cache: "force-cache",
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

    const { data } = await res.json();
    return data?.getAllProduct || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

async function getCategoryData(slug: string) {
  try {
    const apiUrl = getApiUrl();
    const typeRes = await fetch(`${apiUrl}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-secret-key": process.env.API_SECRET_KEY!,
        "x-apollo-operation-name": "GetAllSlugsData",
      },
      body: JSON.stringify({
        query: `
          query GetAllSlugsData($slug: String!) {
            getMaterialBySlug(slug: $slug) { 
              _id
              name 
              description 
              bannerImage 
            }
            getIndustryBySlug(slug: $slug) { 
              _id
              name 
              description 
              bannerImage 
            }
            getStyleBySlug(slug: $slug) { 
              _id
              name 
              description 
              bannerImage 
            }
          }
        `,
        variables: { slug },
        operationName: "GetAllSlugsData",
      }),
      cache: "force-cache",
    });

    if (!typeRes.ok) {
      throw new Error(`Failed to fetch category data: ${typeRes.status}`);
    }

    const { data } = await typeRes.json();

    return (
      data?.getMaterialBySlug ||
      data?.getIndustryBySlug ||
      data?.getStyleBySlug ||
      null
    );
  } catch (error) {
    console.error("Error fetching category data:", error);
    return null;
  }
}

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

const Page = async ({ params }: PageProps) => {
  try {
    const { slug } = await params;
    const slugString = slug?.[0] || "";

    if (!slugString) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <h1>Page not found</h1>
        </div>
      );
    }

    const allProducts = await getAllProducts();

    const product = allProducts.find((p) => p.slug === slugString);

    if (product) {
      return <ProductPage product={product} allProducts={allProducts} />;
    } else {
      return <CategoryPage slug={slugString} allProducts={allProducts} />;
    }
  } catch (error) {
    console.error("Error in page component:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1>Error loading page</h1>
      </div>
    );
  }
};

// Product Page Component
const ProductPage = ({
  product,
  allProducts,
}: {
  product: ProductCardProps;
  allProducts: ProductCardProps[];
}) => {
  return (
    <div className="flex flex-col w-full space-y-8 mb-20">
      {/* Product Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-white py-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Product Images */}
            <div className="">
              <ImageGallery images={product.imageUrl} />
            </div>

            {/* Product Info */}
            <div className="order-1 lg:order-2">
              <div className="flex flex-col space-y-4 md:space-y-6 sticky top-6">
                <h1 className="font-bold text-2xl md:text-4xl text-gray-900 leading-tight">
                  {product.h1Tag || product.name}
                </h1>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {product.shortDescription ||
                    "High-quality packaging solution designed for your needs."}
                </p>
                <div className="border-gray-200">
                  <MiniRequestQuote />
                </div>

                {/* Tags */}
                {/* {product.tags && product.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {product.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Description & Specification Section */}
        <div className="flex flex-col space-y-8 md:space-y-20 w-full">
          {/* Description */}
          {product.description && (
            <section className="flex flex-col space-y-6 w-full ">
              <Titles title="Description" />
              <PagesSEOContent content={product.description} />
            </section>
          )}

          {/* Specification */}
          {product.specification && (
            <section className="flex flex-col space-y-6">
              <Titles title="Specification" />
              <PagesSEOContent content={product.specification} />
            </section>
          )}
        </div>

      {/* Packaging Tabs Section */}
      <section className="py-6">
          <PackagingTabs />
      </section>

      {/* Related Products Section */}
      {allProducts.filter((p) => p._id !== product._id).length > 0 && (
        <section className="py-12 flex flex-col space-y-8 md:space-y-12">
          <Titles
            title="Related Products"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus laborum quo architecto illo quod?"
          />
          <Container>
            <div className="flex justify-center">
              <div className="w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                  {allProducts
                    .filter((p) => p._id !== product._id)
                    .slice(0, 5)
                    .map((relatedProduct) => (
                      <ProductCard
                        key={relatedProduct._id}
                        data={relatedProduct}
                      />
                    ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}
    </div>
  );
};

// Category Page Component
const CategoryPage = async ({
  slug,
  allProducts,
}: {
  slug: string;
  allProducts: ProductCardProps[];
}) => {
  const categoryData = await getCategoryData(slug);

  const filteredProducts = allProducts.filter(
    (product) =>
      product.industry?.slug === slug ||
      product.materials?.some((m) => m.slug === slug) ||
      product.styles?.some((s) => s.slug === slug)
  );

  return (
    <div className="">
      <AllPagesBanner
        // title={categoryData?.name || "Products"}
        // description={categoryData?.description}
        imageUrl={categoryData?.bannerImage}
      />

      <Container>
        <div className="w-full">
          <div className="flex flex-col justify-center items-center w-full my-10">
            {categoryData?.name && (
              <h1 className="text-xl md:text-4xl font-bold">
                {categoryData?.name || "Products"}
              </h1>
            )}
          </div>
          <div className=" w-full flex flex-col md:space-y-24 space-y-16 mb-20 ">
            <div className="w-full">
              {filteredProducts.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product._id} data={product} />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-lg font-medium text-gray-900">
                    No products found
                  </h3>
                  <p className="text-gray-500 mt-2 max-w-md mx-auto">
                    There are no products matching this category. Please check
                    back later or browse our other categories.
                  </p>
                </div>
              )}
            </div>
            <QuoteSection />
            <PagesSEOContent content={categoryData?.content}/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
