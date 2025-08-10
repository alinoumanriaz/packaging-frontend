import React from 'react'

interface titleProps {
    title: string;
    subtitle?: string;
}

const Titles = ({title,subtitle}: titleProps) => {
    return (
        <div className='text-center flex flex-col space-y-4'>
            <div className='text-5xl font-semibold '>{title}</div>
            <div className='text-gray-600'>{subtitle}</div>
        </div>
    )
}

export default Titles
