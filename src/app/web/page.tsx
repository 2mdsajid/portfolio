import React from 'react'
import Header from './components/Header'

const page = () => {
    return (
        <div className={`min-h-screen w-screen bg-primarybg text-white `}>
            <Header />

            {/* remaining contents */}
            <section className='min-h-screen w-full' style={{ backgroundImage: "url('/bg/bg-32.png')", backgroundSize: "cover" }}>
                {/* Content of the section */}
            </section>



            <section className='min-h-screen w-full'>section 2</section>
            <section className='min-h-screen w-full'>section 3</section>
            <section className='min-h-screen w-full'>section 4</section>
            <section className='min-h-screen w-full'>section 5</section>

        </div>
    )
}

export default page
