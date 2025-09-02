import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Titles from '../Titles';
import Container from '../Container';


export interface IFeaturedSectionData {
  name: string;
  slug: string;
  iconName: string;
  imageUrl?: string;
  bannerImage?: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface MaterialBoxesSectionProps {
  featuredData: IFeaturedSectionData[];
  title?: string;
  subTitle?: string;
}

const FeaturedBoxesSections = ({featuredData, title, subTitle}: MaterialBoxesSectionProps) => {
  return (
    <Container>
      <div className="flex flex-col items-center space-y-8 md:space-y-12">
        <Titles
          title={title}
          subtitle={subTitle}
        />

        <div className="">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {featuredData.map((item: IFeaturedSectionData, idx: number) => (
              <Link
                key={idx}
                href={`/${item.slug}`}
                className="group text-center flex flex-col space-y-3 transition-transform hover:scale-[1.02]"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-md">
                  <Image
                    src={item.imageUrl || "/moe.png"}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="object-cover transition-transform group-hover:scale-105 w-full h-full"
                    // sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    loading="eager" 
                  />
                </div>
                <h3 className="font-semibold text-sm md:text-base capitalize transition-colors group-hover:text-primary-800">
                  {item.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default FeaturedBoxesSections
