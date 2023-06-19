import { Event } from '@/lib/utils/Types';
import React from 'react';

import Image from 'next/image';
import AnimatedButton from './AnimatedMoreButton';

const EventTimeline = ({ events }: { events: Event[] }) => {
    return (
        <div className="w-full sm:w-[75%] md:w-[65%] lg:[55%] xl:w-[50%] mx-auto font-xs px-2">
            {/* birth  */}
            <div className='w-[30%] lg:w-[25%] mt-10 m-auto'>
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
                        <div className="w-[40%] ">
                            <div className="rounded-full flex items-center justify-center">
                                <Image
                                    height={200}
                                    width={200}
                                    src={`/timeline/${event.src ? event.src : 'unk'}.jpg`}
                                    alt=""
                                    className="max-h-full max-w-full rounded-full"
                                />
                            </div>
                        </div>
                        <div className="w-[60%] text-center">
                            <div className="font-bold ">{event.mon}</div>
                            <div className="h-1 bg-gray-400 w-full"></div>
                            <div className="">{event.day}</div>
                        </div>
                    </div>

                    {/* midline */}
                    <div className="w-[10%] flex flex-col items-center">
                        <div className='w-1.5 bg-white h-16'></div>
                        <div className="rounded-full flex items-center justify-center border shadow-md border-blue-700">
                            <p className="absolute text-xs font-bold text-white ">{event.yr}</p>
                            <Image
                                height={200}
                                width={200}
                                src={`/timeline/unk.jpg`}
                                alt=""
                                className="max-h-full max-w-full rounded-full bg-black opacity-0 border border-blue-700"
                            />
                        </div>
                        <div className='w-1.5 bg-white h-16'></div>
                    </div>

                    <div className="w-[45%] p-1">
                        <div className="bg-gray-900  rounded-lg p-[0.6rem] px-2">
                            <h2 className=" font-bold mb-2 text-center title" style={{ 'fontSize': '0.8rem' }}>{event.title}</h2>
                            <p className="text-white text-center desc" style={{ 'fontSize': '0.65rem' }}>{event.desc}</p>
                        </div>
                    </div>
                </div>
            ))}


            {/* bottom dash */}
            <div className="w-full flex flex-col items-center justify-center space-y-3">
                <div className='w-1.5 bg-white h-2'></div>
                <div className='w-1.5 bg-white h-2'></div>
                <div className='w-1.5 bg-white h-2'></div>
                <div className='w-1.5 bg-white h-2'></div>
                <div className='w-1.5 bg-white h-2'></div>
                {/* <div className='w-1.5 bg-white h-2'></div>
                <div className='w-1.5 bg-white h-2'></div> */}
            </div>

            {/* button for more */}
            <div className='w-full flex justify-center mt-5'>
                <AnimatedButton />
            </div>
        </div>
    );
};

export default EventTimeline;