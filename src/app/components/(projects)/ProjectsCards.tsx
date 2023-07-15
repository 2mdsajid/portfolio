import React from 'react'
import ProjectCard from './ProjectCard'
import { dummyProjects } from '@/lib/utils/Constants'
import Balancer from 'react-wrap-balancer'
import Link from 'next/link'

const ProjectsCards = () => {
  return (
    <div className='w-full flex flex-col justify-center my-10'>
      <div className='w-full flex flex-wrap justify-center'>
        {dummyProjects.map((project, index) => {
          return <ProjectCard key={index} project={project} />
        })}
      </div>
      <div>
        <h1 className=' text-center mx-auto mt-5'>
          <Balancer>
            Check out my <Link className='text-blue-500 hover:underline' href={'/allprojects'}>other projects</Link>
          </Balancer>
        </h1>
      </div>
    </div>
  )
}

export default ProjectsCards
