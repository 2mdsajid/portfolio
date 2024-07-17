import React from 'react'
import Header from '../header/Header'

const KeyLayouut = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
  return (
    <div className="h-max w-screen bg-primarybg dark:bg-dark-primarybg ">
    <Header />
    <div className='pt-20 px-4 md:px-10 lg:px-20 xl:px-32 min-h-[100vh]'>
        {children}
    </div>
    </div>
  )
}

export default KeyLayouut
