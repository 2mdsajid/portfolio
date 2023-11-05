'use client'

import React from 'react'
import { Event } from '@/lib/utils/Types';
import Image from 'next/image';

const YouTimeline = ({events}:{events: Event[]}) => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear()
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    // Get the day, month name, and year
    const dayString = day.toString();
    const monthString = monthNames[month];
    const yearString = year.toString();


    const animationtype = 'zoom-in'
    return (
        <div
            className={`flex ${events.length % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center font-xs justify-center `}>
            <div data-aos={animationtype} className={`w-[45%] flex items-center ${events.length % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="w-[40%] xl:w-[30%]">
                    <div className="sm:p-2 sm:pl-0 rounded-full ">
                        <Image
                            height={200}
                            width={200}
                            src={`/timeline/finger.jpg`}
                            alt=""
                            className="max-h-full max-w-full rounded-full"
                        />
                    </div>
                </div>
                <div className="w-[60%] xl:w-[70%] text-center">
                    <div className="font-bold ">{monthString}</div>
                    <div className="h-1 bg-accent2 w-full"></div>
                    <div className="">{dayString}</div>
                </div>
            </div>

            {/* midline */}
            <div className="w-max flex flex-col items-center">
                <div className='w-1 bg-accent2 h-[5rem]'></div>
                <div className="rounded-full flex items-center justify-center border shadow-md border-accent2">
                    <p className="absolute text-xs font-bold ">{yearString}</p>
                    <Image
                        height={200}
                        width={200}
                        src={`/timeline/unk.jpg`}
                        alt=""
                        className="w-10 h-10 rounded-full bg-black opacity-0 border border-accent2"
                    />
                </div>
                <div className='w-1 bg-accent2 h-[5rem]'></div>
            </div>
            {/* bg-gradient-to-b from-gray-900 via-primarybg to-primarybg */}
            <div data-aos={animationtype} className="w-[45%] p-1">
                <div className="shadow-md dark:border rounded-lg p-[0.6rem] px-2">
                    <h2 className=" font-bold mb-2 text-center title text-xs lg:text-md py-1" >{'You'}</h2>
                    <p className=" text-center desc text-xs lg:text-sm" >{'Yes you. you are reading this now. I guess the timeline was interestig coz you scrolled up to the last haha..'}</p>
                </div>
            </div>
        </div>
    )
}

export default YouTimeline
