import { Event } from '@/lib/utils/Types';
import React from 'react';

import Image from 'next/image';
import AnimatedButton from './AnimatedMoreButton';

const EventTimeline = ({ events, isHomePage }: { events: Event[], isHomePage: boolean }) => {
    return (
        <div className="w-full mx-auto font-xs px-4 md:px-10 lg:px-20 xl:px-32">
            {/* birth  */}
            <div className='w-32 h-32 mt-10 m-auto'>
                <div className="rounded-full flex items-center justify-center border shadow-md border-blue-700">
                    <p className="absolute text-md lg:text-lg font-bold text-white text-center">2002<br />DEC<br />25</p>
                    <Image
                        height={200}
                        width={200}
                        src={`/timeline/unk.jpg`}
                        alt=""
                        className="max-h-full max-w-full rounded-full bg-black opacity-0 border border-blue-700"
                    />
                </div>
            </div>

            {/* remaining */}
            {events.map((event, index) => (
                <div
                    key={index}
                    className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center font-xs justify-center `}>
                    <div className={`w-[45%] flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className="w-[40%] xl:w-[30%]">
                            <div className="sm:p-2 sm:pl-0 rounded-full ">
                                <Image
                                    height={200}
                                    width={200}
                                    src={`/timeline/${event.src ? event.src : 'unk'}.jpg`}
                                    alt=""
                                    className="max-h-full max-w-full rounded-full"
                                />
                            </div>
                        </div>
                        <div className="w-[60%] xl:w-[70%] text-center">
                            <div className="font-bold ">{event.mon}</div>
                            <div className="h-1 bg-gray-400 w-full"></div>
                            <div className="">{event.day}</div>
                        </div>
                    </div>

                    {/* midline */}
                    <div className="w-max flex flex-col items-center">
                        <div className='w-1 bg-blue-700 h-[5rem]'></div>
                        <div className="rounded-full flex items-center justify-center border shadow-md border-blue-700">
                            <p className="absolute text-xs font-bold text-white ">{event.yr}</p>
                            <Image
                                height={200}
                                width={200}
                                src={`/timeline/unk.jpg`}
                                alt=""
                                className="w-10 h-10 rounded-full bg-black opacity-0 border border-blue-700"
                            />
                        </div>
                        <div className='w-1 bg-blue-700 h-[5rem]'></div>
                    </div>
                    {/* bg-gradient-to-b from-gray-900 via-primarybg to-primarybg */}
                    <div className="w-[45%] p-1">
                        <div className="border rounded-lg p-[0.6rem] px-2">
                            <h2 className=" font-bold mb-2 text-center title text-xs lg:text-md py-1" >{event.title}</h2>
                            <p className="text-white text-center desc text-xs lg:text-sm" >{event.desc}</p>
                        </div>
                    </div>
                </div>
            ))}

            {isHomePage && <>            {/* bottom dash */}
                <div className="w-full flex flex-col items-center justify-center space-y-3">
                    <div className='w-1 bg-white h-2'></div>
                    <div className='w-1 bg-white h-2'></div>
                    <div className='w-1 bg-white h-2'></div>
                    <div className='w-1 bg-white h-2'></div>
                    <div className='w-1 bg-white h-2'></div>
                    {/* <div className='w-1 bg-white h-2'></div>
                <div className='w-1 bg-white h-2'></div> */}
                </div>

                {/* button for more */}
                <div className='w-full flex justify-center mt-5'>
                    <AnimatedButton />
                </div>
            </>}

            {!isHomePage &&
                <div className='w-full flex items-center justify-center my-10  '>
                    <p>more to go .... </p>
                </div>
            }

        </div>
    );
};

export default EventTimeline;
