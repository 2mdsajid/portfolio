'use client'

import { TypeProject } from '@/lib/utils/Types'
import React, { useState } from 'react'
import { BiExpand, BiX } from 'react-icons/bi'

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
      <button onClick={toggleModel} className="text-gray-600 hover:text-gray-500">
        <BiExpand />
      </button>

      {/* model */}
      {showModel && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 backdrop-blur z-50">
          <div className="relative bg-white w-[90%] md:w-[70%] lg:w-[70%] p-8 rounded-lg shadow-lg overflow-scroll" >
            <button className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700" onClick={toggleModel}>
              <BiX size={20} />
            </button>
            <h1 className="text-xl mb-4">{project.name}</h1>
            <p>{project.desc}</p>

            {/* <img src={project.image} alt={project.name} className="mt-4" /> */}

            <div className="flex mt-4">
              <a href={project.websitelink} className="mr-4 text-blue-500 hover:underline">Website</a>
              <a href={project.githublink} className="mr-4 text-blue-500 hover:underline">GitHub</a>
            </div>

            <div className="mt-4">
              <h2 className="font-bold">Tech Stacks:</h2>
              <ul>
                {project.techstacks.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
        </div>

        </div >
      )}
    </>
  )
}

export default ProjectModel
