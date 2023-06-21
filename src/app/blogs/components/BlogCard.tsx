import { TypeBlogCard } from '@/lib/utils/Types'
import React from 'react'
// import ReadButton from './ReadButton'
import Link from 'next/link'

const BlogCard = ({ id, url, title, intro }: TypeBlogCard) => {
    return (
        <div key={id} className="bg-bgPrimary p-6 flex flex-col justify-between rounded-lg shadow-md border">
            <div className='w-full'>
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">{intro}</p>
            </div>
            <button className="w-max bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link href={`/blogs/${url}`}>
                    Read..
                </Link>
            </button>
        </div>
    )
}

export default BlogCard

