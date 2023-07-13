'use client'

import { BACKEND } from '@/lib/utils/Constants';
import { Alert, AlertColor } from '@mui/material';
import React, { FormEvent, useState } from 'react'

const ContactForm = () => {
    // for alert and progress
    const [alertseverity, setalertSeverity] = useState<AlertColor>('success');
    const [alertmessage, setalertMessage] = useState<string>('successfully generated');
    const [showalert, setshowAlert] = useState<boolean>(false)
    const [showprogress, setshowProgress] = useState<boolean>(false)


    const [rating, setRating] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [opinion, setOpinion] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setshowProgress(true)
        // Reset the form fields after submission

        try {
            const response = await fetch(BACKEND + '/addmessages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    opinion,
                    message,
                    rating
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
    return (
        <>
            <form onSubmit={handleSubmit} className="text-gray-400 relative">
                <div className='absolute w-full top-0 flex  '>
                    {showalert && <div className="my-1"><Alert severity={alertseverity} onClose={() => { setshowAlert(false) }}>{alertmessage}</Alert></div>}
                </div>
                <div className="my-4 relative">
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        autoComplete='off'
                    className="peer h-10 w-full bg-primarybg dark:bg-transparent border pl-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md"
                  />
                  <label htmlFor="name" className="absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-dark-primarybg  px-1 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-color1  peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-dark-primarybg peer-focus:px-1  peer-focus:text-xs">Name</label>
                </div>
                <div className="my-4 relative">
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete='off'
                    className="peer h-10 w-full bg-primarybg dark:bg-transparent border pl-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md"
                  />
                  <label htmlFor="email" className="absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-dark-primarybg  px-1 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-color1  peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-dark-primarybg peer-focus:px-1  peer-focus:text-xs">Email</label>
                </div>
                <div className="my-4 relative">
                    <textarea
                        id="opinion"
                        placeholder="What do you think about this site?"
                        value={opinion}
                        onChange={(e) => setOpinion(e.target.value)}
                        autoComplete='off'
                    className="peer h-28 w-full bg-primarybg  dark:bg-transparent border pl-3 pt-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md"
                  ></textarea>
                  <label htmlFor="opinion" className="absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-dark-primarybg  px-1 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-color1 peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-dark-primarybg peer-focus:px-1  peer-focus:text-xs">How Was The Website ?</label>
                
                </div>
                <div className="my-4 relative">
                    <textarea
                        id="message"
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        autoComplete='off'
                    className="peer h-28 w-full bg-primarybg  dark:bg-transparent border pl-3 pt-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md"
                  ></textarea>
                  <label htmlFor="message" className="absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-dark-primarybg  px-1 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-color1 peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-dark-primarybg peer-focus:px-1  peer-focus:text-xs">Your Message</label>
                </div>
                <button
                    type="submit"
                    className="flex items-center justify-center w-max py-2 px-4 text-white bg-accent2 hover:bg-accent3 rounded-lg font-semibold transition-colors duration-300"
                >
                    {showprogress ? 'Submitting' : 'Submit'}
                </button>
            </form>

        </>
    )
}

export default ContactForm
