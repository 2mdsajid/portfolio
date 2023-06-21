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
          <div className='w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
            <div className="bg-bgPrimary p-6 flex flex-col justify-between rounded-lg shadow-md border">
              <div className='w-full'>
                <BsGlobe size={24} />
                <h2 className="text-xl font-bold mb-2">Free Website</h2>
                <p className="text-gray-600 mb-4">Make your first website for free, without coding, in just 5 minutes!</p>
              </div>
              <Link href='/sitegenerator' className="w-max bg-color2 hover:bg-color4 hover:border text-white font-bold py-2 px-4 rounded">
                Proceed
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
                modelcontent={service.modelcontent}
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
