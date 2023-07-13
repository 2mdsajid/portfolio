import Link from 'next/link'
import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import ContactForm from './components/ContactForm'
import Header from '../components/header/Header'
import WhatsAppLink from './components/WhatsAppLink'
import KeyLayouut from '../components/reused/KeyLayouut'

const page = () => {
    return (
        <KeyLayouut>
            <div className='w-full h-max flex flex-col md:flex-row items-center  md:items-start md:justify-around pt-10'>
                <div className='w-[90%] sm:w-[70%] md:w-[45%] flex flex-col  items-start h-max pb-5 justify-between'>
                    <div className=''>
                        <h1 className='text-5xl font-semibold'>Hey There<br />Lets get Connected !</h1>
                        <div className='my-5'>
                            {/* addresss */}
                            <div className=" my-3">
                                <p className='mb-1 text-xl font-semibold text-accent2'>Cosmic Address</p>
                                <address className="text-lg leading-relaxed">
                                    <p>Earth, Milky Way Galaxy,</p>
                                    <p>Virgo Supercluster, Observable Universe</p>
                                </address>
                            </div>
                            <div className=" my-3">
                                <p className='mb-1 text-xl font-semibold text-accent2'>Local Address</p>
                                <address className="text-lg leading-relaxed">
                                    <p>27.34.48.153</p>
                                    <p className='text-xs'>(This is my IP address HAHA)</p>
                                </address>
                            </div>
                        </div>
                        <p className='text-xl mt-10 mb-5'>Follow me</p>
                    </div>
                    <div className="flex space-x-3 lg:space-x-4 items-start">
                        <Link target='_blank' href="https://twitter.com/c0mrad1_">
                            <span className=" text-color1 dark:text-dark-color1 font-bold py-1 rounded">
                                <FaTwitter size={24} />
                            </span>
                        </Link>
                        <Link target='_blank' href="https://www.facebook.com/c0mrad1/">
                            <span className=" text-color1 dark:text-dark-color1 font-bold py-1 rounded">
                                <FaFacebook size={24} />
                            </span>
                        </Link>
                        <Link target='_blank' href="https://www.instagram.com/c0mrad1/">
                            <span className=" text-color1 dark:text-dark-color1 font-bold py-1 rounded">
                                <FaInstagram size={24} />
                            </span>
                        </Link>
                        <Link target='_blank' href="https://github.com/2mdsajid">
                            <span className=" text-color1 dark:text-dark-color1 font-bold py-1 rounded">
                                <FaGithub size={24} />
                            </span>
                        </Link>
                        <Link target='_blank' href="https://www.linkedin.com/in/c0mrad1/">
                            <span className=" text-color1 dark:text-dark-color1 font-bold py-1 rounded">
                                <FaLinkedin size={24} />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='md:hidden h-1 w-[90%] my-10 bg-slate-600'></div>
                <div className='w-[90%] sm:w-[70%] md:w-[40%] mb-10'>
                    <ContactForm />
                </div>
            </div>
        </KeyLayouut>

    )
}

export default page
