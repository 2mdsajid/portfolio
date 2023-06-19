// import {  } from '@/lib/utils/Types'
import React from 'react'
import TechJourney from './TechJourney'
import { TypeStacks } from '@/lib/utils/Types'

const CodingTimeline = ({ dummyData }: { dummyData: TypeStacks[] }) => {
  return (
    <div className='w-full h-full mt-20 px-4 md:px-10 lg:px-44 xl:px-52'>
      <div className='w-full h-full'>
        {dummyData.map((data, index,array) => {
          return <TechJourney keyprop={index} stack={data} array={array}/>
        })}
      </div>


    </div>
  )
}

export default CodingTimeline
