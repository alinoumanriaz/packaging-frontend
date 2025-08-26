import Container from "@/components/Container";
import FeaturedBoxesSections from "@/components/home-components/FeaturedBoxesSections";
import MiniRequestQuote from "@/components/MiniRequestQuote";
import PackagingTabs from "@/components/PackagingTabs";
import Titles from "@/components/Titles";
import Image from "next/image";
import React from "react";

const page = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          getAllIndustry {
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
  //   console.log({ matdata: data });
  return (
    <div className="flex-col w-full space-y-12 mb-20">
      <Container>
        <div className="grid grid-cols-2 my-12 h-full ">
          <div className="pr-8 flex h-full space-x-4">
            <div className="flex flex-col space-y-4">
              <Image
                className="rounded-2xl h-[350px] w-full"
                src={"/moe.png"}
                alt="product"
                width={1100}
                height={800}
              />
              <Image
                className="rounded-2xl h-[350px] w-full"
                src={"/moe.png"}
                alt="product"
                width={1100}
                height={800}
              />
            </div>
            <div className="flex flex-col space-y-4">
              <Image
                className="rounded-2xl h-[350px] w-full"
                src={"/moe.png"}
                alt="product"
                width={1100}
                height={800}
              />
              <Image
                className="rounded-2xl h-[350px] w-full"
                src={"/moe.png"}
                alt="product"
                width={1100}
                height={800}
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col space-y-2 sticky top-6">
              <h1 className="font-semibold text-4xl">
                Printed Color Postal Box
              </h1>

              <MiniRequestQuote />
              <p className="text-gray-600">
                Sturdy cardboard box with a color printed brand. designed to
                make shipments from your ecommerce.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className="w-[90%] flex flex-col space-y-14">
          <div className=" flex flex-col justify-center items-center">
            <Titles title="Description" />
            <div>
              <p>
                Our Printed Color Postal Boxes are crafted from high-quality
                corrugated cardboard, offering maximum protection for your
                products during transit. With vibrant CMYK and Pantone printing
                options, your brand colors will pop, ensuring a memorable first
                impression. Available in custom sizes, these boxes are ideal for
                cosmetics, clothing, electronics, subscription boxes, and more.
              </p>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <Titles title="Specification" />
            <div>
              <p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-gray-600 text-sm text-left">
                  <div>
                    <p>
                      <span className="font-semibold">Material:</span> Kraft /
                      White Corrugated Board
                    </p>
                    <p>
                      <span className="font-semibold">Thickness:</span> 3mm –
                      5mm (Custom)
                    </p>
                    <p>
                      <span className="font-semibold">Printing:</span> CMYK /
                      Pantone / Digital
                    </p>
                    <p>
                      <span className="font-semibold">Coating:</span> Gloss,
                      Matte, Aqueous, UV
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-semibold">Closure:</span> Tuck-in /
                      Adhesive Strip
                    </p>
                    <p>
                      <span className="font-semibold">Eco-Friendly:</span> 100%
                      Recyclable
                    </p>
                    <p>
                      <span className="font-semibold">MOQ:</span> 100 Units
                    </p>
                    <p>
                      <span className="font-semibold">Lead Time:</span> 7 – 12
                      Business Days
                    </p>
                  </div>
                </div>
              </p>
            </div>
          </div>
        </div>
      </Container>
      <PackagingTabs />
      <Container>
        <FeaturedBoxesSections
          title={"Related Products"}
          subTitle="Discover custom packaging tailored for every industry — from cosmetics to apparel, electronics, gifts, and more."
          featuredData={AllIndustries}
        />
      </Container>
    </div>
  );
};

export default page;
