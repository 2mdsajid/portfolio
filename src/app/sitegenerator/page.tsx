import React, { useState } from 'react'
import ClientCodes from './components/ClientCodes'

export const metadata = {
  title: 'Site Generator',
  openGraph: {
    title: 'Site Generator',
    description: 'Static Sites generator by Sajid aka c0mrad1',
  },
}

const Page = () => {
  return (
    <>
      <ClientCodes />
    </>
  )
}

export default Page
