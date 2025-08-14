import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Container from '../Container'
import Titles from '../Titles'

const CategoryList = () => {
  const categories = [
    {
      imageUrl: '/home/featuredBoxes/bakery-boxes.webp',
      name: 'Bakery Boxes',
      href: '/categories/bakery-boxes'
    },
    {
      imageUrl: '/home/featuredBoxes/candle-boxes.webp',
      name: 'Candle Boxes',
      href: '/categories/candle-boxes'
    },
    {
      imageUrl: '/home/featuredBoxes/candy-boxes.webp',
      name: 'Candy Boxes',
      href: '/categories/candy-boxes'
    },
    {
      imageUrl: '/home/featuredBoxes/chocolate-Boxes.webp',
      name: 'Chocolate Boxes',
      href: '/categories/chocolate-boxes'
    },
    {
      imageUrl: '/home/featuredBoxes/christmas-boxes.webp',
      name: 'Christmas Boxes',
      href: '/categories/christmas-boxes'
    },
    {
      imageUrl: '/home/featuredBoxes/Cosmetic-Boxes.webp',
      name: 'Cosmetic Boxes',
      href: '/categories/cosmetic-boxes'
    },
    {
      imageUrl: '/home/featuredBoxes/food-boxes.webp',
      name: 'Food Boxes',
      href: '/categories/food-boxes'
    },
    {
      imageUrl: '/home/featuredBoxes/gable-boxes.webp',
      name: 'Gable Boxes',
      href: '/categories/gable-boxes'
    },
    {
      imageUrl: '/home/featuredBoxes/gift-boxes.webp',
      name: 'Gift Boxes',
      href: '/categories/gift-boxes'
    },
    {
      imageUrl: '/home/featuredBoxes/kraft-boxes.webp',
      name: 'Kraft Boxes',
      href: '/categories/kraft-boxes'
    },
    {
      imageUrl: '/home/featuredBoxes/mylar-bags.webp',
      name: 'Mylar Bags',
      href: '/categories/mylar-bags'
    },
    {
      imageUrl: '/home/featuredBoxes/paper-coffee-kraft-bags.webp',
      name: 'Coffee Bags',
      href: '/categories/coffee-bags'
    },
    {
      imageUrl: '/home/featuredBoxes/pillow-boxes.webp',
      name: 'Pillow Boxes',
      href: '/categories/pillow-boxes'
    },
    {
      imageUrl: '/home/featuredBoxes/rigid-boxes.webp',
      name: 'Rigid Boxes',
      href: '/categories/rigid-boxes'
    },
    {
      imageUrl: '/home/featuredBoxes/rigid-sleeve-and-tray-boxes.webp',
      name: 'Sleeve Tray Boxes',
      href: '/categories/sleeve-tray-boxes'
    },
    {
      imageUrl: '/home/featuredBoxes/soap-boxes.webp',
      name: 'Soap Boxes',
      href: '/categories/soap-boxes'
    },
    {
      imageUrl: '/home/featuredBoxes/tea-packaging.webp',
      name: 'Tea Boxes',
      href: '/categories/tea-boxes'
    },
    {
      imageUrl: '/home/featuredBoxes/tin-boxes.webp',
      name: 'Tin Boxes',
      href: '/categories/tin-boxes'
    },
    {
      imageUrl: '/home/featuredBoxes/tuck-boxes.webp',
      name: 'Tuck Boxes',
      href: '/categories/tuck-boxes'
    },
    {
      imageUrl: '/home/featuredBoxes/window-box.webp',
      name: 'Window Boxes',
      href: '/categories/window-boxes'
    },
  ]

  return (
    <Container>
      <div className="flex w-full flex-col items-center space-y-8 md:space-y-12">
        <Titles
          title="In stock or customized. 100% ecological"
          subtitle="Make your brand stand out with our personalized packaging solutions"
          
        />
        
        <div className="w-full ">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {categories.map((category, idx) => (
              <Link 
                key={idx} 
                href={category.href}
                className="group text-center flex flex-col space-y-3 transition-transform hover:scale-[1.02]"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-md">
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </div>
                <h3 className="font-semibold text-sm md:text-base capitalize transition-colors group-hover:text-green-600">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/categories"
          className="inline-block px-6 py-2 border border-gray-700 rounded-md font-medium text-sm md:text-base transition-colors hover:bg-gray-100 hover:border-gray-800"
        >
          View All Categories
        </Link>
      </div>
    </Container>
  )
}

export default CategoryList