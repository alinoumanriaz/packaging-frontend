import React from 'react'

type SidebarContainersProps  = {
    heading: string;
    children: React.ReactNode;
}

const SidebarContainers = ({heading, children}: SidebarContainersProps) => {
    return (
        <div className='flex flex-col space-y-2 py-8'>
            <div className='text-lg font-bold'>{heading}</div>
            <div className='text-gray-600'>
                {children}
            </div>
        </div>
    )
}

export default SidebarContainers
