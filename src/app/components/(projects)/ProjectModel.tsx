'use client'

import { TypeProject } from '@/lib/utils/Types'
import React, { useState } from 'react'
import { BiExpand, BiX } from 'react-icons/bi'
import Image from 'next/image'
import DialogBox from '../reused/DialogBox'

const ProjectModel = ({ project }: { project: TypeProject }) => {
  const [showModel, setShowModel] = useState(false)

  const toggleModel = () => {
    setShowModel(!showModel)
    if (!showModel) {
      document.body.style.overflow = 'hidden' // Apply the CSS style to hide scrolling
    } else {
      document.body.style.overflow = '' // Reset the CSS style to restore scrolling
    }
  }

  return (
    <>
      <button onClick={toggleModel} className=" flex items-center ">
        <BiExpand />
      </button>

      {/* model */}
      {showModel && (
        <DialogBox>
          <div className='w-screen h-screen backdrop-blur flex items-center justify-center text-color1 dark:text-dark-color1'>
            <div className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] bg-primarybg border border-color1 dark:bg-transparent dark:border-dark-color1 p-8 rounded-lg shadow-lg overflow-auto" >
              <button className=" absolute top-2 right-0 p-2 text-color3 hover:text-gray-500 text-5xl" onClick={toggleModel}>
                <BiX />
              </button>
              <div>
                <p className="text-xl font-semibold">{project.name}</p>
                <p className='py-3 w-full text-lg'>{project.desc}</p>
              </div>

              <div className="">
                <p className="font-semibold my-2 text-lg">Tech Used:</p>
                <ul className='flex space-x-4 my-2'>
                  {project.techstacks.map((tech, index) => (
                    <li className='' key={index}>
                      <Image
                        src={'/stts/' + tech + '.png'}
                        alt={tech}
                        height={100}
                        width={100}
                        className='w-[3rem] md:w-[3.5rem] hover:animate-bounce cursor-pointer'
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex text-lg mt-10">
                <a href={project.websitelink} className="text-blue-500 hover:underline  mx-2" target='_blank'>Vitis Website</a>
                <a href={project.githublink} className="text-blue-500 hover:underline  " target='_blank'>Visit Github</a>
              </div>

            </div>
          </div>
        </DialogBox>

      )}
    </>
  )
}

export default ProjectModel
