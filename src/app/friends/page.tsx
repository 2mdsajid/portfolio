
import React from 'react'
import KeyLayouut from '../components/reused/KeyLayouut';
import MessageDialog from './components/MessageDialog';
import SetUser from '../components/reused/SetUser';
// import ClientCodes from './components/ClientCodes';
import dynamic from 'next/dynamic';
const ClientCodes = dynamic(() => import('./components/ClientCodes'), {
    ssr: false,
  });

export const metadata = {
    title: 'Sajid | Friends',
    openGraph: {
        title: 'Sajid | Friends',
        description: 'Friends data for sajid website',
    },
}

const Page = () => {
    return (
        <KeyLayouut>
            <SetUser path='friends' />
            <div className='flex flex-col items-center  '>
                <p className='w-full md:w-[70%] xl:w-[60%] text-center my-4'>FInd yourself haha. Since I only scrapped the names from facebook so other details may be wrong.<br /><span className='text-accent2 italic'>( PS : click the profiles for more details )</span></p>
                <MessageDialog string='I&apos;ll add your details here, '>
                </MessageDialog>
                <ClientCodes />
            </div>
        </KeyLayouut>
    )
}

export default Page