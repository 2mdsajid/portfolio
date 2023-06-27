import LandingPage from '@/app/components/(section1)/LandingPage';
import { getLandingPage, getAboutPage, getWorkSection, getEducationSection, getContact, getFooter } from '@/app/sitegenerator/components/htm';
import { ParsedHtml } from '@/lib/utils/Functions';
import { TypeHtmlResData } from '@/lib/utils/Types';
import React from 'react'
import SiteLandingPage from './SiteLandingPage';
import SiteAboutPage from './SiteAboutPage';
import SiteWorkSection from './SiteWorkSection';
import SiteSchoolPage from './SiteSchoolPage';
import SiteContactPage from './SiteContactPage';
import SiteFooterPage from './SiteFooterPage';
import SiteHeader from './SiteHeader';

const BodyContent = ({ data }: { data: TypeHtmlResData }) => {

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

    return (
        <div className='bg-blue-100 text-black min-h-screen'>
            {/* <SiteHeader /> */}
           <SiteLandingPage username={username} cover={cover} professions={professions} />
           <SiteAboutPage about={about} resumefile={resumefile} />
           {works.length > 0 && <SiteWorkSection works={works} />}
           {schools.length > 0 && <SiteSchoolPage schools={schools} />}
           <SiteContactPage email={email} socialMediaLinks={socialmedialinks} />
           <SiteFooterPage username={username} address={address} />
        </div>
    )
}

export default BodyContent
