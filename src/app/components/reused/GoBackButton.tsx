'use client'

import { useRouter } from 'next/navigation';

const GoBackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  }

  return (
    <div className='flex space-x-2'>
        <p>Now </p>
      <button className='text-blue-500 hover:underline' onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default GoBackButton;
