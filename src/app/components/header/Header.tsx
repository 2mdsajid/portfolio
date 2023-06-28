
import Link from 'next/link'
import React, { useState } from 'react'

import { SwipeableDrawer } from '@mui/material';
import SideBarC from './SideBarC';
import { FiMail } from 'react-icons/fi';

import { FiUsers, FiBook, FiBriefcase } from 'react-icons/fi';
import TerminalButton from '../terminal/TerminalButton';
import ChatBot from '../chatbot/ChatBot';


const Header = () => {


  return (
    <div className='w-full h-20 fixed top-0 z-50 border-b border-gray-900 '>
      <div className='w-full h-full absolute backdrop-blur-sm'></div>
      <div className='w-full h-full absolute  flex items-center justify-between px-4 md:px-10 lg:px-40 xl:px-44'>
        <div className='text-white font-bold'>SAJID</div>

        {/* hidden in small devices */}
        <div className='space-x-4 hidden sm:block'>
          <Link href='/friends' className='text-white'>Friends</Link>
          <Link href='/blogs' className='text-white'>Blogs</Link>
          <Link href='/services' className='text-white'>Services</Link>
          <Link href='/contact' className='text-white'>Contact</Link>
        </div>


        <div className='hidden sm:block '>
          <TerminalButton />
        </div>

        {/* visible in small devices ---client component */}
        <SideBarC />



      </div>
    </div>
  )
}

export default Header
