'use client'

import React, { useState } from 'react'
import GeneratorForm from './components/GeneratorForm'
import SiteGeneratorModel from './components/SiteGeneratorModel'

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleModel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen ? <SiteGeneratorModel isOpen={isOpen} handleToggleModel={handleToggleModel}  /> :<GeneratorForm />}
    </div>
  )
}

export default Page
