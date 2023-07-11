
import Link from 'next/link'
import React, { useState } from 'react'

import { SwipeableDrawer } from '@mui/material';
import SideBarC from './SideBarC';
import { FiMail } from 'react-icons/fi';

import { FiUsers, FiBook, FiBriefcase } from 'react-icons/fi';
import TerminalButton from '../terminal/TerminalButton';
import ChatBot from '../chatbot/ChatBot';
import ThemeSwitcher from '../reused/ThemeSwitcher';


const Header = () => {
  return (
    <div className='w-full h-20 fixed top-0 z-50   '>
      <div className='w-full h-full absolute backdrop-blur-sm '></div>
      <div className='w-full h-full absolute border-b border-color1 dark:border-dark-color1 flex items-center justify-between px-4 md:px-10 lg:px-20 xl:px-32'>
        <div className='text-color1 dark:text-dark-color1 font-bold cursor-pointer lg:text-2xl text-xl'>SAJID</div>

        {/* hidden in small devices */}
        <div className='space-x-4 hidden sm:block text-xl font-semibold lg:text-2xl'>
          <Link href='/friends' className='navLink text-color1 dark:text-dark-color3 '>Friends</Link>
          <Link href='/blogs' className='navLink text-color1 dark:text-dark-color3 '>Blogs</Link>
          <Link href='/services' className='navLink text-color1 dark:text-dark-color3 '>Services</Link>
          <Link href='/contact' className='navLink text-color1 dark:text-dark-color3 '>Contact</Link>
        </div>


        <div className='hidden sm:block '>
          <div className='flex space-x-2'>
            <ThemeSwitcher />
            <TerminalButton />
          </div>
        </div>

        {/* visible in small devices ---client component */}
        <SideBarC />



      </div>
    </div>
  )
}

export default Header
