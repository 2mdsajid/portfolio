import { BACKEND, dummyResData } from '@/lib/utils/Constants';
import { TypeHtmlResData, TypeParamProps } from '@/lib/utils/Types'
import React from 'react'
import { getHeader, getLandingPage, getAboutPage, getWorkSection, getEducationSection, getContact, getFooter, getJsVar, getMetaData } from '../../sitegenerator/components/htm';
import { generateFinalPageHtml } from '@/app/sitegenerator/components/PageGenerator';
import { ParsedHtml } from '@/lib/utils/Functions';
import BodyContent from './components/BodyContent';
import SiteHeader from './components/SiteHeader';

type TypeResponse = {
    htmldata: TypeHtmlResData;
    message: string;
    status: number;
    meaning: string;
}

async function fetchData(uniqueid: string) {
    const response = await fetch(BACKEND + `/gethtmlpagedata/${uniqueid}`, { cache: 'no-store' });
    const data: TypeResponse = await response.json();
    return data.htmldata
}


const page = async (props: TypeParamProps) => {
    const uniqueid = props.params.uniqueid
    const data = await fetchData(uniqueid)
    // const data = dummyResData

    const {
        username,
        email,
        address,
        about,
        cover,
        resumefile,
        schools,
        works,
        professions,
        socialmedialinks
    } = data


    const metadata = getMetaData(about, username)
    const header = getHeader(username, works, schools)

    const jsvar = getJsVar(professions)

    // const htmlpage = generateFinalPageHtml(
    //     metadata,
    //     header,
    //     aboutpage,
    //     contact,
    //     footer,
    //     jsvar,
    //     work,
    //     landingpage,
    //     education,
    // )


    return (
        <div className=' bg-blue-200'>
            <SiteHeader username={data.username} works={data.works} schools={data.schools} />
            <BodyContent data={data} />
        </div>
    )
}

export default page

{/* <iframe
    title="Preview"
    srcDoc={htmlpage}
    sandbox="allow-scripts"
    style={{ width: '100vw', height: '100vh', border: 'none' }}
/> */}