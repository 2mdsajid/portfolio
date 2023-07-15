// import {  } from '@/lib/utils/Types'
import React from 'react'
import TechJourney from './TechJourney'
import { TypeStacks } from '@/lib/utils/Types'
import Balancer from 'react-wrap-balancer'

const CodingTimeline = ({ dummyData }: { dummyData: TypeStacks[] }) => {
  return (
    <div className='w-full h-full mt-5 px-2 md:px-10 lg:px-20 xl:px-32'>
      <h1 className=' text-center mx-auto my-6 px-2 md:px-10 lg:px-20 xl:px-32'>
        <Balancer>
        Everything begun after hearing the word &apos;Hacking&apos; while in class 7.....
         </Balancer>
      </h1>
      {/* <h1 className=' md:text-center mx-auto my-6 px-2 md:px-10 lg:px-20 xl:px-32'>
        <Balancer>
          So, back in the good old days, in class 7, I stumbled upon the term hacking. You know, the kind of stuff that only cool kids talk about. But lacking a pc or computer, I could not do anything. shortly, 3 years later I installed QBASIC interpreter in my phone and everything begun
        </Balancer>
      </h1> */}
      <div className='w-full h-full'>
        {dummyData.map((data, index, array) => {
          return <TechJourney key={index} keyprop={index} stack={data} array={array} />
        })}
      </div>


    </div>
  )
}

export default CodingTimeline
