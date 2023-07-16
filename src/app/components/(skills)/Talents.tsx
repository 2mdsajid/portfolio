import React from 'react'
import Talent from './Talent'
import { dummyTalents } from '@/lib/utils/Constants'

const Talents = () => {
    return (
        <div className='w-full'>
            <div className='w-full flex flex-wrap justify-evenly '>
                {dummyTalents.map((talent, index) => {
                    return <div data-aos={'zoom-in'} className='w-[45%] md:w-[30%] flex m-1 md:my-3 shadow-md' key={index}>
                        <Talent icon={talent.icon} title={talent.title} desc={talent.desc} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Talents
