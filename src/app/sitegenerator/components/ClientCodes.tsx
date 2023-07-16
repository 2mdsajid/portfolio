'use client'

import KeyLayouut from '@/app/components/reused/KeyLayouut';
import SetUser from '@/app/components/reused/SetUser';
import React, { useState } from 'react'
import GeneratorForm from './GeneratorForm';
import SiteGeneratorModel from './SiteGeneratorModel';

const ClientCodes = () => {
    const [isOpen, setIsOpen] = useState(true);
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

export default ClientCodes
