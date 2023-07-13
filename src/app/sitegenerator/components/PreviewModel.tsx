import { TypeHtmlResData } from '@/lib/utils/Types'
import React, { useEffect, useState } from 'react'
import { getHeader, getLandingPage, getAboutPage, getWorkSection, getEducationSection, getContact, getFooter, getJsVar, getMetaData } from './htm';
import { generateFinalPageHtml } from './PageGenerator';
import DownloadButton from './buttons/DownloadButton';
import { CopyIcon } from './buttons/CopyIcon';
import PreviewButton from './buttons/PreviewButton';

import he from 'he';
import Balancer from 'react-wrap-balancer';
import Link from 'next/link';

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
    const contact = getContact(email, socialmedialinks, uniqueid)
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
        <div className='w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:[50%] h-max py-2 mt-20 shadow-md bg-modalbg dark:bg-dark-modalbg border p-4 flex flex-col rounded-md drop-shadow-sm'>
            <p>UNIQUE ID : {uniqueid}</p>
            <CopyIcon uniqueid={uniqueid} />
            <div className='flex justify-center items-center space-x-3'>
                <PreviewButton uniqueid={uniqueid} />
                <DownloadButton htmlpage={htmlpage} />
            </div>
            <p className='text-center mt-5 text-sm'>
                <Balancer>
                    please copy your UNIQUE ID so that you can later download your website index.html file and host it else where ( if you want to, which I know you won&apos;t )
                </Balancer>
            </p>
            <p className='text-center my-2'>---OR---</p>
            <p className='text-sm text-center'>
                <Balancer>
                    Check how to host your website and get a desired Domain. <Link className='text-blue-600 underline' target='_blank' href=''>click here</Link>
                </Balancer>
            </p>
            <p className='text-sm text-center my-3'>
                <Balancer>
                    PS : now plese reconsider visiting different sections of <Link className='text-blue-500 underline' href={'/'}>my website</Link>, you may find some interesting stuffs.<br/>Also please feedback me <Link className='text-blue-500 underline' href={'/contact'}>here</Link>
                </Balancer>
            </p>

        </div>
        // </div>
    )
}

export default PreviewModel
