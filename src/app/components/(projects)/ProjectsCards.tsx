import React from 'react'
import ProjectCard from './ProjectCard'
import { dummyProjects } from '@/lib/utils/Constants'

const ProjectsCards = () => {
  return (
    <div className='w-full flex flex-wrap justify-center my-10'>
      <div>
        {dummyProjects.map((project,index)=>{
          return <ProjectCard key={index} project={project} />
        })}
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default ProjectsCards
