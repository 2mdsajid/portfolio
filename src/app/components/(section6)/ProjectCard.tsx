import { TypeProject } from '@/lib/utils/Types'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { AiOutlineGithub } from 'react-icons/ai';
import { BsBrowserChrome } from 'react-icons/bs';
import { BiExpand } from 'react-icons/bi';
import ProjectModel from './ProjectModel';

const ProjectCard = ({ project }: { project: TypeProject }) => {
    return (
        <div className="bg-primarybg dark:bg-dark-secondarybg shadow-md rounded-lg p-2 w-fit border dark:border-dark-secondarybg m-2">
            <div className="relative">
                <Image
                    src={project.image}
                    alt={project.name}
                    height={300}
                    width={400}
                    className="rounded-lg w-[17rem]"
                />
            </div>
            <div className='w-[17rem]'>

            <h2 className="text-lg my-2">{project.name}</h2>
            <p className="text-color1 dark:text-dark-color1 text-md">{project.desc}</p>
            </div>
            <div className="flex spce-x-4 text-2xl justify-center items-center mt-4">
                <div className="text-color1 dark:text-dark-color1 hover:text-gray-500">
                    <ProjectModel project={project} />
                </div>
                <Link href={project.websitelink} passHref className="text-color1 dark:text-dark-color1 hover:text-gray-500">
                    <BsBrowserChrome className="ml-1" />
                </Link>
                <Link href={project.githublink} passHref className="text-color1 dark:text-dark-color1 hover:text-gray-500 text-3xl">
                    <AiOutlineGithub className="ml-1" />
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard
