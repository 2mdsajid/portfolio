import { dummyProjects } from '@/lib/utils/Types'
import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsCards = () => {
  return (
    <div className='w-full flex flex-wrap justify-center mt-5'>
        {dummyProjects.map((project,index)=>{
            return <ProjectCard key={index} project={project} />
        })}
    </div>
  )
}

export default ProjectsCards
