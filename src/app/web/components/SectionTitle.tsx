import React from 'react';

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <div className='mt-16'>
            <p className='text-center text-2xl lg:text-4xl xl:text-5xl font-bold mb-4'>
                <span className='bg-gradient-to-r from-color1 to-color2 text-transparent bg-clip-text capitalize'>
                    {title}
                </span>
            </p>
            <div className='h-1 w-1/4 mx-auto bg-color2'></div>
        </div>
    );
};

export default SectionTitle;
