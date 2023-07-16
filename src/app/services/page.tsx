import { serviceData } from '@/lib/utils/Constants'
import React from 'react'
import { BsFillBookmarkStarFill, BsGlobe, BsPersonWorkspace } from 'react-icons/bs'
import ServiceCard from './components/ServiceCard'
import Link from 'next/link'
import KeyLayouut from '../components/reused/KeyLayouut'
import SetUser from '../components/reused/SetUser'

export const metadata = {
  title: 'Sajid | Offerings',
  openGraph: {
    title: 'Sajid | Offerings',
    description: 'Offerings by Sajid aka c0mrad1',
  },
}

const page = () => {
  return (
    <KeyLayouut>
       <SetUser path='services' />
      <div>
        <div>
          <h1 className="w-max flex items-center font-bold text-lg p-2 pr-3 border rounded-r-full my-10">
            <span className="mr-2 text-lg">
              <BsFillBookmarkStarFill />
            </span>
            FOR YOU
          </h1>
          <div className='w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
            <div className="bg-bgPrimary p-6 flex flex-col justify-between rounded-lg shadow-md border">
              <div className='w-full'>
                <BsGlobe size={24} />
                <h2 className="text-xl font-bold mb-2">Free Website</h2>
                <p className=" mb-4">Make your first website for free, without coding, in just 5 minutes!</p>
              </div>
              <Link href='/sitegenerator' className="flex items-center justify-center w-max py-2 px-4 text-white bg-accent2 hover:bg-accent3 rounded-lg font-semibold transition-colors duration-300">
                Proceed
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h1 className="w-max flex items-center  font-bold text-lg p-2 pr-3 border rounded-r-full my-10">
            <span className="mr-2 text-lg">
              <BsPersonWorkspace />
            </span>
            Additional Offerings
          </h1>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {serviceData.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                modelcontent={service.modelcontent}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </KeyLayouut>
  )
}

export default page
