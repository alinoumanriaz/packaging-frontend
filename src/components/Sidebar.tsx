import React from 'react'
import SidebarContainers from './SidebarContainers'

const Sidebar = () => {
    return (
        <div className='w-[20%]  h-full border-gray-200  border-r-[1px]'>
            <SidebarContainers heading={'Category'}>
                <ul>
                    <li>boxes</li>
                    <li>boxes</li>
                    <li>boxes</li>
                    <li>boxes</li>
                    <li>boxes</li>
                    <li>boxes</li>
                </ul>
            </SidebarContainers>
        </div>
    )
}

export default Sidebar
