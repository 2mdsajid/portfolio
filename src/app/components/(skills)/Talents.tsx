import { dummyTalents } from '@/lib/utils/Types'
import React from 'react'
import { FaBrain } from 'react-icons/fa'
import { GiNoseFront } from 'react-icons/gi'
import { Balancer } from 'react-wrap-balancer'
import Talent from './Talent'

const Talents = () => {
    return (
        <div className='w-full'>
            <div className='w-full flex flex-wrap justify-between '>
                {dummyTalents.map((talent, index) => {
                    return <div className='w-[48%] md:w-[30%] flex shadow-md my-3' key={index}>
                        <Talent icon={talent.icon} title={talent.title} desc={talent.desc} />
                    </div>
                })}


            </div>

        </div>
    )
}

export default Talents
