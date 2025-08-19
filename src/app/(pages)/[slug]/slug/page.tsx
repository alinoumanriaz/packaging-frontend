import Container from "@/components/Container";
import FeaturedBoxesSections from "@/components/home-components/FeaturedBoxesSections";
import MiniRequestQuote from "@/components/MiniRequestQuote";
import PackagingTabs from "@/components/PackagingTabs";
import Titles from "@/components/Titles";
import Image from "next/image";
import React from "react";

const page = async() => {
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
            <Titles title="Product Description" />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dicta aut a id tempora quod veritatis commodi obcaecati rerum beatae cupiditate vel maxime officiis unde nemo minima exercitationem voluptates officia, saepe perspiciatis nostrum hic adipisci aperiam rem? Recusandae itaque consectetur, delectus dolor magnam vitae quo illum rerum corrupti provident maiores dolorem et magni adipisci cum, enim rem sed, inventore placeat velit modi deserunt corporis sequi. Cum quibusdam, molestiae itaque blanditiis sint velit voluptatem inventore eius quaerat omnis dolorum? Tempore voluptatem excepturi error porro? Alias placeat veniam ipsam fugiat quis in repudiandae, ipsum nesciunt unde optio culpa quos odit suscipit debitis beatae sunt. Quaerat tempora dolorum, cumque atque quo mollitia pariatur et, veritatis excepturi molestias unde, vero dolorem! Delectus odio itaque at consectetur amet, est dolor fugit optio accusamus eum, facilis, quos dolores enim nulla officiis! Fugit expedita laudantium commodi suscipit nostrum dolore deserunt dolorem veniam magnam eum consequuntur iste quisquam, blanditiis quidem autem, fuga dolorum eligendi? Omnis beatae magnam atque nulla iste voluptatibus optio tempora, quidem minus voluptates necessitatibus dolores veniam nobis doloremque quae deleniti nam suscipit doloribus provident neque vitae quo corporis. Vero molestiae voluptas doloribus reiciendis sapiente mollitia ipsam iure. A sed aut officiis maxime nam omnis tempora, id repellat. Dicta laudantium dolor praesentium aliquid nostrum blanditiis, at numquam magnam, nisi optio deserunt ex, amet minus provident libero nobis sunt porro recusandae! Veritatis corporis nulla, fuga, ipsam iste nobis suscipit facere deserunt, aliquam quis velit ullam quisquam possimus temporibus at quaerat harum ipsa quae. Quia ipsa, animi perspiciatis vitae obcaecati repellendus hic repudiandae corporis odit illo aliquam, sequi laboriosam voluptatum reiciendis error fugiat quibusdam? Ipsa sunt, corporis, ea voluptate aut quidem facilis quo magnam, dolor ipsum nostrum voluptates. Error quas quae unde ex officiis repudiandae sit temporibus sapiente vel praesentium! Numquam similique maiores asperiores dolorum dolore quis! Voluptates?
              </p>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <Titles title="Product Specification" />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dicta aut a id tempora quod veritatis commodi obcaecati rerum beatae cupiditate vel maxime officiis unde nemo minima exercitationem voluptates officia, saepe perspiciatis nostrum hic adipisci aperiam rem? Recusandae itaque consectetur, delectus dolor magnam vitae quo illum rerum corrupti provident maiores dolorem et magni adipisci cum, enim rem sed, inventore placeat velit modi deserunt corporis sequi. Cum quibusdam, molestiae itaque blanditiis sint velit voluptatem inventore eius quaerat omnis dolorum? Tempore voluptatem excepturi error porro? Alias placeat veniam ipsam fugiat quis in repudiandae, ipsum nesciunt unde optio culpa quos odit suscipit debitis beatae sunt. Quaerat tempora dolorum, cumque atque quo mollitia pariatur et, veritatis excepturi molestias unde, vero dolorem! Delectus odio itaque at consectetur amet, est dolor fugit optio accusamus eum, facilis, quos dolores enim nulla officiis! Fugit expedita laudantium commodi suscipit nostrum dolore deserunt dolorem veniam magnam eum consequuntur iste quisquam, blanditiis quidem autem, fuga dolorum eligendi? Omnis beatae magnam atque nulla iste voluptatibus optio tempora, quidem minus voluptates necessitatibus dolores veniam nobis doloremque quae deleniti nam suscipit doloribus provident neque vitae quo corporis. Vero molestiae voluptas doloribus reiciendis sapiente mollitia ipsam iure. A sed aut officiis maxime nam omnis tempora, id repellat. Dicta laudantium dolor praesentium aliquid nostrum blanditiis, at numquam magnam, nisi optio deserunt ex, amet minus provident libero nobis sunt porro recusandae! Veritatis corporis nulla, fuga, ipsam iste nobis suscipit facere deserunt, aliquam quis velit ullam quisquam possimus temporibus at quaerat harum ipsa quae. Quia ipsa, animi perspiciatis vitae obcaecati repellendus hic repudiandae corporis odit illo aliquam, sequi laboriosam voluptatum reiciendis error fugiat quibusdam? Ipsa sunt, corporis, ea voluptate aut quidem facilis quo magnam, dolor ipsum nostrum voluptates. Error quas quae unde ex officiis repudiandae sit temporibus sapiente vel praesentium! Numquam similique maiores asperiores dolorum dolore quis! Voluptates?
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
