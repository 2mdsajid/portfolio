import { TypeParamProps } from '@/lib/utils/Types'
import React from 'react'
// import SingleBlog from './components/SingleBlog';
import { blogs } from '@/lib/utils/Constants';
import SingleBlog from './components/SingleBlog';
import KeyLayouut from '@/app/components/reused/KeyLayouut';

const BACKEND = ''

async function fetchData(url: string) {
  const blog = blogs.filter(blog => blog.url === url)
  return blog
}

// async function fetchData(level: string) {
//   const response = await fetch(BACKEND + `/getsingleblog/${level}`, { next: { revalidate: 0 } });
//   const data = await response.json();
//   return data.data;
// }



const page = async (props: TypeParamProps) => {
  const url = props.params.url
  const blog = blogs.find(blog => blog.url === url);
  return (
    <KeyLayouut>
      {blog ? (
        <SingleBlog blog={blog} />
      ) : (
        <p>Loading blog...</p>
      )}
    </KeyLayouut>
  )
}

export default page
