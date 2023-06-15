import { TypeFriendCard } from '@/lib/utils/Types';
import React from 'react';
import BirthdayCounter from './BirthdayCounter';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const FriendCardDialog = ({ data, handleCloseDialog }: { data: TypeFriendCard, handleCloseDialog: () => void }) => {
  return (
    <div className='bg-gray-900 text-white relative w-[90%] max-h-[85vh] mx-auto rounded-lg p-4 border border-gray-900'>
      <div className='h-max bg-gray-900 w-full p-2 absolute top-0 left-0'>
        <AiOutlineCloseCircle
          className="cursor-pointer"
          size={24}
          onClick={handleCloseDialog}
        />
      </div>


      <div className='max-h-[73vh] overflow-auto mt-10'>

      <div className="flex flex-col sm:flex-row">
        {/* Render the image */}
        <img src={data.image} alt={data.name} className="w-[80%] mx-auto rounded" />

        <div>
          {/* Render the name, birthday, and institution */}
          <h2 className='text-center'>{data.name}</h2>

          <div className={`flex items-center my-4`}>
            <div className={`w-full border-t border-gray-400`}></div>
          </div>

          <p>Date of Birth: {new Date(data.dob).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric'
          })}</p>
          {data.institution && <p>Institution: {data.institution}</p>}
          <p className='flex items-center'>Birthday in : &nbsp;<span><BirthdayCounter expiryTimestamp={data.dob} /></span>
          </p>
        </div>
        <div className={`flex items-center my-4`}>
          <div className={`w-full border-t border-gray-400`}></div>
        </div>
      </div>

      <p>First Impressions: {data.firstimpressions}</p>
      <p>Best Memory: {data.bestmemory}</p>

        <div className={`flex items-center my-4`}>
          <div className={`w-full border-t border-gray-400`}></div>
        </div>
      {/* If the gallery is available, render the images */}
      {data.gallery && data.gallery.length > 0 && (
        <div>
          <h3>Gallery:</h3>
          <div className="flex">
            {data.gallery.map((image, index) => (
              <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-24 h-24"
              />
              ))}
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default FriendCardDialog;
