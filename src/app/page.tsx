import CurvedArrow from '@/components/CurvedArrow';
import Link from 'next/link';
import React from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import { MdScreenSearchDesktop } from 'react-icons/md';

const Page = () => {
  return (
    <div className='min-h-screen w-screen bg-gray-800 text-white overflow-hidden'>
      <div className="flex flex-col items-center justify-center h-full">
        {/* Intro text */}
        <p className="text-xl font-bold mb-4">Hey Fella, welcome to my website</p>

        {/* Options */}
        <div className="flex flex-col">
          {/* Option 1 */}
          <div className="flex flex-col items-center mb-10">
            {/* SVG Arrow & Icon */}
            <div className="flex  flex-col items-center  relative -left-10 top-32">
              <p className="text-lg font-semibold mb-2 w-[75%] sm:w-full ">Choose this if you are not a web developer</p>
              <div className="relative -left-16 top-0 transform scale-y-[-1] rotate-30 text-white">
                <CurvedArrow width="200" height="400" />
              </div>
            </div>

            <Link href={"/web"} className='z-10'>
              <MdScreenSearchDesktop size={90} />
            </Link>

          </div>

          {/* Option 2 */}
          <div className="flex flex-col items-center">
            <Link href={"/terminal"} className='z-10'>
              <BsCodeSlash size={90} />
            </Link>
            <div className="flex flex-col items-center relative -right-10 bottom-32">
              <div className=" transform scale-x-[-1] rotate-30 relative -right-14 ">
                <CurvedArrow width="200" height="400" />
              </div>
              <p className="text-lg text-right font-semibold mb-2 w-[75%] sm:w-full right-0">Choose this if you are a web developer</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;
