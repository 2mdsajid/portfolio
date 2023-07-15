import { TypeFriendCard } from '@/lib/utils/Types';
import React from 'react';
import BirthdayCounter from './BirthdayCounter';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { getRandomGender, generateRandomNumber } from '@/lib/utils/Functions';
import MessageDialog from './MessageDialog';
import Image from 'next/image';

const FriendCardDialog = ({ data, handleCloseDialog }: { data: TypeFriendCard, handleCloseDialog: () => void }) => {
  return (
    <div className='bg-secondarybg dark:bg-transparent dark:border-white dark:backdrop-blur-md relative  max-h-[85vh] overflow-auto mt-20 mx-auto rounded-lg p-4 border border-gray-900'>
      <div className='h-max bg-secondarybg dark:bg-transparent w-full p-2 absolute top-0 left-0'>
        <AiOutlineCloseCircle
          className="cursor-pointer"
          size={24}
          onClick={handleCloseDialog}
        />
      </div>

      <div className=' w-full overflow-auto mt-10'>
        <div className="flex flex-col sm:flex-row ">
          <Image height={200} width={200} src={data.image ? data.image : `https://randomuser.me/api/portraits/${getRandomGender()}/${generateRandomNumber()}.jpg`} alt={data.name} className=" mx-auto sm:mx-0 rounded"  />
          <div className='px-2 w-full'>
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
            <p>
              <span className="font-semibold">Institution:</span> {data.institution ? data.institution : 'null'}
            </p>

            <p className='flex items-center'>
              <span className="font-semibold">Birthday in:</span> <span><BirthdayCounter expiryTimestamp={data.dob} /></span>
            </p>

            <div className={`flex items-center my-4 sm:hidden`}>
              <div className={`w-full border-t border-gray-400`}></div>
            </div>

            <p>
              <span className="font-semibold">First Impressions:</span> {data.firstimpressions ? data.firstimpressions : 'I have forgotten'}
            </p>
            <p>
              <span className="font-semibold">Best Memory:</span> {data.bestmemory ? data.bestmemory : 'I have AMNESIA'}
            </p>
          </div>
        </div>

        <div className={`flex items-center my-4`}>
          <div className={`w-full border-t border-gray-400`}></div>
        </div>

        {/* If the gallery is available, render the images */}
        <h3>Gallery:</h3>
        {data.gallery && data.gallery.length > 0 ? (
          <div className='w-full'>
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
        ) : 'null'}
      </div>

    </div>
  );
};

export default FriendCardDialog;
