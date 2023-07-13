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
                <div className="flex space-x-2 my-5">
                    <p className=" mb-1">Author:</p>
                    <p className="text-color3 font-medium">Obviously the author is me haha</p>
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
