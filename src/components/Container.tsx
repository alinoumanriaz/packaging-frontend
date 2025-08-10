import React from 'react'

const Container = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <section className='w-full flex justify-center items-center'>
            <div className='w-[95%] flex justify-center items-center'>
                {children}
            </div>
        </section>
    )
}

export default Container
