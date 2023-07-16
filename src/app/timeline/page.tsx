
import React from 'react'
import EventTimeline from '../components/(eventtimeline)/EventTimeline'
import { events } from '@/lib/utils/Constants'
import KeyLayouut from '../components/reused/KeyLayouut'
import SetUser from '../components/reused/SetUser'

export const metadata = {
  title: 'Sajid | Timeline',
  openGraph: {
    title: 'Sajid | Timeline',
    description: 'events timeline for sajid aka c0mrad1',
  },
}

const page = () => {
  return (

    <KeyLayouut>
       <SetUser path='timeline' />
      <EventTimeline events={events} isHomePage={false} />
    </KeyLayouut>

  )
}


export default page
