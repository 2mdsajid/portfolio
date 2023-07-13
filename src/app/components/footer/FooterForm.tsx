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
        // Reset the form fields after submission

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
            // setalertMessage(error?.message)
        }

    };





    return (
        <form onSubmit={submitForm} className='flex flex-col justify-center w-full mt-3'>
                                {showalert && <div className="my-1"><Alert severity={alertseverity} onClose={() => { setshowAlert(false) }}>{alertmessage}</Alert></div>}
            <h1 className='text-xl font-semibold my-1 capitalize'>send anonymous message </h1>
            <div className='flex space-x-2 '>
                <input required value={message} onChange={(e) => setMessage(e.currentTarget.value)} className='px-3 py-2 rounded-md' type="text" placeholder='Send Anonymous' />
                <button type='submit' className='flex items-center justify-center w-max py-2 px-4 text-white bg-accent2 hover:bg-accent3 rounded-lg font-semibold transition-colors duration-300'>{showprogress ? 'sending' : 'Send'}</button>
            </div>
        </form>
    )
}

export default FooterForm
