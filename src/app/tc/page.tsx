import React from 'react'
import Balancer from 'react-wrap-balancer'
import SetUser from '../components/reused/SetUser'

const page = () => {
  return (
    <div className='min-h-screen w-screen bg-primarybg dark:bg-dark-primarybg flex items-center'>
       <SetUser path='tc' />
      <p className='text-center'>
        <Balancer>
            LOL ! you came here for Terms & Conditions. HaHa. Who reads terms and conditions. Go back and just tick the checkbox and make your website. LOL ! 
        </Balancer>
      </p>
    </div>
  )
}

export default page
