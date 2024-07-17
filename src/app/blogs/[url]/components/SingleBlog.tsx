import FooterForm from '@/app/components/footer/FooterForm';
import { ParsedHtml } from '@/lib/utils/Functions'
import { TypeSingleBlog } from '@/lib/utils/Types'
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw';
import AnonymousMessage from './AnonymousMessage';

type thispageprops = {
    blog: TypeSingleBlog;
}

const SingleBlog = ({ blog }: thispageprops) => {

    return (
        <div className="py-10 w-full h-full max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <div className="flex items-center gap-5">
                <div className="flex space-x-2 my-5">
                    <p className="mb-1 font-semibold">Author:</p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Obviously it&apos;s me haha !</p>
                </div>
                <div className="flex space-x-2">
                    <p className="mb-1 font-semibold">Date:</p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{blog.date}</p>
                </div>
            </div>
            <div className="border-t border-gray-300 dark:border-gray-700 py-6">
                <div className="text-lg leading-7 formdata-content-class prose prose-lg dark:prose-invert min-w-full">
                    {/* {ParsedHtml(blog.content)} */}
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{blog.content}</ReactMarkdown>
                </div>
            </div>
            <div className="border-t border-gray-300 dark:border-gray-700 py-6">
                <AnonymousMessage />
            </div>
        </div>
    )
}

export default SingleBlog
