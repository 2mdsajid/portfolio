import React from 'react'
import Image from 'next/image'

const TechJourney = () => {
    return (
        <div className='w-full h-full flex flex-wrap text-white mt-60 px-4 md:px-10 lg:px-40 xl:px-44'>

            <div className='w-1/3 flex flex-col items-center'>
                <div className='w-full'>
                    <Image
                        className='text-xs w-[60%] mx-auto text-center border rounded-md p-1'
                        src={'/blackboard.png'}
                        height={300}
                        width={400}
                        alt='board'
                    />
                </div>
                {/* <p className='text-xs w-[80%] text-center border rounded-md p-1'>If you suspect you have it is important to, such as a dermatologist, for an accurate diagnosis and appropriate treatment.</p> */}
                <div className='w-2 h-20 bg-gray-800'></div>
                <p className='w-full border py-3 text-center'>QBASIC</p>
            </div>

            <div className='w-1/3 flex flex-col items-center relative -top-[3rem]'>
                <div className='w-full'>
                    <Image
                        className='text-xs w-[60%] mx-auto text-center border rounded-md p-1'
                        src={'/blackboard.png'}
                        height={300}
                        width={400}
                        alt='board'
                    />
                </div>
                {/* <p className='text-xs w-[80%] text-center border rounded-md p-1'>If you suspect you have it is important to, such as a dermatologist, for an accurate diagnosis and appropriate treatment.</p> */}
                <div className='w-2 h-20 bg-gray-800'></div>
                <p className='w-full border py-3 text-center'>PYTHON</p>
            </div>

            <div className='w-1/3 flex flex-col items-center relative -top-[6rem]'>
                <div className='w-full'>
                    <Image
                        className='text-xs w-[60%] mx-auto text-center border rounded-md p-1'
                        src={'/blackboard.png'}
                        height={300}
                        width={400}
                        alt='board'
                    />
                </div>
                {/* <p className='text-xs w-[80%] text-center border rounded-md p-1'>If you suspect you have it is important to, such as a dermatologist, for an accurate diagnosis and appropriate treatment.</p> */}
                <div className='w-2 h-20 bg-gray-800'></div>
                <p className='w-full border py-3 text-center'>JAVASCRIPT</p>
            </div>

        </div>
    )
}

export default TechJourney




/* 

<div className="w-full  flex justify-end">
                <div className='w-1/3 h-full  flex flex-col items-center'>
                <div className=' relative w-full text-center '>
                        <div className='w-full flex flex-col items-center'>
                            <div className='absolute -top-40 flex flex-col items-center'>
                                <p className='text-xs w-[80%] text-center border rounded-md p-1'>If you suspect you have it is important to, such as a dermatologist, for an accurate diagnosis and appropriate treatment.</p>
                                <div className='w-2 h-20 bg-gray-800'></div>
                            </div>
                        </div>
                        <p className='w-full border py-3'>JAVASCRIPT</p>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className='w-1/3 h-full  flex flex-col items-center'>
                <div className=' relative w-full text-center '>
                        <div className='w-full flex flex-col items-center'>
                            <div className='absolute -top-40 flex flex-col items-center'>
                                <p className='text-xs w-[80%] text-center border rounded-md p-1'>If you suspect you have it is important to, such as a dermatologist, for an accurate diagnosis and appropriate treatment.</p>
                                <div className='w-2 h-20 bg-gray-800'>
                                </div>
                            </div>
                        </div>
                        <p className='w-full border py-3'>PYTHON</p>
                    </div>
                </div>
            </div>

            <div className="w-full ">
                <div className='w-1/3 h-full  flex flex-col items-center'>
                <div className=' relative w-full text-center '>
                        <div className='w-full flex flex-col items-center'>
                            <div className='absolute -top-40 flex flex-col items-center'>
                                <p className='text-xs w-[80%] text-center border rounded-md p-1'>If you suspect you have it is important to, such as a dermatologist, for an accurate diagnosis and appropriate treatment.</p>
                                <div className='w-2 h-20 bg-gray-800'>
                                </div>
                            </div>
                        </div>
                        <p className='w-full border py-3'>QBASIC</p>
                    </div>
                </div>
            </div>

*/