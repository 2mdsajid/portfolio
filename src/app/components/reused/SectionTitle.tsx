import React from 'react';

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <div className='mt-16'>
            <p className='text-center text-lg md:text-xl lg:text-3xl font-semibold mb-4'>
                <span className='text capitalize'>
                    {title}
                </span>
            </p>
            <div className='h-[0.1rem] w-1/4 md:w-[20%] lg:w-[15%] xl:w-[5%] bg-color1 dark:bg-dark-color1 mx-auto'></div>

        </div>
    );
};

export default SectionTitle;
