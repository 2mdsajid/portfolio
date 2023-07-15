'use client'

import DialogBox from '@/app/components/reused/DialogBox'
import { BACKEND } from '@/lib/utils/Constants'
import { Alert, AlertColor } from '@mui/material'
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import { BiX } from 'react-icons/bi'

const MessageDialog = ({ children,string }: { children: React.ReactNode,string:string }) => {
    const [showDialog, setShowDialog] = useState(false)

    const [alertseverity, setalertSeverity] = useState<AlertColor>('success');
    const [alertmessage, setalertMessage] = useState<string>('successfully generated');
    const [showalert, setshowAlert] = useState<boolean>(false)
    const [showprogress, setshowProgress] = useState<boolean>(false)


    const [name, setName] = useState('');
    const [opinion, setOpinion] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setshowProgress(true)
        // Reset the form fields after submission
        try {
            const response = await fetch(BACKEND + '/friendrequest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    opinion,
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

    };

    const toggleDialog = () => {
        setShowDialog(!showDialog)
    }

    return (
        <>
            {showDialog ?
                <DialogBox>
                    <div className='w-[95%] md:w-[60%] lg:w-[50%] xl:w-[45%] mx-auto border p-2 py-4 md:p-5 rounded-md relative bg-white dark:bg-transparent dark:backdrop-blur '>
                        <button className="absolute top-0 right-0 p-2 text-color3 hover:text-gray-500 text-2xl " onClick={toggleDialog}>
                            <BiX />
                        </button>
                        <form onSubmit={handleSubmit} className="text-gray-400 relative ">
                            <div className='absolute w-full top-0 flex  '>
                                {showalert && <div className="my-1"><Alert severity={alertseverity} onClose={() => { setshowAlert(false) }}>{alertmessage}</Alert></div>}
                            </div>
                            <div className="my-4 relative">
                                <input
                                    type="name"
                                    id="name"
                                    placeholder="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    autoComplete='off'
                                    className="peer h-10 w-full bg-primarybg dark:bg-transparent border pl-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md"
                                />
                                <label htmlFor="email" className="absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-transparent  px-1 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-color1  peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-transparent peer-focus:px-1  peer-focus:text-xs">Name</label>
                            </div>
                            <div className="my-4 relative">
                                <textarea
                                    id="opinion"
                                    placeholder="What do you think about this site?"
                                    value={opinion}
                                    onChange={(e) => setOpinion(e.target.value)}
                                    autoComplete='off'
                                    className="peer h-28 w-full bg-primarybg dark:bg-transparent border pl-3 pt-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md"
                                ></textarea>
                                <label htmlFor="opinion" className="absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-transparent  px-1 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-color1 peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-transparent peer-focus:px-1  peer-focus:text-xs">Hi Text?</label>
                            </div>
                            <button
                                type="submit"
                                className="flex items-center justify-center w-max py-2 px-4 text-white bg-accent2 hover:bg-accent3 rounded-lg font-semibold transition-colors duration-300">
                                {showprogress ? 'Submitting' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </DialogBox> :
                <div>
                    {children}
                    <p className='text-center mb-2 -mt-1'> ( {string} <span onClick={toggleDialog} className='text-blue-500 underline cursor-pointer capitalize' >send me a Hi</span> )</p>
                </div>
            }
        </>
    )
}

export default MessageDialog
