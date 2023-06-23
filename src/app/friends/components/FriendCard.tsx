'use client'

import Image from 'next/image';
import { TypeFriendCard } from '@/lib/utils/Types';
import React, { useState } from 'react';
import FriendCardDialog from './FriendCardDialog';

import { AiOutlineCloseCircle } from 'react-icons/ai';


const FriendCard = ({ data }:{data:TypeFriendCard}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCardClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <Image width={100} height={100} src={data.image} alt={data.name} className="w-24 h-24 rounded-full" onClick={handleCardClick} />
      <h2 className="text-lg font-semibold">{data.name}</h2>

      {isDialogOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="bg-black bg-opacity-50 absolute inset-0 backdrop-blur-sm"></div>
        <div className="rounded-md relative">
          <FriendCardDialog data={data} handleCloseDialog={handleCloseDialog} />
        </div>
      </div>
    )}
    </div>
  );
};

export default FriendCard;
