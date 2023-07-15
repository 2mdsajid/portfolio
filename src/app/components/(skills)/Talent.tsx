import { TypeTalent } from '@/lib/utils/Types';
import React from 'react'
import { IconType } from 'react-icons';
import Balancer from 'react-wrap-balancer'



const Talent = ({icon,title,desc}:TypeTalent) => {
  return (
    <div data-aos={'zoom-in'} className='w-full m-1 flex flex-col space-y-3 justify-start items-center p-2 md:p-3 bg-modalbg border dark:border-dark-modalbg dark:bg-dark-modalbg rounded-md shadow-md'>
    <div className='text-3xl md:text-5xl w-max'>
        {icon}
    </div>
    <h1 className='text-xl font-semibold text-center'>{title}</h1>
    <p className=' text-sm '>
        <Balancer>
        {desc}
         </Balancer>
    </p>
</div>
  )
}

export default Talent
