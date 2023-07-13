'use client'

import { FRONTEND } from '@/lib/utils/Constants'
import { useRouter } from 'next/navigation'
// import router from 'next/router'
import React from 'react'

const PreviewButton = ({uniqueid}:{uniqueid:string}) => {

    const router = useRouter()

    const routeToPreview = () => {
        const url = `/sites/${uniqueid}`;

        window?.open(url, '_blank');

        // router.push(`/sites/${uniqueid}}`)
    }
    
    return (
        <div>
            <button className='flex items-center justify-center w-max py-2 px-4 text-white bg-accent2 hover:bg-color1 rounded-lg font-semibold transition-colors duration-300' onClick={routeToPreview}>Preview</button>
        </div>
    )
}

export default PreviewButton
