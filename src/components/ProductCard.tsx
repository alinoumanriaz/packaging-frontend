import Image from 'next/image'
import React from 'react'

export interface ProductCardProps {
    _id: string;
    name: string;
    slug: string;
    imageUrl: string[];
    material?: { slug: string };
    industry?: { slug: string };
    style?: { slug: string };
};

const ProductCard = ({ data }: { data: ProductCardProps }) => {
    return (
        <div className='w-full'>
            <Image
                className='rounded-md w-full aspect-square object-cover'
                src={data.imageUrl[0] || '/moe.png'}
                alt={data.name}
                width={300}
                height={300}
            />
            <div className='p-2'>
                <h3 className='font-bold text-md'>{data.name}</h3>
            </div>
        </div>
    )
}

export default ProductCard