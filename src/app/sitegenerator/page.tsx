'use client'

import React, { useState } from 'react'
import GeneratorForm from './components/GeneratorForm'
import SiteGeneratorModel from './components/SiteGeneratorModel'
import KeyLayouut from '../components/reused/KeyLayouut'

const Page = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggleModel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen ? 
      <SiteGeneratorModel isOpen={isOpen} handleToggleModel={handleToggleModel} /> :
        <KeyLayouut>
          <GeneratorForm />
        </KeyLayouut>
      }
    </div>
  )
}

export default Page
