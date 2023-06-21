'use client'

import React, { useState } from 'react'
import GeneratorForm from './components/GeneratorForm'
import SiteGeneratorModel from './components/SiteGeneratorModel'

const page = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggleModel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen ? <SiteGeneratorModel isOpen={isOpen} handleToggleModel={handleToggleModel}  /> :<GeneratorForm />}
    </div>
  )
}

export default page
