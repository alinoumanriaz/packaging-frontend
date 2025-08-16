'use client'
import Container from '@/components/Container'
import RequestQuote from '@/components/RequestQuote'
import Titles from '@/components/Titles'
import Image from 'next/image'
import React from 'react'
import { BsBoxes } from 'react-icons/bs'

const page = () => {
    return (

        <div className='flex-col w-full space-y-12 mb-20'>
            <Container>
                <div className='grid grid-cols-2 my-12 h-full ' >
                    <div className='pr-8  h-full'>
                        <Image
                            className='rounded-2xl h-[550px] w-full sticky top-6'
                            src={'/moe.png'}
                            alt='product'
                            width={1100}
                            height={800}
                        />
                    </div>
                    <div>
                        <div className='flex flex-col space-y-3'>
                            <h1 className='font-semibold text-4xl'>Printed Color Postal Box</h1>
                            <p className='text-gray-600'>Sturdy cardboard box with a color printed brand. designed to make shipments from your ecommerce.</p>
                        </div>
                        <RequestQuote />

                    </div>
                </div>

            </Container>
            <Container>
                <div className='w-[90%]'>
                    <div className=' flex flex-col justify-center items-center space-y-14'>
                        <Titles
                            title='Product features'
                        />
                        <div className='grid grid-cols-3 gap-x-4 gap-y-6'>
                            {
                                [...Array(3)].map((_, idx) => (
                                    <div key={idx} className='flex flex-col space-y-2 '>
                                        <BsBoxes className='size-8' />
                                        <div className='font-bold'>Shopping Bag</div>
                                        <div className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                                    </div>
                                ))
                            }
                        </div>
                        
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default page
