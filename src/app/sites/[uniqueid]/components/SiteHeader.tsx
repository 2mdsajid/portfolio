
import Link from 'next/link'
import React, { useState } from 'react'

import SideBarC from './SiteSideBarC';

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { TypeWork, TypeSchool } from '@/lib/utils/Types';


const SiteHeader = ({ username, works, schools }: { username: string, works: TypeWork[], schools: TypeSchool[] }) => {
  return (
    <div className='w-full h-[3rem] fixed top-0 z-50 border-b border-gray-900 '>
      <div className='w-full h-full absolute bg-blue-100 text-black flex items-center justify-between px-4 md:px-10 lg:px-40 xl:px-44'>
        <div className='text-3xl font-bold'>SAJID</div>
        {/* hidden in small devices */}
        <div className="space-x-4 hidden sm:block">
          <ul
            className="header-contents nav-hide list-hide font-semibold  absolute sm:static border-black bg-blue-100 top-[3rem] sm:top-0 w-screen h-screen sm:w-auto sm:h-auto left-0 sm:flex sm:space-x-2 md:space-x-4 lg:spaxe-x-8 sm:justify-end">
            <li><a href="" className="active">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            {works.length > 0 && <li><a href="#work">WORK</a></li>}
            {schools.length > 0 && <li><a href="#education">EDUCATION</a></li>}
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>

        {/* visible in small devices ---client component */}
        <SideBarC works={works} schools={schools} />

      </div>
    </div>
  )
}

export default SiteHeader
