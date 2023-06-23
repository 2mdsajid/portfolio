import React from 'react'
import Header from './components/header/Header'
import LandingPage from './components/(section1)/LandingPage'
import SectionTitle from './components/reused/SectionTitle'
import EventTimeline from './components/(section3)/EventTimeline'
import { events } from '@/lib/utils/Constants'
import ProjectsCards from './components/(section6)/ProjectsCards'
import TechJourney from './components/(section4)/TechJourney'
import TechStacks from './components/(section5)/TechStacks'
import CodingTimeline from './components/(section4)/CodingTimeline'
import { dummyData } from '@/lib/utils/Types'
import IntroPage from './components/(section2)/IntroPage'
import TechStacks2 from './components/(section5)/TechStacks2'
import Footer from './components/footer/Footer'

// style={{ backgroundImage: "url('/bg/bg-4.png')", backgroundSize: "cover" }}

const page = () => {
    return (
        <div className={`h-max w-screen bg-primarybg text-white`}>
            <Header />

            {/* remaining contents */}
            <section className='min-h-screen w-full'  >
                <LandingPage />
            </section>

            <section className='py-10 w-full'>
                <SectionTitle title='WHO AM I?' />
                {/* remaining contents */}
                <div className='w-full h-full'>
                    <IntroPage />
                </div>
            </section>

            <section className='min-h-screen w-full'>
                <SectionTitle title='SO HOW IT ALL STARTED?' />
                {/* remaining contents */}
                <div className='w-full h-full px-0 md:px-10 lg:px-40 xl:px-44'>
                    <EventTimeline events={events.slice(0, 5)} isHomePage={true} />
                </div>
            </section>

            <section className='min-h-screen w-full'>
                <SectionTitle title='BUT CODING?' />
                {/* remaining contents */}
                <div className='w-full h-full'>
                    <CodingTimeline dummyData={dummyData} />
                </div>
            </section>

            <section className='h-max w-full'>
                <SectionTitle title='SO WHAT I DID SO FAR?' />
                {/* remaining contents */}
                <div className='w-full h-full'>
                    <TechStacks />
                    <TechStacks2 />
                </div>
            </section>

            <section className='h-max w-full mb-10'>
                <SectionTitle title='AND PROJECTS?' />
                {/* remaining contents */}
                <div className='w-full h-full my-10'>
                    <ProjectsCards />
                </div>
            </section>

            <Footer />

        </div>
    )
}

export default page
