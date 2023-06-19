import { serviceData } from '@/lib/utils/Constants'
import React from 'react'
import { BsFillBookmarkStarFill, BsGlobe, BsPersonWorkspace } from 'react-icons/bs'
import ServiceCard from './components/ServiceCard'
import Link from 'next/link'

const page = () => {
  return (
    <div className='min-h-screen w-screen  bg-primarybg text-white px-4 md:px-10 lg:px-40 xl:px-44 py-5'>
      <div>
        <div>
          <h1 className="w-max flex items-center bg-primarybg text-white font-bold text-lg p-2 pr-3 border rounded-r-full my-10">
            <span className="mr-2 text-lg">
              <BsFillBookmarkStarFill />
            </span>
            FOR YOU
          </h1>
          <div className='w-full '>
            <div className="bg-primarybg  flex flex-col space-y-2 items-center p-4 sm:w-1/3 md:w-1/4 border rounded-lg shadow-md">
              <BsGlobe className="text-4xl text-color5" />
              <h1 className="text-xl font-bold text-color1">Free Website</h1>
              <p className="text-sm text-center">
                If you don't know coding and don't have a website
              </p>
              <p className="text-center font-semibold">
                Make your{' '}
                <span className="text-color1">first website</span> within 5 minutes{' '}
                <span className="text-color2">without coding</span>
              </p>
              <Link href='/sitegenerator' className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-color2 via-color3 to-gray-800 hover:bg-gradient-to-r hover:from-gray-800 hover:via-color3 hover:to-color2 text-white transition-colors duration-300">
                PROCEED
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h1 className="w-max flex items-center bg-primarybg text-white font-bold text-lg p-2 pr-3 border rounded-r-full my-10">
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
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>


    </div>
  )
}

export default page
