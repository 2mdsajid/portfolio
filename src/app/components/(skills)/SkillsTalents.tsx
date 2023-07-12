import React from 'react'
import Skills from './Skills'
import Talents from './Talents'

const SkillsTalents = () => {
    return (
        <div className='w-full flex flex-wrap justify-center my-10 px-4 md:px-10 lg:px-20 xl:px-32'>
            <Talents />
            <Skills />
        </div>
    )
}

export default SkillsTalents
