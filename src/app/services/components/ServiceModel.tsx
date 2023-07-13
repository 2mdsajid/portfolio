'use client'

import { BACKEND } from '@/lib/utils/Constants'
import { ParsedHtml } from '@/lib/utils/Functions'
import { BiX } from 'react-icons/bi'
import { Alert, AlertColor } from '@mui/material'
import React, { FormEvent, useState } from 'react'

const ServiceModel = ({ modelContent }: { modelContent: string }) => {
    const [showModel, setShowModel] = useState(false)

    // for alert and progress
    const [alertseverity, setalertSeverity] = useState<AlertColor>('success');
    const [alertmessage, setalertMessage] = useState<string>('successfully generated');
    const [showalert, setshowAlert] = useState<boolean>(false)
    const [showprogress, setshowProgress] = useState<boolean>(false)


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [description, setDescription] = useState('')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setshowProgress(true)
        // Reset the form fields after submission

        try {
            const response = await fetch(BACKEND + '/getworkrequests', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    phonenumber: phoneNumber,
                    description
                }),
            });

            const data = await response.json()
            setshowAlert(true)
            setalertMessage(data.message)
            setshowProgress(false)

            if (data.status === 201) {
                setalertSeverity('success')
            } else {
                setalertSeverity('warning')
            }

            setTimeout(() => {
                setshowAlert(false)
            }, 2000);

        } catch (error) {
            console.error('Error saving note:', error);
            // setalertMessage(error?.message)
        }


        setName('');
        setEmail('');
        setPhoneNumber('');
        setDescription('')
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
            <button onClick={toggleModel} className="flex items-center justify-center w-max py-2 px-4 text-white bg-accent2 hover:bg-accent3 rounded-lg font-semibold transition-colors duration-300">
                Proceed
            </button>


            {/* model */}
            {showModel && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 backdrop-blur z-50 ">

                    <div className='absolute w-full flex top-5 justify-center '>
                        {showalert && <div className="my-1"><Alert severity={alertseverity} onClose={() => { setshowAlert(false) }}>{alertmessage}</Alert></div>}
                    </div>

                    <div className='w-[95%] mx-auto sm:w-max h-max border p-4 flex flex-col rounded-md  shadow-md dark:border-secondarybg '>
                        <div className='w-full h-fit flex justify-end'>
                            <button className="p-2 " onClick={toggleModel}>
                                <BiX size={40} />
                            </button>
                        </div>

                        <div className='w-full text-color1 dark:text-dark-color1'>
                            {ParsedHtml(modelContent)}
                        </div>

                        <div className="mt-4">
                            <form onSubmit={handleSubmit} className=''>
                                <div className="mb-2">
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder='Name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="border bg-transparent dark:border-primarybg bg-transparent dark:border-primarybg  rounded px-3 py-2 mt-1 w-full focus:outline-none focus:border-blue-500"
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
                                        className="border bg-transparent dark:border-primarybg  rounded px-3 py-2 mt-1 w-full focus:outline-none focus:border-blue-500"
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
                                        className="border bg-transparent dark:border-primarybg  rounded px-3 py-2 mt-1 w-full focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div className="mb-2">
                                    <textarea
                                        id="description"
                                        placeholder='Describe your desired website in short'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                        className="border bg-transparent dark:border-primarybg  rounded px-3 py-2 mt-1 w-full focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="flex items-center justify-center w-max py-2 px-4 text-white bg-accent2 hover:bg-accent3 rounded-lg font-semibold transition-colors duration-300"
                                >
                                    {showprogress ? 'Submitting' : 'Submit'}
                                </button>
                            </form></div>
                    </div>
                </div >
            )}
        </>
    )
}

export default ServiceModel
