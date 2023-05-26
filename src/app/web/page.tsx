import React from 'react'
import Header from './components/Header'
import LandingPage from './components/(section1)/LandingPage'
import SectionTitle from './components/SectionTitle'
import EventTimeline from './components/(section3)/EventTimeline'
import { events } from '@/lib/utils/Constants'

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
                <div className='w-full h-full px-4 md:px-10 lg:px-40 xl:px-44'>
                    <EventTimeline events={events} />
                </div>
            </section>

            <section className='min-h-screen w-full'>
                <SectionTitle title='BUT CODING?' />
                {/* remaining contents */}
                <div className='w-full h-full'></div>
            </section>

            <section className='min-h-screen w-full'>
                <SectionTitle title='SO WHERE AM I NOW?' />
                {/* remaining contents */}
                <div className='w-full h-full'></div>
            </section>

            <section className='min-h-screen w-full'>
                <SectionTitle title='PROJECTS?' />
                {/* remaining contents */}
                <div className='w-full h-full'></div>
            </section>


        </div>
    )
}

export default page
