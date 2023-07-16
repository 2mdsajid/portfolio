import React from 'react'
import Talents from './Talents'
import Balancer from 'react-wrap-balancer'

const SkillsTalents = () => {
    return (
        <div className='w-full flex flex-col justify-center my-10 px-0 md:px-10 lg:px-20 xl:px-32'>
            <h1 className=' text-center mx-auto mb-3'>
                <Balancer>
                    Skills - Learned by own<br/>
                    Talents - God gifted<br/>
                    I have none....
                </Balancer>
            </h1>
            <Talents />
            <h1 className=' text-center mx-auto my-5 using Next.JS'>
                <Balancer>
                    and by the way, I made this website !
                </Balancer>
            </h1>
        </div>
    )
}

export default SkillsTalents
