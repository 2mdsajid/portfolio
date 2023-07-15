import React from 'react'
import { TypeStacks } from '@/lib/utils/Types'
// src={`/stacks/${stack.image}.png`}
const TechJourney = ({ stack, keyprop, array }: { stack: TypeStacks, keyprop: number, array: TypeStacks[] }) => {
    return (
        <div data-aos={'zoom-in'} key={keyprop} className='w-full h-full flex justify-center text-color1 dark:text-dark-color1 md:px-10 lg:px-44 xl:px-52 '>
            <div className={`w-full border-accent2 flex ${keyprop%2===0 && 'md:flex-row-reverse'} justify-end`}>
                <div className="work-detail-info f-c w-[70%] md:w-[45%] flex flex-col border-blue-900 items-start pb-4 ">
                    <div className="rounded shadow-md border p-2">
                        <h1 className="font-bold text-3xl mb-4">{stack.name}</h1>
                        <p className="text-sm">{stack.desc}
                        </p>
                    </div>
                </div>
                <div className="w-[15%] md:w-[10%] flex flex-col items-center">
                    <i className="fas fa-briefcase border p-3 rounded-full shadow-md"></i>
                    <div className="w-1 h-full bg-accent2"></div>
                </div>
                <div className="w-[5%] md:w-[45%] md:block"></div>
            </div>
        </div>
    )
}

export default TechJourney