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
        <div className="bg-gray-800 shadow-md rounded-lg p-2 w-[90%] border sm:w-[60%] md:w-[45%] lg:w-[35%] xl:w-[25%] m-2">
            <div className="relative">
                <Image
                    src={project.image}
                    alt={project.name}
                    height={300}
                    width={400}
                    className="rounded-lg w-full"
                />
            </div>
            <h2 className="text-lg my-2">{project.name}</h2>
            <p className="text-gray-600 text-md">{project.desc}</p>
            <div className="flex spce-x-4 text-3xl justify-center mt-4">
                <div className="text-gray-400 hover:text-gray-500">
                    <ProjectModel project={project} />
                </div>
                <Link href={project.websitelink} passHref className="text-gray-600 hover:text-gray-500">
                    <BsBrowserChrome className="ml-1" />
                </Link>
                <Link href={project.githublink} passHref className="text-gray-600 hover:text-gray-500">
                    <AiOutlineGithub className="ml-1" />
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard
