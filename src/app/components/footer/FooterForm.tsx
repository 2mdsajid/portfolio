'use client'

import { BACKEND } from '@/lib/utils/Constants';
import { Alert, AlertColor } from '@mui/material';
import React, { FormEvent, useState } from 'react'


const FooterForm = () => {

    // for alert and progress
    const [alertseverity, setalertSeverity] = useState<AlertColor>('success');
    const [alertmessage, setalertMessage] = useState<string>('successfully generated');
    const [showalert, setshowAlert] = useState<boolean>(false)
    const [showprogress, setshowProgress] = useState<boolean>(false)

    const [message, setMessage] = useState('')
    
    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setshowProgress(true)
        try {
            const response = await fetch(BACKEND + '/sendanonymous', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message
                }),
            });
            const data = await response.json()
            setshowAlert(true)
            setalertMessage(data.message)
            setshowProgress(false)
            if (data.status === 201) {
                setalertSeverity('success')
                setMessage('')
            } else {
                setalertSeverity('warning')
            }
            setTimeout(() => {
                setshowAlert(false)
            }, 2000);
        } catch (error) {
            console.error('Error saving note:', error);
        }
    };

    return (
        <form onSubmit={submitForm} className='flex flex-col justify-center w-full mt-3'>
            {showalert && <div className="my-1"><Alert severity={alertseverity} onClose={() => { setshowAlert(false) }}>{alertmessage}</Alert></div>}
            <h1 className='text-xl font-semibold my-2 capitalize'>send me an anonymous message </h1>
            <div className='flex space-x-2 '>
                <div className='relative'>
                    <input
                        required
                        value={message}
                        onChange={(e) => setMessage(e.currentTarget.value)}
                        type="text"
                        placeholder='Send Anonymous'
                        className="peer h-10 bg-primarybg dark:bg-transparent border pl-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md"
                    />
                    <label htmlFor="message" className="absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-gray-900  px-1 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-color1  peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-gray-900 peer-focus:px-1 peer-focus:text-xs">Msg</label>
                </div>
                <button type='submit' className='flex items-center justify-center w-max py-2 px-4 text-white bg-accent2 hover:bg-accent3 rounded-lg font-semibold transition-colors duration-300'>{showprogress ? 'sending' : 'Send'}</button>
            </div>
        </form>
    )
}

export default FooterForm
