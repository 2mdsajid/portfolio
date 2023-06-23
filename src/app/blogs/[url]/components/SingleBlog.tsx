import { ParsedHtml } from '@/lib/utils/Functions'
import { TypeSingleBlog } from '@/lib/utils/Types'
import React from 'react'

type thispageprops = {
    blog: TypeSingleBlog;
}

const SingleBlog = ({ blog }:thispageprops ) => {

    return (
        <div className="py-10 w-full h-full">
            <h1 className="text-4xl font-bold  mb-4">{blog.title}</h1>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row mb-6 justify-between">
                <div className="flex flex-col ">
                    <p className=" mb-1">Published on:</p>
                    {blog.date && <p className=" font-medium">
                        {new Date(blog.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>}
                </div>
                <div className="flex flex-col ">
                    <p className=" ">Keywords:</p>
                    <p className='flex flex-wrap  font-medium'>
                        {blog.keywords?.map((keyword: string, index: number) => (
                            <p key={index}>{keyword},&nbsp;</p>
                        ))}
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className=" mb-1">Author:</p>
                    <p className=" font-medium">{blog.author}</p>
                </div>
            </div>
            <div className="border-t border-gray-300 py-6">
                <p className=" text-lg leading-7 formdata-content-class">
                    {ParsedHtml(blog.content)}
                </p>
            </div>
        </div>
    )
}

export default SingleBlog
