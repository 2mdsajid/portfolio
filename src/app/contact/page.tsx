import Link from 'next/link'
import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import ContactForm from './components/ContactForm'
import Header from '../components/header/Header'
import WhatsAppLink from './components/WhatsAppLink'

const page = () => {
    return (
        <div className='min-h-screen w-screen  bg-primarybg text-white pt-20'>
            {/* <Header /> */}
            <div className='w-full h-full flex flex-col md:flex-row items-center md:justify-around  px-4 md:px-10 lg:px-40 xl:px-44 py-5'>
                <div className='w-[90%] sm:w-[70%] md:w-[45%] flex flex-col items-start justify-center'>
                    <div className=''>
                        <h1 className='text-5xl font-semibold'>Hey There<br />Lets get Connected !</h1>
                        <div className='my-5'>
                            <WhatsAppLink />
                        </div>
                        <p className='text-xl mt-10 mb-5'>Follow me</p>
                    </div>
                    <div className="flex space-x-3 lg:space-x-4 items-start">
                        <Link href="https://twitter.com">
                            <span className=" text-white font-bold py-1 rounded">
                                <FaTwitter size={24} />
                            </span>
                        </Link>
                        <Link href="https://facebook.com">
                            <span className=" text-white font-bold py-1 rounded">
                                <FaFacebook size={24} />
                            </span>
                        </Link>
                        <Link href="https://instagram.com">
                            <span className=" text-white font-bold py-1 rounded">
                                <FaInstagram size={24} />
                            </span>
                        </Link>
                        <Link href="https://github.com">
                            <span className=" text-white font-bold py-1 rounded">
                                <FaGithub size={24} />
                            </span>
                        </Link>
                        <Link href="https://linkedin.com">
                            <span className=" text-white font-bold py-1 rounded">
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
        </div>
    )
}

export default page