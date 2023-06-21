import { ParsedHtml } from '@/lib/utils/Functions'
import { TypeSingleBlog } from '@/lib/utils/Types'
import React from 'react'

const SingleBlog = ({blog}:{blog:TypeSingleBlog}) => {
    
    return (
        <div className="my-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row mb-6 justify-between">
                <div className="flex flex-col ">
                    <p className="text-gray-500 mb-1">Published on:</p>
                    {blog.date && <p className="text-gray-700 font-medium">
                        {new Date(blog.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>}
                </div>
                <div className="flex flex-col ">
                    <p className="text-gray-500 ">Keywords:</p>
                    <p className='flex flex-wrap text-gray-700 font-medium'>
                        {blog.keywords?.map((keyword:string, index:number) => (
                            <p key={index}>{keyword},&nbsp;</p>
                        ))}
                    </p>
                </div>
                <div className="flex flex-col">
                    <p className="text-gray-500 mb-1">Author:</p>
                    <p className="text-gray-700 font-medium">{blog.author}</p>
                </div>
            </div>
            <div className="border-t border-gray-300 py-6">
                <p className="text-gray-700 text-lg leading-7 formdata-content-class">
                    {ParsedHtml(blog.content)}
                </p>
            </div>
        </div>
    )
}

export default SingleBlog
