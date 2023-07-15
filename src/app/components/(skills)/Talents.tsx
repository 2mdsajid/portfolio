import React from 'react'
import Talent from './Talent'
import { dummyTalents } from '@/lib/utils/Constants'

const Talents = () => {
    return (
        <div className='w-full'>
            <div className='w-full flex flex-wrap justify-between '>
                {dummyTalents.map((talent, index) => {
                    return <div className='w-[50%] md:w-[30%] flex  shadow-md' key={index}>
                        <Talent icon={talent.icon} title={talent.title} desc={talent.desc} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Talents
