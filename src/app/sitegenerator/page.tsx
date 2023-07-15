'use client'

import React, { useState } from 'react'
import GeneratorForm from './components/GeneratorForm'
import SiteGeneratorModel from './components/SiteGeneratorModel'
import KeyLayouut from '../components/reused/KeyLayouut'
import SetUser from '../components/reused/SetUser'

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleModel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
       <SetUser path='sitegenerator' />
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
