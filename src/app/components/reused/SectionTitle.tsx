import React from 'react';

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <div className='mt-16'>
            <p className='text-center text-lg md:text-xl lg:text-3xl font-semibold mb-4'>
                <span className='bg-gradient-to-r from-color1 to-color2 text-transparent bg-clip-text capitalize'>
                    {title}
                </span>
            </p>
            <div className='h-[0.1rem] w-1/4 md:w-[20%] lg:w-[15%] xl:w-[5%] mx-auto bg-color2'></div>
{/* 
            <div className='flex items-center justify-center space-x-3'>
                <div className='h-[0.1rem] w-20 bg-color2'></div>
                <div>
                    <p className='text-md sm:text-lg md:text-xl lg:text-3xl '>{title}</p>
                </div>
                <div className='h-[0.1rem] w-20 bg-color2'></div>
            </div> */}
        </div>
    );
};

export default SectionTitle;
