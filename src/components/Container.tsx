import React from 'react'

const Container = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <section className='w-full flex justify-center items-center'>
            <div className='max-w-[1280px] w-full px-4 flex justify-center items-center'>
                {children}
            </div>
        </section>
    )
}

export default Container
