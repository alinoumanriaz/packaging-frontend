import Image from 'next/image'
import React from 'react'
import Container from '../Container'
import Titles from '../Titles'

const CategoryList = () => {

    const data =[
        {
            imageUrl:'/home/featuredBoxes/bakery-boxes.webp',
            name:'Bakery Boxes',
            href:''
        },
        {
            imageUrl:'/home/featuredBoxes/candle-boxes.webp',
            name:'Candle Boxes',
            href:''
        },
        {
            imageUrl:'/home/featuredBoxes/candy-boxes.webp',
            name:'Candy Boxes',
            href:''
        },
        {
            imageUrl:'/home/featuredBoxes/chocolate-Boxes.webp',
            name:'Chocolate Boxes',
            href:''
        },
        {
            imageUrl:'/home/featuredBoxes/christmas-boxes.webp',
            name:'Christmas Boxes',
            href:''
        },
        {
            imageUrl:'/home/featuredBoxes/Cosmetic-Boxes.webp',
            name:'Cosmetic Boxes',
            href:''
        },
        {
            imageUrl:'/home/featuredBoxes/food-boxes.webp',
            name:'Food Boxes',
            href:''
        },
        {
            imageUrl:'/home/featuredBoxes/gable-boxes.webp',
            name:'Gable Boxes',
            href:''
        },
        {
            imageUrl:'/home/featuredBoxes/gift-boxes.webp',
            name:'Gift Boxes',
            href:''
        },
        {
            imageUrl:'/home/featuredBoxes/kraft-boxes.webp',
            name:'Kraft Boxes',
            href:''
        },
        {
            imageUrl:'/home/featuredBoxes/mylar-bags.webp',
            name:'Mylar Boxes',
            href:''
        },
        {
            imageUrl:'/home/featuredBoxes/paper-coffee-kraft-bags.webp',
            name:'Coffee Bags',
            href:''
        },
        {
            imageUrl:'/home/featuredBoxes/pillow-boxes.webp',
            name:'Pillow Boxes',
            href:''
        },
        {
            imageUrl:'/home/featuredBoxes/rigid-boxes.webp',
            name:'Rigid Boxes',
            href:''
        },
        {
            imageUrl:'/home/featuredBoxes/rigid-sleeve-and-tray-boxes.webp',
            name:'Sleeve Tray Boxes',
            href:''
        },
        {
            imageUrl:'/home/featuredBoxes/soap-boxes.webp',
            name:'Soap Boxes',
            href:''
        },
        {
            imageUrl:'/home/featuredBoxes/tea-packaging.webp',
            name:'Tea Boxes',
            href:''
        },
        {
            imageUrl:'/home/featuredBoxes/tin-boxes.webp',
            name:'Tin Boxes',
            href:''
        },
        {
            imageUrl:'/home/featuredBoxes/tuck-boxes.webp',
            name:'Tuck Boxes',
            href:''
        },
        {
            imageUrl:'/home/featuredBoxes/window-box.webp',
            name:'Window Boxes',
            href:''
        },
    ]
    return (
        <Container>
            <div className='flex flex-col justify-center items-center space-y-10'>
                <Titles
                title='In stock or customized. 100% ecological'
                subtitle='make your trend stand out with our personolized packging solution'
                 />
                <div className='grid grid-cols-4 gap-x-4 gap-y-10'>
                    {
                        data.map((data, idx) => (
                            <div key={idx} className='text-center flex flex-col space-y-2 '>
                                <Image className='rounded-xl' src={data.imageUrl} alt='' width={280} height={300} />
                                <div className='font-bold capitalize '>{data.name}</div>
                            </div>
                        ))
                    }
                </div>
                <div className='py-1 px-4 ring-1 ring-gray-700 rounded-md'>View All</div>
            </div>
        </Container>
    )
}

export default CategoryList
