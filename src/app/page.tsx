import React, { useEffect } from 'react'
import Header from './components/header/Header'
import LandingPage from './components/(landingpage)/LandingPage'
import SectionTitle from './components/reused/SectionTitle'
import EventTimeline from './components/(eventtimeline)/EventTimeline'
import { events } from '@/lib/utils/Constants'
import ProjectsCards from './components/(section6)/ProjectsCards'
import CodingTimeline from './components/(codingtimeline)/CodingTimeline'
import { dummyData } from '@/lib/utils/Types'
import IntroPage from './components/(intropage)/IntroPage'
import TechStacks2 from './components/(section5)/TechStacks2'
import Footer from './components/footer/Footer'
import WebCli from './components/(section7)/WebCli'
import SetUser from './components/reused/SetUser'
import SkillsTalents from './components/(skills)/SkillsTalents'

// style={{ backgroundImage: "url('/bg/bg-4.png')", backgroundSize: "cover" }}

const page = () => {

    return (
        <div className="h-max w-screen bg-primarybg dark:bg-dark-primarybg ">
            <Header />
            <SetUser />
            {/* remaining contents */}
            <div className='pt-20 px-4 md:px-10 lg:px-20 xl:px-32'>
                <section className='h-screen w-full'  >
                    <LandingPage />
                </section>

                <section className='my-10 w-full '>
                    <SectionTitle title='WHO AM I?' />
                    {/* remaining contents */}
                    <div className='w-full h-full'>
                        <IntroPage />
                    </div>
                </section>

                <section className='min-h-screen w-full'>
                    <SectionTitle title='SO HOW IT ALL STARTED?' />
                    {/* remaining contents */}
                    <div className='w-full h-full px-0 md:px-10 lg:px-20 xl:px-32'>
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

                {/* <section className='h-max w-full'>
                    <SectionTitle title='SO WHAT I DID SO FAR?' />
                    <div className='w-full h-full'>
                        <TechStacks2 />
                    </div>
                </section> */}

                <section className='h-max w-full mb-10'>
                    <SectionTitle title='WHAT I KNOW?' />
                    {/* remaining contents */}
                    <div className='w-full h-full my-10'>
                        <SkillsTalents />
                    </div>
                </section>

                <section className='h-max w-full mb-10'>
                    <SectionTitle title='AND PROJECTS?' />
                    {/* remaining contents */}
                    <div className='w-full h-full my-10'>
                        <ProjectsCards />
                    </div>
                </section>

                <section className='h-max w-full mb-10'>
                    <SectionTitle title='LAST BUT NOT THE LEAST' />
                    {/* remaining contents */}
                    <div className='w-full h-full my-10'>
                        <WebCli />
                    </div>
                </section>

                <Footer />
            </div>

        </div>
    )
}

export default page
