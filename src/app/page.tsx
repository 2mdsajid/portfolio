import React from 'react'
import Header from './components/header/Header'
import LandingPage from './components/(landingpage)/LandingPage'
import SectionTitle from './components/reused/SectionTitle'
import EventTimeline from './components/(eventtimeline)/EventTimeline'
import { dummyData, events } from '@/lib/utils/Constants'
import ProjectsCards from './components/(projects)/ProjectsCards'
import CodingTimeline from './components/(codingtimeline)/CodingTimeline'
import IntroPage from './components/(intropage)/IntroPage'
import Footer from './components/footer/Footer'
import WebCli from './components/(section7)/WebCli'
import SkillsTalents from './components/(skills)/SkillsTalents'
import SetUser from './components/reused/SetUser'
import Balancer from 'react-wrap-balancer'
import Link from 'next/link'
import AosAnimation from './components/reused/AosAnimation'

import dynamic from 'next/dynamic';

const Rocket = dynamic(() => import('./components/Rocket'), {
    ssr: false,
  });
  
// import Rocket from './components/Rocket'


const page = async () => {

    return (
        <div className="h-max w-screen bg-primarybg dark:bg-dark-primarybg ">
            <Header />
            <AosAnimation />
            <SetUser path='home' />
            {/* remaining contents */}
            <div className='pt-20 px-4 md:px-10 lg:px-20 xl:px-32'>
                <Rocket />
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

                <section className='h-max my-5 w-full'>
                    <SectionTitle title='BUT CODING?' />
                    {/* remaining contents */}
                    <div className='w-full h-full'>
                        <CodingTimeline dummyData={dummyData} />
                    </div>
                </section>

                <section className='h-max w-full mb-10'>
                    <SectionTitle title='SKILLS & TALENTS' />
                    {/* remaining contents */}
                    <div className='w-full h-full'>
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

                <section className='h-max w-full mb-20'>
                    <SectionTitle title='LAST BUT NOT THE LEAST' />
                    {/* remaining contents */}
                    <div data-aos={'zoom-in'} className='w-full h-full my-10'>
                        <WebCli />
                    </div>
                </section>

                <div className='my-[2rem] py-5 h-max'>
                    <h1 className=' text-center text-lg mx-auto '>
                        <Balancer>
                            Do check out my <Link target='_blank' className='text-blue-500 hover:underline' href={'https://oldsajidportfolio.netlify.app'}>Old Website</Link>
                        </Balancer>
                    </h1>
                </div>

                <div className='my-[2rem] py-3 h-max'>
                    <h1 className=' text-center text-lg mx-auto '>
                        <Balancer>
                            Also check out <Link target='_blank' className='text-blue-500 hover:underline' href={'https://www.instagram.com/stories/highlights/17976623704752499/'}>My Gaming</Link> and  <Link target='_blank' className='text-blue-500 hover:underline' href={'https://www.instagram.com/stories/highlights/17852516654783515/'}>Trekking</Link> highlights in my <Link target='_blank' className='text-blue-500 hover:underline' href={'https://www.instagram.com/c0mrad1/'}>Instagram (@c0mrad1)</Link> account !
                        </Balancer>
                    </h1>
                </div>

            </div>
            <Footer />

        </div>
    )
}

export default page
