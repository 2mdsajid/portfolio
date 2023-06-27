import { TypeHtmlResData } from '@/lib/utils/Types'
import React, { useEffect, useState } from 'react'
import { getHeader, getLandingPage, getAboutPage, getWorkSection, getEducationSection, getContact, getFooter, getJsVar, getMetaData } from './htm';
import { generateFinalPageHtml } from './PageGenerator';
import DownloadButton from './buttons/DownloadButton';
import { FRONTEND } from '@/lib/utils/Constants';
import { RiFileCopyLine } from 'react-icons/ri';
import { CopyIcon } from './buttons/CopyIcon';
import router from 'next/router';
import PreviewButton from './buttons/PreviewButton';

import he from 'he';

const PreviewModel = ({ formData }: { formData: TypeHtmlResData }) => {
    const [htmlPage, setHtmlPage] = useState('')

    const {
        uniqueid,
        username,
        email,
        address,
        about,
        cover,
        resumefile,
        schools,
        works,
        professions,
        socialmedialinks } = formData;

    const metadata = getMetaData(about, username)
    const header = getHeader(username, works, schools)
    const landingpage = getLandingPage(username, cover)

    const aboutpage = getAboutPage(about);
    let work;
    if (works.length > 0 && works[0].jobdescription && works[0].jobinstitution) {
        work = getWorkSection(works)
    } else {
        work = ``
    }

    let education;
    if (schools.length > 0 && schools[0].schoolinstitution && schools[0].schooldescription) {
        education = getEducationSection(schools)
    } else {
        education = ``
    }
    const contact = getContact('someone@example.com', socialmedialinks)
    const footer = getFooter(username, address)
    const jsvar = getJsVar(professions)

    const htmlpage = generateFinalPageHtml(
        metadata,
        header,
        aboutpage,
        contact,
        footer,
        jsvar,
        work,
        landingpage,
        education,
    )

    useEffect(() => {
        setHtmlPage(he.decode(htmlpage))
    }, [])

    return (
        // <div dangerouslySetInnerHTML={{ __html: htmlpage }} />

        <iframe
            title="Preview"
            srcDoc={htmlpage}
            sandbox="allow-scripts"
            style={{ width: '100vw', height: '100vh', border: 'none' }}
        />




        // <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 backdrop-blur z-50">


        //     <div className='w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:[50%] max-h-[85vh] overflow-auto mx-auto bg-primarybg border p-4 flex flex-col rounded-md drop-shadow-sm'>
        //         <CopyIcon uniqueid={uniqueid} />
        //         <div className='flex justify-center items-center space-x-3'>
        //             <PreviewButton uniqueid={uniqueid} />
        //             <DownloadButton htmlpage={htmlpage} />
        //         </div>
        //     </div>
        // </div>
    )
}

export default PreviewModel
