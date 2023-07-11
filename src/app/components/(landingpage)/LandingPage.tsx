import React from 'react'
import Image from 'next/image'
import TypewriterC from '../reused/TypewriterC'
import Link from 'next/link'
import { FiGift } from 'react-icons/fi'
import SocialMediaLinks from '../reused/SocialMedia'
import ChatBot from '../chatbot/ChatBot'

//                 <div className='text-2xl text-color3 font-bold'><TypewriterC texts={['doctor','programmer','physicist']}/></div>

const LandingPage = () => {
    return (
        <div className='w-full h-full '>

            {/* intro text */}
            <div className='static md:absolute right-0 pt-3 md:pt-10 md:px-10 lg:px-40 xl:px-[25rem]  md:top-32'>
                <div className='z-10 flex flex-col items-center text-xl md:text-2xl lg:text-3xl '>
                    <p className='text-gradient'>Hey welcome to</p>
                    <p className='text-5xl md:text-6xl font-bold text-gradient mb-10'>SAJID-VERSE</p>
                    <div className='text-2xl md:text-3xl lg:text-4xl text-color2 font-bold'>
                        <TypewriterC texts={['CODING.', 'ADVENTURE.', 'GAMING.']} />
                    </div>
                </div>
            </div>


            {/* <p className='mt-20'>( now just scroll )</p> */}
            <div className='text-xl lg:text-2xl xl:text-3xl flex items-center justify-center space-x-4 my-5 md:my-10 md:absolute md:bottom-20 md:right-0  md:px-10 lg:px-40 xl:px-[25rem]'>
                <p> Here is something </p>
                <Link href='/services'>
                    <button className='flex items-center justify-center w-full py-2 px-4 text-white bg-accent2 hover:bg-accent3 rounded-lg font-semibold transition-colors duration-300'>
                        <FiGift className='mr-2' />
                        For You
                    </button>
                </Link>
            </div>



            {/* intro image */}
            <div className=' absolute bottom-0 z-10'>
                <Image className='' alt='landing-page-image' src='/icons/i1.png' height={400} width={400} />
            </div>

            <div className='fixed bottom-0 left-2 lg:left-10'>
                <SocialMediaLinks />
            </div>

            <div className=''>
                <ChatBot />
            </div>

        </div>

    )
}

export default LandingPage
