import Image from 'next/image'
import React from 'react'

const StyledIcon = ({ icon }: { icon: string }) => {
  return (
    <div className='bg-primarybg border sm:p-0 py-2 rounded-lg m-1 w-[5rem] h-[5rem] sm:w-[6rem] sm:h-[6rem] flex flex-col items-center justify-evenly'>
      <Image
        src={'/stts/'+ icon + '.png'}
        alt={icon}
        height={100}
        width={100}
        className='w-[3rem] md:w-[3.5rem] '
      />
      <p className='text-white text-xs md:text-sm uppercase font-semibold '>{icon}</p>
    </div>
  )
}

export default StyledIcon
