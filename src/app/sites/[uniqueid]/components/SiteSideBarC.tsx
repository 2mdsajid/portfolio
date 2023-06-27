'use client'

import { TypeSchool, TypeWork } from '@/lib/utils/Types';
import { SwipeableDrawer } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react'

// import { FiUsers, FiBook, FiBriefcase, FiMail } from 'react-icons/fi';
import { AiOutlineMenu } from 'react-icons/ai';

import { Link as ScrollLink } from "react-scroll";


const SiteSideBarC = ({ works, schools }: { works: TypeWork[], schools: TypeSchool[] }) => {

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

                {/* <TerminalButton /> */}
                <div onClick={openNav}>
                    {isNavOpen ? (
                        <AiOutlineMenu className="text-black text-4xl transition-transform duration-300 transform -rotate-45" />
                    ) : (
                        <AiOutlineMenu className="text-black text-4xl transition-transform duration-300 transform " />
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
                    <div className='w-[75vw] sm:w-[65vw] md:w-[50vw] pl-10 flex flex-col space-y-5 px-5 pt-20 text-xl bg-blue-100 text-black'>
                        <ul
                            className="header-contents nav-hide list-hide font-semibold   w-full min-h-screen flex flex-col space-y-2">
                            <li onClick={closeNav}><a href="" className="active">HOME</a></li>
                            <li onClick={closeNav}><a href="#about">ABOUT</a></li>
                            {works.length > 0 && <li onClick={closeNav}><a href="#work">WORK</a></li>}
                            {schools.length > 0 && <li onClick={closeNav}><a href="#education">EDUCATION</a></li>}
                            <li onClick={closeNav}><a href="#contact">CONTACT</a></li>
                        </ul>
                    </div>
                </SwipeableDrawer>
            </div>

        </div>
    )
}

export default SiteSideBarC
