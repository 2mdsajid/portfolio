import { blogs } from '@/lib/utils/Constants'
import React from 'react'
import BlogCard from './components/BlogCard'
import KeyLayouut from '../components/reused/KeyLayouut'
import Balancer from 'react-wrap-balancer'

export const metadata = {
    title: 'Sajid | Blogs',
    openGraph: {
        title: 'Sajid | Blogs',
        description: 'Blogs written by Sajid aka c0mrad1',
    },
}

const page = () => {
    return (
        <KeyLayouut>
            <p className='text-center py-3 font-semibold italic'>
                <Balancer>
                    &quot; transpiling my hectic life to my best friend who understands only 0s and 1s... &quot;
                </Balancer>
            </p>
            <div className="py-5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {blogs.map((blog, index) => (
                    <BlogCard
                        key={index}
                        id={blog._id}
                        title={blog.title}
                        intro={blog.intro}
                        date={blog.date}
                        url={blog.url}
                        introimage={blog.introimage}
                    />
                ))}
            </div>
        </KeyLayouut>
    )
}

export default page
