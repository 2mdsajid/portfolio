'use client'
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const Preloader = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.set('.preloader-image', { visibility: 'visible' })
      .to('.preloader-image', { scale: 3, opacity: 0, duration: 3, ease: 'power2.in', delay: 1.5 })
      .to('.preloader', { opacity: 0, display: 'none', duration: 1 }, '-=1');
  }, []);


  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setIsImageVisible(true);
    }, 1000);

    return () => clearTimeout(visibilityTimeout);
  }, []);

  return (
    <div className="z-100 preloader fixed h-screen w-screen top-0 left-0 bg-black text-white flex items-center justify-center">
      {/* Preloader content */}
      <div className={`preloader-image ${isImageVisible ? 'visible' : 'hidden'}`}>
        <Image alt="Preloader Image" height={200} width={200} src={'/c0mradlogo.jpg'} />
        {/* <p className='text-center text-4xl'>C0MRAD1</p> */}
        <p>Inspired by - Jonathan James</p>
      </div>
    </div>
  );
};

export default Preloader;
