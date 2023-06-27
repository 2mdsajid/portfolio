import TypewriterC from '@/app/components/reused/TypewriterC'
import React from 'react'

const SiteLandingPage = ({ username, cover,professions }: { username: string, cover: string,professions:string[] }) => {
  return (
    <section id="home" className="bg-blue-100 text-black pt-20 w-screen h-max flex flex-col justify-between border-black">
      <div className=' flex flex-col md:flex-row border-black justify-between items-center px-4 sm:px-6 lg:px-40'>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="text-3xl lg:text-[2.5rem] py-0 lg:py-0 font-bold leading-10 lg:leading-normal">
            Hey friend,<br/>
              <h1 className='text-blue-700'>I&apos;m {username}.</h1>
              <h2 className='flex'>__<TypewriterC texts={professions} />
                </h2>
          </div>
        </div>
        <div className='pb-10 lg:pb-0 transform scale-125 pt-5'>
          <img className="w-[16rem] mx-auto py-10" width={600} height={500} src={cover} alt='home pic' />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className='' viewBox="0 0 1440 320">
        <path fill="#1e40af" fill-opacity="1"
          d="M0,0L40,5.3C80,11,160,21,240,37.3C320,53,400,75,480,74.7C560,75,640,53,720,85.3C800,117,880,203,960,229.3C1040,256,1120,224,1200,218.7C1280,213,1360,235,1400,245.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
        </path>
      </svg>
    </section>
  )
}

export default SiteLandingPage
