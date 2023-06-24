'use client'

import { BACKEND } from '@/lib/utils/Constants'
import { ParsedHtml } from '@/lib/utils/Functions'
import { TypeProject } from '@/lib/utils/Types'
import { Alert, AlertColor } from '@mui/material'
import React, { FormEvent, useState } from 'react'
import { BiExpand, BiX } from 'react-icons/bi'

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
            <button onClick={toggleModel} className="w-max bg-color2 hover:bg-primarybg hover:border text-white font-bold py-2 px-4 rounded">
                Proceed
            </button>


            {/* model */}
            {showModel && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 backdrop-blur z-50">

                    <div className='absolute w-full flex top-5 justify-center '>
                        {showalert && <div className="my-1"><Alert severity={alertseverity} onClose={() => { setshowAlert(false) }}>{alertmessage}</Alert></div>}
                    </div>

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
                                <div className="mb-2">
                                    <textarea
                                        id="description"
                                        placeholder='Describe your desired website in short'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                        className="border bg-primarybg border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
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
