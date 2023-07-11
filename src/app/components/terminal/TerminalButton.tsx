'use client'

import React, { useState } from 'react';
import { IoTerminalOutline } from 'react-icons/io5';
import Terminal from './Terminal';


const TerminalButton = () => {
  const [showTerminal, setShowTerminal] = useState(false);

  const handleIconClick = () => {
    setShowTerminal(true);
    document.body.style.overflow = 'hidden' // Apply the CSS style to hide scrolling
  };
  
  const handleCloseTerminal = () => {
    setShowTerminal(false);
    document.body.style.overflow = '' // Reset the CSS style to restore scrolling
  };

  return (
    <div className='text-color1 dark:text-dark-color1 flex items-center'>
      {showTerminal ? (
        <div className='fixed inset-0 flex items-center justify-center'>
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 backdrop-blur z-50">
            <div className='w-full sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[50%] h-[27rem] md:h-[33rem] p-4 rounded-lg z-10'>
              <Terminal closeTerminal={handleCloseTerminal} />
            </div>
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-center'>
          <IoTerminalOutline size={32} className='cursor-pointer' onClick={handleIconClick} />
        </div>
      )}
    </div>
  );
};

export default TerminalButton;
