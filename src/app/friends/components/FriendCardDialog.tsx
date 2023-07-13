import { TypeFriendCard } from '@/lib/utils/Types';
import React from 'react';
import BirthdayCounter from './BirthdayCounter';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Image from 'next/image';

const FriendCardDialog = ({ data, handleCloseDialog }: { data: TypeFriendCard, handleCloseDialog: () => void }) => {
  return (
    <div className='bg-gray-900 text-white relative w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[45%] max-h-[85vh] mx-auto rounded-lg p-4 border border-gray-900'>
      <div className='h-max bg-gray-900 w-full p-2 absolute top-0 left-0'>
        <AiOutlineCloseCircle
          className="cursor-pointer"
          size={24}
          onClick={handleCloseDialog}
        />
      </div>


      <div className=' w-full overflow-auto mt-10'>
        <div className="flex flex-col sm:flex-row ">
          <img src={data.image} alt={data.name} className="w-[80%] sm:w-[15rem]  mx-auto sm:mx-0 rounded" height={100} width={100} />
          <div className='px-2 w-full sm:w-[80%]'>
            <h2 className='text-center sm:text-left text-2xl font-semibold'>{data.name}</h2>
            <div className={`flex items-center my-4 sm:hidden`}>
              <div className={`w-full border-t border-gray-400`}></div>
            </div>
            <p>
              <span className="font-semibold">Date of Birth:</span> {new Date(data.dob).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric'
              })}
            </p>
            {data.institution && (
              <p>
                <span className="font-semibold">Institution:</span> {data.institution}
              </p>
            )}
            <p className='flex items-center'>
              <span className="font-semibold">Birthday in:</span> <span><BirthdayCounter expiryTimestamp={data.dob} /></span>
            </p>

            <div className={`flex items-center my-4 sm:hidden`}>
              <div className={`w-full border-t border-gray-400`}></div>
            </div>

            <p>
              <span className="font-semibold">First Impressions:</span> {data.firstimpressions}
            </p>
            <p>
              <span className="font-semibold">Best Memory:</span> {data.bestmemory}
            </p>
          </div>
        </div>

        <div className={`flex items-center my-4`}>
          <div className={`w-full border-t border-gray-400`}></div>
        </div>

        {/* If the gallery is available, render the images */}
        {data.gallery && data.gallery.length > 0 && (
          <div className='w-full'>
            <h3>Gallery:</h3>
            <div className="flex wrap">
              {data.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="w-24 sm:w-36 m-1"
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
