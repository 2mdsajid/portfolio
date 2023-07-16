import React from 'react';

export const metadata = {
  title: 'Sajid | About',
  openGraph: {
    title: 'Sajid | About',
    description: 'Aboout me page by Sajid aka c0mrad1',
  },
}

const Page = () => {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center p-4 bg-primarybg dark:bg-dark-primarybg">
      <h1 className="text-2xl font-bold text-center">
        LOL, you&apos;re here!
      </h1>
      <p className='text-center my-5 text-lg'>How fortunate. The world is changing so
        astonishingly. There are countless things you absolutely must know.
        And yet, you are here to know me more HAHAHA!</p>
    </div>
  );
};

export default Page;
