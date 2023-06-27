import React from 'react'
import Image from 'next/image'
import { TypeStacks } from '@/lib/utils/Types'
// src={`/stacks/${stack.image}.png`}
const TechJourney = ({ stack, keyprop, array }: { stack: TypeStacks, keyprop: number, array: TypeStacks[] }) => {
    return (
        <div key={keyprop} className='w-full h-full flex justify-center text-white md:px-10 lg:px-44 xl:px-52 '>
            <div className={`w-full border-black flex ${keyprop%2===0 && 'md:flex-row-reverse'} justify-end`}>
                <div className="work-detail-info f-c w-[70%] md:w-[45%] flex flex-col border-blue-900 items-start pb-4 ">
                    <div className="rounded shadow-md bg-primarybg border p-2">
                        <h1 className="font-bold text-3xl mb-4">{stack.name}</h1>
                        <p className="text-sm">{stack.desc}
                        </p>
                    </div>
                </div>
                <div className="w-[15%] md:w-[10%] flex flex-col items-center">
                    <i className="fas fa-briefcase border p-3 rounded-full shadow-md"></i>
                    <div className="w-1 h-full bg-blue-900"></div>
                </div>
                <div className="w-[5%] md:w-[45%] md:block"></div>
            </div>
        </div>
    )
}

export default TechJourney




/* 


<div className="w-full border-black flex flex-row-reverse md:flex-row">
                <div className="w-[5%] md:w-[45%] md:block"></div>
                <div className="w-[15%] md:w-[10%] flex flex-col items-center">
                    <i className="fas fa-briefcase border p-3 rounded-full shadow-md"></i>
                    <div className="w-1 h-full bg-blue-900"></div>
            </div>
            <div className="work-detail-info f-c w-[70%] md:w-[45%] flex flex-col border-blue-900 items-start pb-4">
                <div className="rounded shadow-md bg-blue-200 p-2">
                    <h1 className="font-bold text-3xl mb-4">SEDS-Nepal</h1>
                    <h3 className="text-lg text-blue-800 mb-2">Generall Member <span className="work-date text-sm">2022-2023</span>
                    </h3>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat..
                    </p>
                </div>
            </div>
        </div>
         
            <div className="w-[30%] sm:w-[20%] md:w-[15%] lg:w-[10%] flex flex-col items-center">
                <div className="rounded-full w-full flex items-center justify-center border shadow-md border-blue-700">
                    <Image
                        height={200}
                        width={200}
                        src={'/stacks/nodejs.png'}
                        alt=""
                        className="w-full rounded-full border border-blue-700"
                    />
                </div>
                <div className='w-1 bg-white h-20'>
                    {keyprop === array.length - 1 && <div className="flex flex-col items-center space-y-3 ">
                        <div className='w-1 bg-white h-2 mt-20'></div>
                        <div className='w-1 bg-white h-2'></div>
                        <div className='w-1 bg-white h-2'></div>
                        <div className='w-1 bg-white h-2'></div>
                        <div className='w-1 bg-white h-2'></div>
                    </div>}
                </div>
                {/* bottom dash 

            </div>

     
            <div className="w-[70%] text-center flex items-center relative -top-[2.9rem] sm:-top-[3.1rem] md:-top-[3.35] lg:-top-[3.6] xl:-top-[3.8]">
                <div className='w-[50%] '>
                    <div className=" ">
                        <p>{stack.date}</p>
                    </div>
                    <div className="h-1 bg-gray-400 w-full ">
                        <p>{stack.name}</p>
                    </div>
                    {/* <div className="">5</div> 
                </div>
                <div className='w-[50%] border rounded-md p-2 lg:p-4' >
                    <p className="text-white text-center desc text-xs sm:text-sm md:text-md ls:text-lg xl:text-ls">{stack.desc}</p>
                </div>
            </div>

       {keyprop===array.length-1 && <div className="flex flex-col items-center space-y-3 ">
                    <div className='w-1 bg-white h-2'></div>
                    <div className='w-1 bg-white h-2'></div>
                    <div className='w-1 bg-white h-2'></div>
                    <div className='w-1 bg-white h-2'></div>
                    <div className='w-1 bg-white h-2'></div>
                </div>}



            <div className='w-1/3 flex flex-col items-center'>
                <div className='w-full'>
                    <Image
                        className='text-xs w-[70%] md:w-[60%] mx-auto text-center border rounded-md p-1'
                        src={'/blackboard.png'}
                        height={300}
                        width={400}
                        alt='board'
                    />
                </div>
                {/* <p className='text-xs w-[80%] text-center border rounded-md p-1'>If you suspect you have it is important to, such as a dermatologist, for an accurate diagnosis and appropriate treatment.</p> 
                <div className='w-2 h-20 bg-gray-800'></div>
                <p className='w-full border py-3 text-center'>QBASIC</p>
            </div>

            <div className='w-1/3 flex flex-col items-center relative -top-[3rem]'>
                <div className='w-full'>
                    {/* <p className='text-xs w-[80%] text-center absolute  '>If you suspect you have it is important to, such as a dermatologist, for an accurate diagnosis and appropriate treatment.</p> 
                    <Image
                        className='text-xs w-[70%] md:w-[60%] mx-auto text-center border rounded-md p-1'
                        src={'/blackboard.png'}
                        height={300}
                        width={400}
                        alt='board'
                    />
                </div>
                <div className='w-2 h-20 bg-gray-800'></div>
                <p className='w-full border py-3 text-center'>PYTHON</p>
            </div>

            <div className='w-1/3 flex flex-col items-center relative -top-[6rem]'>
                <div className='w-full'>
                    <Image
                        className='text-xs w-[70%] md:w-[60%] mx-auto text-center border rounded-md p-1'
                        src={'/blackboard.png'}
                        height={300}
                        width={400}
                        alt='board'
                    />
                </div>
                {/* <p className='text-xs w-[80%] text-center border rounded-md p-1'>If you suspect you have it is important to, such as a dermatologist, for an accurate diagnosis and appropriate treatment.</p> 
                <div className='w-2 h-20 bg-gray-800'></div>
                <p className='w-full border py-3 text-center'>JAVASCRIPT</p>
            </div>


////////////////////////

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