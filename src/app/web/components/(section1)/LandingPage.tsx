import React from 'react'
import Image from 'next/image'
import TypewriterC from './TypewriterC'
import Link from 'next/link'
import { FiGift } from 'react-icons/fi'

//                 <div className='text-2xl text-color3 font-bold'><TypewriterC texts={['doctor','programmer','physicist']}/></div>

const LandingPage = () => {
    return (
        <div className='w-full h-full pt-20 px-4 md:px-10 lg:px-40 xl:px-44'>

            {/* intro text */}
            <div className='static md:absolute right-0 pt-10 md:px-10 lg:px-40 xl:px-[25rem] top-32'>
                <div className='z-10 flex flex-col  items-center text-xl md:text-2xl lg:text-3xl '>
                    <p className='text-gradient'>Hey welcome to</p>
                    <p className='text-5xl md:text-6xl font-bold text-gradient mb-10'>SAJID-VERSE</p>

                    {/* <p className='text-xl md:text-2xl lg:text-3xl'>I am <span className='text-xs'>not a</span></p> */}
                    <div className='text-2xl md:text-3xl lg:text-4xl text-color2 font-bold mt-10'>
                        <TypewriterC texts={['CODING.', 'ADVENTURE.', 'GAMING.']} />
                    </div>

                </div>
            </div>


            {/* <p className='mt-20'>( now just scroll )</p> */}
            <div className='text-xl lg:text-2xl xl:text-3xl flex items-center justify-center space-x-4 my-10 md:absolute md:bottom-20 md:right-0  md:px-10 lg:px-40 xl:px-[25rem]'>
                <p> Here is something </p>
                <Link href='/contact'>
                    <button className='text-xl lg:text-2xl xl:text-3xl flex items-center justify-center w-full py-2 px-4 text-black bg-white hover:bg-gray-800 hover:border-white border hover:text-white border-white transition-colors duration-300'>
                        <FiGift className='mr-2' />
                        For You
                    </button>
                </Link>
            </div>



            {/* intro image */}
            <div className=' absolute bottom-0 z-10'>
                <Image className='' alt='landing-page-image' src='/icons/i1.png' height={400} width={400} />
            </div>

        </div>

    )
}

export default LandingPage
