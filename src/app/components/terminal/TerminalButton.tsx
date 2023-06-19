'use client'


import React, { useState } from 'react';
import { IoTerminalOutline } from 'react-icons/io5';
import Terminal from './Terminal';


const TerminalButton = () => {
  const [showTerminal, setShowTerminal] = useState(false);

  const handleIconClick = () => {
    setShowTerminal(true);
  };

  const handleCloseTerminal = () => {
    setShowTerminal(false);
  };

  return (
    <div className='text-white flex items-center'>
      {showTerminal ? (
        <div className='fixed inset-0 flex items-center justify-center'>
          <div className='absolute inset-0 bg-black opacity-50 backdrop-blur-sm' />
          <div className='w-full sm:w-[90%] md:w-[80%] lg:w-[65%] xl:w-[50%] h-[27rem] md:h-[33rem] p-4 rounded-lg z-10'>
            <Terminal closeTerminal={handleCloseTerminal}/>
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
