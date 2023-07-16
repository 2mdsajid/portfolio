import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='pt-20 flex flex-col items-center justify-center absolute z-100 w-screen h-screen'>
      <Image className='h-max w-max' height={200} width={200} alt='Not FOund' src={'/notfound.png'} />
      <Link className='my-5 text-blue-500 hover-underline' href={'/'}>Go To Home NotFound</Link>
    </div>
  )
}

export default NotFound
