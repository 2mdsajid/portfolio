import { blogs } from '@/lib/utils/Constants'
import React from 'react'
import BlogCard from './components/BlogCard'
import KeyLayouut from '../components/reused/KeyLayouut'
import Balancer from 'react-wrap-balancer'

const page = () => {
    return (
        <KeyLayouut>
            <p className='text-center pt-10 mb-5'>
                <Balancer>
                    May be in future I&apos;ll write blogs. I have so many limitations like <span className='text-accent2'> Poor language, poor vocabulary, poor critics, poor thinking capacity, and most importantly poor time management.</span> So I may not be writing blogs!
                </Balancer>
            </p>
            <div className="py-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {blogs.map((blog, index) => (
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
        </KeyLayouut>
    )
}

export default page
