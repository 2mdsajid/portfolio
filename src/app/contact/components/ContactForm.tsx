'use client'

import { BACKEND } from '@/lib/utils/Constants';
import { Alert, AlertColor } from '@mui/material';
import React, { FormEvent, useState } from 'react'
import Rating from 'react-rating';


const ContactForm = () => {


    // for alert and progress
    const [alertseverity, setalertSeverity] = useState<AlertColor>('success');
    const [alertmessage, setalertMessage] = useState<string>('successfully generated');
    const [showalert, setshowAlert] = useState<boolean>(true)
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
                <div className="mb-2">
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
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
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border bg-primarybg border-gray-300 rounded px-3 py-2 mt-1 w-full focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-2">
                    <textarea
                        id="opinion"
                        placeholder="What do you think about this site?"
                        value={opinion}
                        onChange={(e) => setOpinion(e.target.value)}
                        required
                        className="border bg-primarybg border-gray-300 rounded px-3 py-2 mt-1 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
                    ></textarea>
                </div>
                <div className="mb-2">
                    <textarea
                        id="message"
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="border bg-primarybg border-gray-300 rounded px-3 py-2 mt-1 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
                    ></textarea>
                </div>
                {/* <div className="mb-2">
                <Rating
                initialRating={rating}
                onChange={(value) => setRating(value)}
                emptySymbol={<i className="far fa-star"></i>}
                fullSymbol={<i className="fas fa-star"></i>}
                />
            </div> */}
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                    {showprogress ? 'Submitting' : 'Submit'}
                </button>
            </form>

        </>
    )
}

export default ContactForm
