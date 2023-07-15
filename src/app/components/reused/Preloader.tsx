'use client'

import React, { useEffect } from 'react'
import gsap from 'gsap';

const Preloader = () => {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.to('.preloader', { y: '-100%', duration: 1 })
        tl.to('.preloader', { display: 'none' }, '-=0.5');
    }, []);

    return (
        <div className="z-100 preloader fixed h-screen w-screen top-0 right-0 bg-black text-white flex items-center justify-center ">
            {/* Preloader content */}
            <p>HI. Just a second.</p>
        </div>
    );
};

export default Preloader