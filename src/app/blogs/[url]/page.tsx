import { TypeParamProps } from '@/lib/utils/Types'
import React from 'react'
import SingleBlog from './components/SingleBlog';

const BACKEND = ''

async function fetchData(level: string) {
  const response = await fetch(BACKEND + `/getsingleblog/${level}`, { next: { revalidate: 0 } });
  const data = await response.json();
  return data.data;
}


const page = async (props: TypeParamProps) => {
  const url = props.params.url
  const blog = await fetchData(props.params.url)

  return (
    <div>
      <SingleBlog blog={blog} />
    </div>
  )
}

export default page
