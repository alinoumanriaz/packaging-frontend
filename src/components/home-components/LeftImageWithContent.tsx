import Image from 'next/image';
import React from 'react'

interface Props {
    image: string;
    heading: string;
    description: string;
}

const LeftImageWithContent = ({ content }: { content: Props }) => {
    return (
        <section className='flex flex-col justify-center items-center w-full '>
            <div className='w-[90%] h-full flex flex-col justify-between items-center '>
                <div className='grid grid-cols-2 gap-2.5 w-full'>
                    <Image
                        className='w-full h-80 rounded-2xl'
                        src={content.image}
                        alt={content.heading}
                        width={400}
                        height={400}
                    />
                    <div className='space-y-6 p-6'>
                        <div className='text-5xl font-semibold'>{content.heading}</div>
                        <p>{content.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeftImageWithContent
