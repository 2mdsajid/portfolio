'use client'

import { ParsedHtml } from '@/lib/utils/Functions'
import { TypeProject } from '@/lib/utils/Types'
import React, { FormEvent, useState } from 'react'
import { BiExpand, BiX } from 'react-icons/bi'

const ServiceModel = ({ modelContent }: { modelContent: string }) => {
    const [showModel, setShowModel] = useState(false)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Reset the form fields after submission
        setName('');
        setEmail('');
        setPhoneNumber('');
    };

    const toggleModel = () => {
        setShowModel(!showModel)
        if (!showModel) {
            document.body.style.overflow = 'hidden' // Apply the CSS style to hide scrolling
        } else {
            document.body.style.overflow = '' // Reset the CSS style to restore scrolling
        }
    }

    return (
        <>
            <button onClick={toggleModel} className="w-max bg-color2 hover:bg-primarybg hover:border text-white font-bold py-2 px-4 rounded">
                Proceed
            </button>

            {/* model */}
            {showModel && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 backdrop-blur z-50">
                    <div className='w-[95%] mx-auto sm:w-max h-max bg-primarybg border p-4 flex flex-col'>
                        <div className='w-full h-fit flex justify-end'>
                            <button className="p-2 text-gray-500 hover:text-gray-700" onClick={toggleModel}>
                                <BiX size={40} />
                            </button>
                        </div>

                        <div className='w-full'>
                            {ParsedHtml(modelContent)}
                        </div>

                        <div className="mt-4">
                            <form onSubmit={handleSubmit} className='text-gray-400'>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder='Name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="border bg-primarybg border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder='Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="border bg-primarybg border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        placeholder='Phone Number'
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        required
                                        className="border bg-primarybg border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                                >
                                    Submit
                                </button>
                            </form></div>
                    </div>
                </div >
            )}
        </>
    )
}

export default ServiceModel
