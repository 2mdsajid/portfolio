import { TypeBlogCard } from '@/lib/utils/Types'
import React from 'react'
// import ReadButton from './ReadButton'
import Link from 'next/link'

const BlogCard = ({ id, url, title, intro, introimage }: TypeBlogCard) => {
    return (
        <div key={id} className=" p-3 flex flex-col justify-between rounded-lg shadow-md border dark:border-gray-500">
            <div className='w-full h-full flex flex-col justify-between'>
                <div className='space-y-5'>
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <img className='' src={introimage} alt={title} />
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{intro}</p>
                </div>
                <Link className='flex items-center justify-center w-max my-2 py-2 px-4 text-white bg-accent2 hover:bg-accent3 rounded-lg font-semibold transition-colors duration-300' href={`/blogs/${url}`}>
                    Read...
                </Link>
            </div>
        </div>
    )
}
export default BlogCard

