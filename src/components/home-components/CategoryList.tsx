import Image from 'next/image'
import React from 'react'
import Container from '../Container'
import Titles from '../Titles'

const CategoryList = () => {
    return (
        <Container>
            <div className='flex flex-col justify-center items-center space-y-10'>
                <Titles
                title='In stock or customized. 100% ecological'
                subtitle='make your trend stand out with our personolized packging solution'
                 />
                <div className='grid grid-cols-4 gap-x-4 gap-y-6'>
                    {
                        [...Array(8)].map((_, idx) => (
                            <div key={idx} className='text-center flex flex-col space-y-2 '>
                                <Image className='rounded-xl' src={'/moe.png'} alt='' width={280} height={300} />
                                <div className='font-bold'>Shopping Bag</div>
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
