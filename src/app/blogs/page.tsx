import { blogsdata } from '@/lib/utils/Constants'
import React from 'react'
import BlogCard from './components/BlogCard'

const page = () => {
    return (
        <div className='min-h-screen w-screen  bg-primarybg text-white px-4 md:px-10 lg:px-40 xl:px-44 py-5'>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {blogsdata.map((blog, index) => (
                    <BlogCard
                        key={index}
                        id={blog._id}
                        title={blog.title}
                        intro={blog.intro}
                        date={blog.date}
                        url={blog.url}
                    />
                ))}
            </div>
        </div>
    )
}

export default page
