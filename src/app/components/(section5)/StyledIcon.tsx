import Image from 'next/image'
import React from 'react'

const StyledIcon = ({ icon }: { icon: string }) => {
  return (
    <div className='bg-white p-[0.5rem] rounded-lg m-1 w-[4rem] h-[4rem] flex items-center justify-center'>
      <Image
        src={'/stacks2/'+ icon + '.png'}
        alt={icon}
        height={100}
        width={100}
        className='w-full'
      />
    </div>
  )
}

export default StyledIcon
