'use client'
import React, { useState } from 'react';
import BotInterface from './BotInterface';
import DialogBox from '../reused/DialogBox';
import { BsRobot } from 'react-icons/bs';


const ChatBot = () => {
  const [showBotInterface, setShowBotInterface] = useState(false);

  const handleIconClick = () => {
    setShowBotInterface(true);
    document.body.style.overflow = 'hidden' // Apply the CSS style to hide scrolling
  };

  const handleCloseBotInterface = () => {
    setShowBotInterface(false);
    document.body.style.overflow = '' // Reset the CSS style to restore scrolling
  };

  return (
    <div className='text-white w-max h-max flex items-center'>
      {showBotInterface ? (
        <DialogBox>
          <BotInterface closeBotInterface={handleCloseBotInterface} />
        </DialogBox>
      ) : (
        <div className='flex items-center justify-center fixed z-50 bottom-10 right-0 lg:right-10 p-2'>
          <BsRobot size={40} className='cursor-pointer' onClick={handleIconClick} />
        </div>
      )}
    </div>
  );
};

export default ChatBot;
