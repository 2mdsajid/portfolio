import React from 'react'
import Image from 'next/image'

const TechStacks = () => {
    return (
        <div className='w-full h-full'>
            <div className="flex space-x-2 space-y-2 justify-center items-center w-full">
                <p className='border px-2 py-1 rounded-md'>React</p>
                {/* <Image 
        src={'/stacks/react.png'}
        height={100}
        width={100}
        alt='react'
        className='w-20'
        /> */}
            </div>
            <div className="flex space-x-2 space-y-2 justify-center items-center w-full">

                <p className='border px-2 py-1 rounded-md'>Node JS</p>
                <p className='border px-2 py-1 rounded-md'>Pandas</p>
                {/* <Image 
        src={'/stacks/nodejs.png'}
        height={100}
        width={100}
        alt='react'
        className='w-20'
        />
         <Image 
        src={'/stacks/tailwindcss.png'}
        height={100}
        width={100}
        alt='react'
        className='w-20'
    /> */}
            </div>
            <div className="flex space-x-2 space-y-2 justify-center items-center w-full">
                <p className='border px-2 py-1 rounded-md'>HTML</p>
                <p className='border px-2 py-1 rounded-md'>CSS</p>
                <p className='border px-2 py-1 rounded-md'>Python</p>
            </div>
            <div className="flex space-x-2 space-y-2 justify-center items-center w-full">
                <p className='border px-2 py-1 rounded-md'>JavaScript</p>
                <p className='border px-2 py-1 rounded-md'>Mongo DB</p>
                {/* <p className='border px-2 py-1 rounded-md'>Matplotlib</p> */}
    <p className='border px-2 py-1 rounded-md'>Tailwind CSS</p>

            </div>
        </div>
    )
}

export default TechStacks
