import Link from 'next/link';
import React from 'react';
import Balancer from 'react-wrap-balancer';
import FooterForm from './FooterForm';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full py-10">
      <div className="flex flex-col-reverse md:flex-row items-start justify-center">
        <div className='w-full  md:w-[50%] pl-12 sm:pl-14 md:pl-0 my-5 md:my-0 flex flex-col text-start md:text-center px-5'>
          <p className=" text-lg">
            &copy; {new Date().getFullYear()} Sajid | All rights reserved.
          </p>
          <p className=' text-lg lg:w-[50%] lg:mx-auto mt-3 '>
            <Balancer>
              ( LoL no! If you liked my website, just go ahead and copy it. here is the <span><Link target='_blank' className='text-blue-600 underline' href={'https://github.com/2mdsajid/portfolio'}>github link</Link></span>)
            </Balancer>
          </p>

        </div>
        <div className='w-full md:w-[50%] my-5 md:my-0 pl-10 sm:pl-12 md:pl-0 px-5 flex flex-col justify-center'>
          <p className=''>Since you have scrolled this much. Don&apos;t extinct like the Dino.</p>
          <FooterForm />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
