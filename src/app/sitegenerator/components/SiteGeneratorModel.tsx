'use client'

import { ParsedHtml } from '@/lib/utils/Functions'
import { TypeProject } from '@/lib/utils/Types'
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import { BiExpand, BiX } from 'react-icons/bi'
import Balancer from 'react-wrap-balancer'

type SiteGeneratorModelProps = {
  isOpen: boolean;
  handleToggleModel: () => void;
};

const SiteGeneratorModel: React.FC<SiteGeneratorModelProps> = ({ isOpen, handleToggleModel }) => {
  // Rest of the component code

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleToggleModel()

  };

  const toggleModel = () => {
    handleToggleModel()
    if (!isOpen) {
      document.body.style.overflow = 'hidden' // Apply the CSS style to hide scrolling
    } else {
      document.body.style.overflow = '' // Reset the CSS style to restore scrolling
    }
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 backdrop-blur z-50">
        <div className='w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:[50%] max-h-[85vh] overflow-auto mx-auto border p-4 flex flex-col rounded-md drop-shadow-sm'>

          {/* Documentation */}
          <h2 className="text-2xl font-bold mb-4 text-dark-color2"> HTML Page Generator</h2>
          <p>Welcome to the  HTML Page Generator! This tool,<span className='text-dark-color2'> created by me obviously</span>, allows you to create static HTML pages that can be hosted on my website or elsewhere. Please read the following and accept the <Link className='text-blue-500 underline'  href={'/tc'}>Terms and Conditions</Link> before going forward.</p>

          <ol className="list-decimal mt-4 pl-6">
            <li>
              <strong className='text-dark-color2'>Ugly Domain:</strong> Your website will be hosted on my website and an auto generated - UGLY domain will be provided. You can also host it elsewhere for a custom domain.
            </li>
            <li>
              <strong className='text-dark-color2'>Fill the Data Correctly:</strong> To ensure the best outcome, please fill in the data accurately and as much as you can. 
            </li>
            <li>
              <strong className='text-dark-color2'>Not Owned by Any Organization:</strong> This Static HTML Page Generator is a free and open-source tool. The generated code is solely your property, and you are responsible for its usage and hosting.
            </li>
          </ol>

          <p className="mt-4">Before that, please complete the following:</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="">
            <div>
              <input
                type="checkbox"
                id="terms"
                required
                className="mr-2 cursor-pointer"
              />
              <span className="text-sm">I accept the <Link className='text-blue-500 underline'  href={'/tc'}>Terms and Conditions</Link></span>
            </div>
        
                
            {/* <div>
              <input
                type="checkbox"
                id="privacy"
                required
                className="mr-2"
              />
              <span className="text-sm">I have read the Privacy Policy.</span>
            </div> */}
            <button type='submit' className="flex items-center justify-center w-max my-2 py-2 px-4 text-white bg-accent2 hover:bg-accent3 rounded-lg font-semibold transition-colors duration-300">
              Generate HTML Page
            </button>
          </form>

        </div>
      </div>

    </>
  )
}

export default SiteGeneratorModel
