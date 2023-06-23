'use client'

import React, { FormEvent, useState } from 'react'
import Rating from 'react-rating';


const ContactForm = () => {
    const [rating, setRating] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [opinion, setOpinion] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can access the form values from the state variables (name, email, opinion, message)
    };

    return (
        <form onSubmit={handleSubmit} className="text-gray-400">
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
                Submit
            </button>
        </form>

    )
}

export default ContactForm
