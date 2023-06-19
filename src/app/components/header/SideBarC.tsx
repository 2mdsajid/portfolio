'use client'

import { SwipeableDrawer } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react'

import { FiUsers, FiBook, FiBriefcase, FiMail } from 'react-icons/fi';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiMenu, FiX } from 'react-icons/fi';
import { CgMenuMotion } from 'react-icons/cg';
import TerminalButton from '../terminal/TerminalButton';


const SideBarC = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isNavSelected, setIsNavSelected] = useState<string | undefined>('')

    const openNav = () => setIsNavOpen(true)
    const closeNav = () => setIsNavOpen(false)


    const setSelectedNav = (nav: string) => {
        setIsNavSelected(nav)
    }



    return (
        <div className='block sm:hidden'>
            <div className='flex space-x-2'>

            <TerminalButton />
            <div onClick={openNav}>
                {isNavOpen ? (
                    <AiOutlineMenu className="text-white text-4xl transition-transform duration-300 transform -rotate-45" />
                    ) : (
                        <AiOutlineMenu className="text-white text-4xl transition-transform duration-300 transform " />
                        )}
            </div>
                        </div>
            <div className=' border-red-600 lg:hidden '>
                <SwipeableDrawer
                    anchor="left"
                    open={isNavOpen}
                    onClose={closeNav}
                    onOpen={openNav}
                    className='lg:hidden'>
                    <div className='w-[75vw] sm:w-[65vw] md:w-[50vw] flex flex-col space-y-5 px-5 pt-20 text-xl bg-gradient-to-b from-color6 via-color3 to-color4 h-full'>
                        <div className='flex flex-col space-y-2'>
                            <Link href='friends.sajidaalam.com.np' className='flex items-center text-white'>
                                <FiUsers className='mr-2' />
                                Friends
                            </Link>
                            <Link href='blogs.sajidaalam.com.np' className='flex items-center text-white'>
                                <FiBook className='mr-2' />
                                Blogs
                            </Link>
                            <Link href='/services' className='flex items-center text-white'>
                                <FiBriefcase className='mr-2' />
                                Services
                            </Link>
                            <Link href='/contact' className='flex items-center text-white'>
                                <FiMail className='mr-2' />
                                Contact
                            </Link>
                        </div>
                        <div>
                            <Link href='/contact'>
                                <button className='flex items-center justify-center w-full py-2 text-black bg-white hover:bg-gray-800 hover:border-white border hover:text-white border-white transition-colors duration-300'>
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>
                </SwipeableDrawer>
            </div>

        </div>
    )
}

export default SideBarC
