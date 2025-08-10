import React from 'react'
import { BsBoxes } from 'react-icons/bs'
import Container from '../Container'
import Titles from '../Titles'

const Features = () => {
    return (
        <Container>
            <div className='w-[90%]'>
                <div className=' flex flex-col justify-center items-center space-y-14'>
                    <Titles
                        title='Why we are best in packaging industry'
                    />
                    <div className='grid grid-cols-4 gap-x-4 gap-y-6'>
                        {
                            [...Array(8)].map((_, idx) => (
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
    )
}

export default Features
