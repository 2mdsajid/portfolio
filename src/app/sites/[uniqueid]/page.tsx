import { BACKEND } from '@/lib/utils/Constants';
import { TypeHtmlResData, TypeParamProps } from '@/lib/utils/Types'
import React from 'react'
import { getHeader, getLandingPage, getAboutPage, getWorkSection, getEducationSection, getContact, getFooter, getJsVar, getMetaData } from '../../sitegenerator/components/htm';
import { generateFinalPageHtml } from '@/app/sitegenerator/components/PageGenerator';
import { ParsedHtml } from '@/lib/utils/Functions';

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


    return (
        <div>
            {ParsedHtml(htmlpage)}
        </div>
    )
}

export default page
