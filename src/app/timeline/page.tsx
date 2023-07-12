
import React from 'react'
import EventTimeline from '../components/(eventtimeline)/EventTimeline'
import { events } from '@/lib/utils/Constants'

const page = () => {
  return (
    <div className='w-full h-full px-0 md:px-10 lg:px-40 xl:px-44'>
      <EventTimeline events={events} isHomePage={false} />
    </div>
  )
}


export default page
