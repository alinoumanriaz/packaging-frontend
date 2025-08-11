import Image from 'next/image'
import React from 'react'

const ProductCard = () => {
    return (
        <div className='w-full'>
            <Image
                className='rounded-md w-[32rem] max-h-[32rem]'
                src={'/moe.png'}
                alt='image'
                width={300}
                height={60}
            />
            <div className='p-2'>
                <h3 className='font-bold text-md'>product anem</h3>
                <div className='text-gray-600'>categornae</div>
            </div>
        </div>
    )
}

export default ProductCard
