'use client'

import { BACKEND } from '@/lib/utils/Constants'
// import { setUniqueUserId } from '@/lib/utils/Functions'
// import { setUniqueUserId } from '@/lib/utils/Functions'
import React, { useEffect } from 'react'

const SetUser = ({ path }: { path: string }) => {

  const setUniqueUserId = async (path: string) => {
    const res = await fetch(`${BACKEND}/addvisitor/${path}`)
    const data = await res.json()
    console.log("🚀 ~ file: SetUser.tsx:13 ~ setUniqueUserId ~ data:", path)
  }
  useEffect(() => {
    setUniqueUserId(path)
  }, [])
  return (
    <></>
  )
}

export default SetUser
