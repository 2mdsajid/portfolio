import React from 'react'
import Header from './components/Header'
import LandingPage from './components/(section1)/LandingPage'
import SectionTitle from './components/SectionTitle'
import EventTimeline from './components/(section3)/EventTimeline'
import { events } from '@/lib/utils/Constants'
import ProjectsCards from './components/(section6)/ProjectsCards'
import TechJourney from './components/(section4)/TechJourney'
import TechStacks from './components/(section5)/TechStacks'
import CodingTimeline from './components/(section4)/CodingTimeline'
import { dummyData } from '@/lib/utils/Types'

// style={{ backgroundImage: "url('/bg/bg-4.png')", backgroundSize: "cover" }}

const page = () => {
    return (
        <div className={`min-h-screen w-screen bg-primarybg text-white `}>
            <Header />

            {/* remaining contents */}
            <section className='min-h-screen w-full'  >
                <LandingPage />
            </section>



            <section className='min-h-screen w-full'>
                <SectionTitle title='WHO AM I?' />
                {/* remaining contents */}
                <div className='w-full h-full'>

                </div>
            </section>

            <section className='min-h-screen w-full'>
                <SectionTitle title='SO HOW IT ALL STARTED?' />
                {/* remaining contents */}
                <div className='w-full h-full px-0 md:px-10 lg:px-40 xl:px-44'>
                    <EventTimeline events={events.slice(0, 5)} />

                </div>
            </section>

            <section className='min-h-screen w-full'>
                <SectionTitle title='BUT CODING?' />
                {/* remaining contents */}
                <div className='w-full h-full'> 
                    <CodingTimeline dummyData={dummyData}/>
                </div>
            </section>

            <section className='min-h-screen w-full'>
                <SectionTitle title='SO WHERE AM I NOW?' />
                {/* remaining contents */}
                <div className='w-full h-full'>
                    <TechStacks />
                </div>
            </section>

            <section className='min-h-screen w-full'>
                <SectionTitle title='PROJECTS?' />
                {/* remaining contents */}
                <div className='w-full h-full'>
                    <ProjectsCards />
                </div>
            </section>


        </div>
    )
}

export default page
