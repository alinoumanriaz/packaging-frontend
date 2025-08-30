import Container from "@/components/Container";
import ImageGallery from "@/components/ImageGallery";
import MiniRequestQuote from "@/components/MiniRequestQuote";
import PackagingTabs from "@/components/PackagingTabs";
import ProductCard from "@/components/ProductCard";
import Titles from "@/components/Titles";
import React from "react";
import Markdown from "react-markdown";

async function getAllProducts() {
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
            h1Tag
            metaTitle
            metaDescription
            shortDescription
            description
            specification
            tags
            imageUrl
          }
        }
      `,
    }),
    next: { revalidate: 60 }, // ✅ ISR every 60s
  });

  const { data } = await res.json();
  return data?.getAllProduct || [];
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p: any) => ({
    slug: p.slug,
  }));
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const products = await getAllProducts();
  const product = products.find((p: any) => p.slug === slug);

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Product not found
      </div>
    );

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
                <div className=" border-gray-200">
                  <MiniRequestQuote />
                </div>

                <p className="text-sm text-gray-600 leading-relaxed px-4">
                  {product.shortDescription ||
                    "High-quality packaging solution designed for your needs."}
                </p>

                {/* Tags */}
                {product.tags && product.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {product.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Description & Specification Section */}
      <Container>
        <div className="flex flex-col space-y-8 md:space-y-20 w-full max-w-4xl mx-auto px-4">
          {/* Description */}
          <section className="flex flex-col space-y-6">
            <Titles title="Description" />
            <div className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-900 prose-strong:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-800">
              <Markdown>{product.description}</Markdown>
            </div>
          </section>

          {/* Specification */}
          <section className="flex flex-col space-y-6">
            <Titles title="Specification" />
            <div className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-900 prose-strong:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-800">
              <Markdown>{product.specification}</Markdown>
            </div>
          </section>
        </div>
      </Container>

      {/* Packaging Tabs Section */}
      <section className="bg-gray-50">
        <Container>
          <PackagingTabs />
        </Container>
      </section>
      <section className="bg-gray-50 py-8">
              <Titles title="Related Products" />
        <Container>
          <div className="flex justify-center">
            <div className="w-[90%] py-4 h-full flex flex-col space-y-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {products
                  .filter((p: any) => p.slug !== slug)
                  .map((relatedProduct: any) => (
                    <ProductCard key={relatedProduct._id} data={relatedProduct} />
                  ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Page;
