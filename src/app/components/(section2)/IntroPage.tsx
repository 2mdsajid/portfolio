import TypewriterC from '@/app/components/TypewriterC'
import Image from 'next/image'
import Link from 'next/link'
import router from 'next/navigation'
import React from 'react'

const IntroPage = () => {
    return (
        <div className='w-full h-full px-4 md:px-10 lg:px-40 xl:px-44 my-20'>
            <div className='w-full h-full flex flex-col-reverse sm:flex-row items-center justify-center md:justify-between sm:items-start'>

                <div className="w-full  md:w-max lg:w-1/2 lg:pr-10 md:pr-8 sm:pr-6">
                    <h1 className='text-red-600 mb-4 text-lg'>Hi, Im Sajid Aalam</h1>
                    {/* <p className='text-xl md:text-2xl lg:text-3xl'>I am <span className='text-xs'>not a</span></p> */}
                    <div className='text-lg md:text-xl w-full font-bold my-3'>
                        <div className='flex space-x-2 w-full'>
                            <p>Im not yet a</p>
                            <div className='text-color2'>
                                <TypewriterC texts={['DOCTOR.', 'PHYSICIST.', 'PROGRAMMER.']} />
                            </div>
                        </div>
                    </div>

                    {/* about me */}
                    <p className='lg:text-lg mb-4'>Greetings, fellow! I'm a 21-year-old MBBS student hailing from the amazing land of Nepal. When I'm not saving lives or buried in books, you'll find me coding like a wizard, conquering virtual realms through gaming, or exploring the great outdoors while trekking. Learning new things and making fantastic friends is my jam! Let's embark on this epic journey together!</p>
                    <Link href="/aboutme" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Know Me More
                    </Link>


                </div>
                <div className="w-fit mb-20 md:m-0">
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
