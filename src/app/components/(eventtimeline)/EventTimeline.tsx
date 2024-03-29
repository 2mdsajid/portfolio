import { Event } from '@/lib/utils/Types';
import React from 'react';

import Image from 'next/image';
import AnimatedButton from './AnimatedMoreButton';
import { Balancer } from 'react-wrap-balancer';
import GoBackButton from '@/app/components/reused/GoBackButton';
import YouTimeline from './YouTimeline';

const EventTimeline = ({ events, isHomePage }: { events: Event[], isHomePage: boolean }) => {


    const animationtype = 'zoom-in'
    return (
        <div className="w-full mx-auto font-xs px-4 md:px-10 lg:px-20 xl:px-32 text-color1 dark:text-dark-color1">
            {/* birth  */}
            <h1 data-aos={animationtype} className=' text-center mx-auto my-6'>
                <Balancer>
                    not too long ago, in a galaxy that definitely wasn&apos;t far, far away, the christmas night, I .... ... !
                </Balancer>
            </h1>

            <div data-aos={animationtype} className='w-32 h-32 mt-10 m-auto'>
                <div className="rounded-full flex items-center justify-center border shadow-md border-accent2">
                    <p className="absolute text-md lg:text-lg font-bold text-center">2002<br />DEC<br />25</p>
                    <Image
                        height={200}
                        width={200}
                        src={`/timeline/unk.jpg`}
                        alt=""
                        className="max-h-full max-w-full rounded-full bg-black opacity-0 border border-accent2"
                    />
                </div>
            </div>

            {/* remaining */}
            {events.map((event, index) => (
                <div
                    key={index}
                    className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} items-center font-xs justify-center `}>
                    <div data-aos={animationtype} className={`w-[45%] flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
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
                            <div className="h-1 bg-accent2 w-full"></div>
                            <div className="">{event.day}</div>
                        </div>
                    </div>

                    {/* midline */}
                    <div className="w-max flex flex-col items-center">
                        <div className='w-1 bg-accent2 h-[5rem]'></div>
                        <div className="rounded-full flex items-center justify-center border shadow-md border-accent2">
                            <p className="absolute text-xs font-bold ">{event.yr}</p>
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
                            <h2 className=" font-bold mb-2 text-center title text-xs lg:text-md py-1" >{event.title}</h2>
                            <p className=" text-center desc text-xs lg:text-sm" >{event.desc}</p>
                        </div>
                    </div>
                </div>
            ))}

            {!isHomePage && <YouTimeline events={events} />}

            {isHomePage && <>            {/* bottom dash */}
                <div className="w-full flex flex-col items-center justify-center space-y-3">
                    <div className='w-1 bg-accent2 h-2'></div>
                    <div className='w-1 bg-accent2 h-2'></div>
                    <div className='w-1 bg-accent2 h-2'></div>
                    <div className='w-1 bg-accent2 h-2'></div>
                    <div className='w-1 bg-accent2 h-2'></div>
                    {/* <div className='w-1 bg-accent2 h-2'></div>
                <div className='w-1 bg-accent2 h-2'></div> */}
                </div>

                {/* button for more */}
                <div data-aos={animationtype} className='w-full flex justify-center mt-5 text-accent2'>
                    <AnimatedButton />
                </div>
            </>}

            {!isHomePage &&
                <div className='w-full flex flex-col space-y-3 items-center justify-center my-10  '>
                    <p className='text-center'>You have reached the end of the magnificent timeline. Congratulations! <br />But don&apos;t worry, the adventure doesn&apos;t end here. Stay tuned !! haha</p>
                    <GoBackButton />
                </div>
            }

        </div>
    );
};

export default EventTimeline;
