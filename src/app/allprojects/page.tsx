import React from 'react';
import KeyLayouut from '../components/reused/KeyLayouut';
import { dummySmallProject } from '@/lib/utils/Constants';
import Link from 'next/link';



const Page = () => {
  return (
    <KeyLayouut>
      <div className='w-full h-full pt-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {dummySmallProject.map((project, index) => (
            <div
              key={index}
              className='bg-secondarybg dark:bg-transparent dark:border border-dark-color1 p-4 rounded shadow'
            >
              <h3 className='text-lg font-bold mb-2'>{project.title}</h3>
              <p className='text-color2'>{project.desc}</p>
              <p className='text-color3 my-1'>Language Used : {project.lang}</p>
              <Link
                href={project?.github}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-600 hover:underline'
              >
                View on GitHub
              </Link>
            </div>
          ))}
        </div>
      </div>
    </KeyLayouut>
  );
};

export default Page;
