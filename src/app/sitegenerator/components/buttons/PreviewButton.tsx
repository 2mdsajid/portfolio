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
            <button className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded border' onClick={routeToPreview}>Preview</button>
        </div>
    )
}

export default PreviewButton
