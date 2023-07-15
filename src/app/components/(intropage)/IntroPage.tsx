import TypewriterC from '@/app/components/reused/TypewriterC'
import Image from 'next/image'
import Link from 'next/link'
import router from 'next/navigation'
import React from 'react'

const IntroPage = () => {
    return (
        <div className='w-full h-full mb-20 mt-5 px-4'>
            <div className='w-full h-full flex flex-col-reverse sm:flex-row items-center justify-center md:justify-between sm:items-start'>
                <div className="w-full px-4 md:w-max lg:w-1/2 lg:pr-10 md:pr-8 sm:pr-6 my-5">
                    {/* <p className='text-xl md:text-2xl lg:text-3xl'>I am <span className='text-xs'>not a</span></p> */}
                    <div className='w-full my-1'>
                        <p className='text-md'>so my name is [read my name from the header haha], </p>
                        <div className='flex space-x-2 w-full'>
                            <p>& I&apos;m not a</p>
                            <div className='text-dark-color2 font-bold text-lg'>
                                <TypewriterC texts={['DOCTOR.', 'PHYSICIST.', 'PROGRAMMER.']} />
                            </div>
                        </div>
                    </div>
                    {/* about me */}
                    <p className='lg:text-lg mb-4'>I&apos;m a 21-year-old <span className='text-dark-color2 font-semibold'>MBBS</span> student. When I&apos;m not saving lives or buried in books, you&apos;ll find me <span className='text-dark-color2 font-semibold'>coding</span> like a wizard, conquering virtual realms through <span className='text-dark-color2 font-semibold'>gaming</span>, or exploring the great outdoors while <span className='text-dark-color2 font-semibold'>trekking</span>.</p>
                    <Link href="/aboutme" className=" bg-accent2 hover:scale-125 hover:bg-accent3 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                        Know Me More
                    </Link>


                </div>
                <div className="w-fit">
                    <div className='w-[17rem] h-[17rem] lg:w-[20rem] lg:h-[20rem] relative'>
                        <div className='relative z-10 w-full'>
                            <Image src={'/intro.jpg'} alt='Intro Image' height={400} width={400} />
                        </div>
                        <div className='w-full h-full absolute top-3 right-3 z-0 bg-gray-500'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroPage
