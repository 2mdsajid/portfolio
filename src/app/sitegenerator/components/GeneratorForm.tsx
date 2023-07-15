'use client'

import './sitegen.css'
import React, { useState } from 'react'
import DownloadButton from './buttons/DownloadButton'
import { TypeHtmlPageData, TypeHtmlResData, TypeSchool, TypeSocialMediaLinks, TypeWork } from '@/lib/utils/Types';
import { getHeader, getLandingPage, getAboutPage, getWorkSection, getEducationSection, getContact, getFooter, getJsVar, getMetaData } from './htm';
import { generateFinalPageHtml } from './PageGenerator';
import UploadButtonCustom from '@/app/sitegenerator/components/buttons/UploadButtonCustom';
import { Alert, AlertColor } from '@mui/material';
import PreviewModel from './PreviewModel';
import { BACKEND, dummyResData } from '@/lib/utils/Constants';

type Props = {
  onSubmit: (data: TypeHtmlPageData) => void;
};

const GeneratorForm = () => {

  const [currentInfo, setCurrentInfo] = useState('school')

  const [showPreviewModel, setShowPreviewModel] = useState(true)
  const [resData, setResData] = useState<TypeHtmlResData>()

  const [alertseverity, setalertSeverity] = useState<AlertColor>('success');
  const [alertmessage, setalertMessage] = useState<string>('successfully generated');
  const [showalert, setshowAlert] = useState<boolean>(false)
  const [showprogress, setshowProgress] = useState<boolean>(false)


  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [about, setAbout] = useState('');
  const [cover, setCover] = useState<string>('');
  const [resumefile, setResumefile] = useState<File | null>(null);
  const [schools, setSchools] = useState<TypeSchool[]>([]);
  const [works, setWorks] = useState<TypeWork[]>([]);
  const [professions, setProfessions] = useState<string[]>([]);
  const [socialmedialinks, setSocialMediaLinks] = useState<TypeSocialMediaLinks>({
    facebook: '',
    instagram: '',
    twitter: '',
    youtube: '',
    telegram: '',
  });

  const [htmlpage, setHtmlPage] = useState('')


  const handleAddSchool = () => {
    setSchools([...schools, { schoolinstitution: '', schoollevel: '', classof: '', schooldescription: '', schoolimage: '' }]);
  };

  const handleAddWork = () => {
    setWorks([...works, { jobinstitution: '', jobrole: '', jobyear: '', jobdescription: '', jobimage: '' }]);
  };

  const handleAddProfession = () => {
    setProfessions([...professions, '']);
  };

  const handleSchoolChange = (index: number, field: keyof TypeSchool, value: string) => {
    const updatedSchools = [...schools];
    updatedSchools[index][field] = value;
    setSchools(updatedSchools);
  };

  const handleWorkChange = (index: number, field: keyof TypeWork, value: string) => {
    const updatedWorks = [...works];
    updatedWorks[index][field] = value;
    setWorks(updatedWorks);
  };

  const handleProfessionChange = (index: number, value: string) => {
    const updatedProfessions = [...professions];
    updatedProfessions[index] = value;
    setProfessions(updatedProfessions);
  };

  const handleSocialMediaLinkChange = (field: keyof TypeSocialMediaLinks, value: string) => {
    setSocialMediaLinks((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setshowProgress(true)

    // Create form data object
    const formData = {
      username,
      email,
      address,
      about,
      cover,
      resumefile,
      schools,
      works,
      professions,
      socialmedialinks,
    };

    try {
      const response = await fetch(BACKEND + '/addhtmlpage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json()
      setshowAlert(true)
      setalertMessage(data.message)
      setshowProgress(false)

      if (data.status === 201) {
        setalertSeverity('success')
        setResData(data.savedHTMLPage)
        setShowPreviewModel(true)
        return
      } else {
        setalertSeverity('warning')
      }

      setTimeout(() => {
        setshowAlert(false)
      }, 2000);

    } catch (error) {
      console.error('Error saving note:', error);
      // setalertMessage(error?.message)
    }

  };


  type ResponseType = {
    fileKey: string;
    fileUrl: string;
  }

  const handleUploadComplete = (response: ResponseType[]) => {
    console.log('Upload complete:', response);
    setCover(response[0].fileUrl)

  };

  const handleUploadError = (error: any) => {
    console.error('Upload error:', error);
    // Handle the upload error
  };


  return (
    <div className=' w-screen bg-primarybg dark:bg-dark-primarybg relative'>
      <div className='absolute w-full flex items-center justify-center pt-10 '>
        {showalert && <div className="my-1"><Alert severity={alertseverity} onClose={() => { setshowAlert(false) }}>{alertmessage}</Alert></div>}
      </div>
      {resData?.uniqueid ? <div className='w-full h-full'>
        <PreviewModel formData={resData} />
      </div>
        :
        <div className='w-full'>
          <form onSubmit={handleSubmit} className="w-full p-6  rounded-lg flex flex-col items-center">

            <div className='w-full md:w-[50%] flex flex-col '>
              <div className='w-full '>
                <div className="w-full my-3 md:my-6 flex flex-row justify-center items-center">
                  <div className="grow h-[0.1rem] bg-gray-500"></div>
                  <div className="text-sm md:text-lg mx-1 capitalize">You have to fill all these</div>
                  <div className="grow h-[0.1rem] bg-gray-500"></div>
                </div>
                <div className="mb-4 relative">
                  <input
                    id="name"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder='First Name'
                    autoComplete='off'
                    className="peer h-10 w-full bg-primarybg dark:bg-transparent border pl-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md"
                  />
                  <label htmlFor="email" className="absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-dark-primarybg  px-1 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-color1  peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-dark-primarybg peer-focus:px-1  peer-focus:text-xs">First Name</label>
                </div>
                <p className='text-sm'>Use corect email. You can receive up to 50 mails through your contact form !</p>
                <div className="my-4 relative">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder='Email'
                    autoComplete='off'
                    className="peer h-10 w-full bg-primarybg  dark:bg-transparent border pl-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md"
                  />
                  <label htmlFor="email" className="absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-dark-primarybg  px-1 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-color1 peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-dark-primarybg peer-focus:px-1  peer-focus:text-xs">Email</label>
                </div>
                <div className="my-4 relative">
                  <input
                    id="address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    placeholder='Addresss'
                    autoComplete='off'
                    className="peer h-10 w-full bg-primarybg  dark:bg-transparent border pl-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md"
                  />
                  <label htmlFor="address" className="absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-dark-primarybg  px-1 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-color1 peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-dark-primarybg peer-focus:px-1  peer-focus:text-xs">Address</label>
                </div>
                <div className="my-4 relative">
                  <textarea
                    id="about"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    required
                    placeholder='About'
                    autoComplete='off'
                    className="peer h-20 w-full bg-primarybg  dark:bg-transparent border pl-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md"
                  ></textarea>
                  <label htmlFor="about" className="absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-dark-primarybg  px-1 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-color1 peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-dark-primarybg peer-focus:px-1  peer-focus:text-xs">About</label>
                </div>
                <div className="my-4 relative">
                  <p className="text-sm">Cover Photo - Choose (1:1 preferred) and then Upload !</p>
                  {cover ? 'cover image uploaded' : <UploadButtonCustom
                    onUploadComplete={handleUploadComplete}
                    onUploadError={handleUploadError}
                  />}
                </div>
                <div className="my-4">
                  <h2 className="text-lg mb-2">Social Media Links:</h2>
                  <p className='text-sm'>facebook profile link is required</p>
                  <div className='my-4 relative'>
                    <input
                      id="facebook"
                      placeholder='Facebook'
                      type="text"
                      value={socialmedialinks.facebook}
                      onChange={(e) => handleSocialMediaLinkChange('facebook', e.target.value)}
                      required
                      autoComplete='off'
                      className="peer h-10 w-full bg-primarybg  dark:bg-transparent border pl-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md "
                    />
                    <label htmlFor="facebook" className="absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-dark-primarybg  px-1 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-color1 peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-dark-primarybg peer-focus:px-1  peer-focus:text-xs">Facebook Link*</label>
                  </div>

                  <div className='my-4 relative'>
                    <input
                      id="instagram"
                      placeholder='Instagram'
                      type="text"
                      value={socialmedialinks.instagram}
                      onChange={(e) => handleSocialMediaLinkChange('instagram', e.target.value)}
                      autoComplete='off'
                      className="peer h-10 w-full bg-primarybg  dark:bg-transparent border pl-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md "
                    />
                    <label htmlFor="instagram" className="absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-dark-primarybg  px-1 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-color1 peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-dark-primarybg peer-focus:px-1  peer-focus:text-xs">Instagram Link</label>
                  </div>

                  <div className='my-4 relative'>
                    <input
                      id="twitter"
                      placeholder='Twitter'
                      type="text"
                      value={socialmedialinks.twitter}
                      onChange={(e) => handleSocialMediaLinkChange('twitter', e.target.value)}
                      autoComplete='off'
                      className="peer h-10 w-full bg-primarybg  dark:bg-transparent border pl-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md "
                    />
                    <label htmlFor="twitter" className="absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-dark-primarybg  px-1 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-color1 peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-dark-primarybg peer-focus:px-1  peer-focus:text-xs">Twitter Link</label>
                  </div>

                  <div className="mb-4">
                    <p className='text-lg my-3'>Add Hobbies:</p>
                    {professions.map((profession, index) => (
                      <div key={index} className="my-4 relative">
                        <input
                          type="text"
                          value={profession}
                          onChange={(e) => handleProfessionChange(index, e.target.value)}
                          placeholder={`Hobby ${index + 1}`}
                          required
                          className="peer h-10 w-full bg-primarybg  dark:bg-transparent border pl-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md"
                        />
                        <label htmlFor="hobby" className="absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-dark-primarybg  px-1 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-color1 peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-dark-primarybg peer-focus:px-1  peer-focus:text-xs">{`Hobby ${index + 1}`}</label>
                      </div>
                    ))}
                    <button type="button" onClick={handleAddProfession} className="flex items-center justify-center w-max py-2 px-4 text-white bg-accent2 hover:bg-accent3 rounded-lg font-semibold transition-colors duration-300">
                      Click To Add Hobby
                    </button>
                  </div>
                  {/*
    <label htmlFor="linkedin" className="block font-medium">LinkedIn:</label>
     <input
      id="linkedin"
      type="text"
      value={socialmedialinks.linkedin}
      onChange={(e) => handleSocialMediaLinkChange('linkedin', e.target.value)}
      required
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    /> */}
                </div>
              </div>

              <div className="w-full my-3 md:my-6 flex flex-row justify-center items-center">
                <div className="grow h-[0.1rem] bg-gray-500"></div>
                <div className="text-sm md:text-lg mx-1 capitalize">You can leave these (if already bored)</div>
                <div className="grow h-[0.1rem] bg-gray-500"></div>
              </div>


              <div className='w-full overflow-auto '>
                {/* <p className='text-2xl font-semibold py-5'>Not really required!</p> */}
                <div className='w-full flex justify-evenly border my-5'>
                  <div onClick={() => setCurrentInfo('school')} className={` text-center p-1 cursor-pointer border-r w-[33%] ${currentInfo === 'school' && 'bg-secondarybg dark:bg-dark-secondarybg'}`}>Education</div>
                  <div onClick={() => setCurrentInfo('work')} className={` text-center p-1 cursor-pointer border-r w-[33%] ${currentInfo === 'work' && 'bg-secondarybg dark:bg-dark-secondarybg'}`}>Work</div>
                  <div onClick={() => setCurrentInfo('resume')} className={` text-center p-1 cursor-pointer  w-[33%] ${currentInfo === 'resume' && 'bg-secondarybg dark:bg-dark-secondarybg'}`}>Resume</div>
                </div>
                {currentInfo === 'school' && <div className="mb-4">
                  {schools.map((school, index) => (
                    <div key={index} className="mb-4">
                      <div className='my-3 relative' >
                        <input
                          id={`schoolinstitution-${index}`}
                          type="text"
                          value={school.schoolinstitution}
                          onChange={(e) => handleSchoolChange(index, 'schoolinstitution', e.target.value)}
                          required
                          className="peer h-10 w-full bg-primarybg  dark:bg-transparent border pl-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md"
                        />
                        <label htmlFor={`schoolinstitution-${index}`} className=" absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-dark-primarybg  px-1 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-color1 peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-dark-primarybg peer-focus:px-1  peer-focus:text-xs">Institution</label>
                      </div>
                      <div className='my-3 relative' >
                        <input
                          id={`schoollevel-${index}`}
                          type="text"
                          value={school.schoollevel}
                          onChange={(e) => handleSchoolChange(index, 'schoollevel', e.target.value)}
                          required
                          className="peer h-10 w-full bg-primarybg  dark:bg-transparent border pl-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md"
                        />
                        <label htmlFor={`schoollevel-${index}`} className=" absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-dark-primarybg  px-1 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-color1 peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-dark-primarybg peer-focus:px-1  peer-focus:text-xs">Level</label>
                      </div>
                      <div className='my-3 relative' >
                        <input
                          id={`classof-${index}`}
                          type="text"
                          value={school.classof}
                          onChange={(e) => handleSchoolChange(index, 'classof', e.target.value)}
                          required
                          className="peer h-10 w-full bg-primarybg  dark:bg-transparent border pl-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md"
                        />
                        <label htmlFor={`classof-${index}`} className=" absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-dark-primarybg  px-1 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-color1 peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-dark-primarybg peer-focus:px-1  peer-focus:text-xs">Class of</label>
                      </div>
                      <div className='my-3 relative' >
                        <input
                          id={`schooldescription-${index}`}
                          type="text"
                          value={school.schooldescription}
                          onChange={(e) => handleSchoolChange(index, 'schooldescription', e.target.value)}
                          required
                          className="peer h-10 w-full bg-primarybg  dark:bg-transparent border pl-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md"
                        />
                        <label htmlFor={`schooldescription-${index}`} className="absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-dark-primarybg  px-1 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-color1 peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-dark-primarybg peer-focus:px-1  peer-focus:text-xs">Description</label>
                      </div>
                      {/* <label htmlFor={`schoolimage-${index}`} className=" text-white block font-medium">Image:</label>
                    <input
                      id={`schoolimage-${index}`}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleSchoolChange(index, 'schoolimage', e.target.value)}
                      className="mt-1 block"
                    /> */}
                      {schools.length > 1 && <p className='my-4 w-full h-1 bg-gray-900'></p>}
                    </div>
                  ))}
                  <button type="button" onClick={handleAddSchool} className="flex items-center justify-center w-max py-2 px-4 text-white bg-accent2 hover:bg-accent3 rounded-lg font-semibold transition-colors duration-300">
                    Add School
                  </button>
                </div>}

                {currentInfo === 'work' && <div className="mb-4">
                  {works.map((work, index) => (
                    <div key={index} className="mb-4">
                      <div className='my-3 relative'>
                        <input
                          id={`jobinstitution-${index}`}
                          type="text"
                          value={work.jobinstitution}
                          onChange={(e) => handleWorkChange(index, 'jobinstitution', e.target.value)}
                          required
                          className="peer h-10 w-full bg-primarybg  dark:bg-transparent border pl-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md"
                        />
                        <label htmlFor={`jobinstitution-${index}`} className=" absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-dark-primarybg  px-1 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-color1 peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-dark-primarybg peer-focus:px-1  peer-focus:text-xs">Institution</label>
                      </div>
                      <div className='my-3 relative'>
                        <input
                          id={`jobrole-${index}`}
                          type="text"
                          value={work.jobrole}
                          onChange={(e) => handleWorkChange(index, 'jobrole', e.target.value)}
                          required
                          className="peer h-10 w-full bg-primarybg  dark:bg-transparent border pl-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md"
                        />
                        <label htmlFor={`jobrole-${index}`} className=" absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-dark-primarybg  px-1 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-color1 peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-dark-primarybg peer-focus:px-1  peer-focus:text-xs">Role</label>
                      </div>
                      <div className='my-3 relative'>
                        <input
                          id={`jobyear-${index}`}
                          type="text"
                          value={work.jobyear}
                          onChange={(e) => handleWorkChange(index, 'jobyear', e.target.value)}
                          required
                          className="peer h-10 w-full bg-primarybg  dark:bg-transparent border pl-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md"
                        />
                        <label htmlFor={`jobyear-${index}`} className="absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-dark-primarybg  px-1 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-color1 peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-dark-primarybg peer-focus:px-1  peer-focus:text-xs">Year</label>
                      </div>
                      <div className='my-3 relative'>
                        <input
                          id={`jobdescription-${index}`}
                          type="text"
                          value={work.jobdescription}
                          onChange={(e) => handleWorkChange(index, 'jobdescription', e.target.value)}
                          required
                          className="peer h-10 w-full bg-primarybg  dark:bg-transparent border pl-3 rounded-md placeholder-transparent focus:outline-none text-color1 dark:text-dark-color1 shadow-md"
                        />
                        <label htmlFor={`jobdescription-${index}`} className=" absolute left-2 -top-2 text-color1 dark:text-dark-color1 bg-primarybg dark:bg-dark-primarybg  px-1 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-color1 peer-placeholder-shown:dark:text-gray-500 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-color1 peer-focus:dark:text-dark-color1 peer-focus:bg-primarybg peer-focus:dark:bg-dark-primarybg peer-focus:px-1  peer-focus:text-xs">Description</label>
                      </div>
                      {works.length > 1 && <p className='my-4 w-full h-1 bg-gray-900'></p>}
                      {/* <label htmlFor={`jobimage-${index}`} className=" text-white block font-medium">Image:</label>
                    <input
                    id={`jobimage-${index}`}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleWorkChange(index, 'jobimage', e.target.value)}
                    className="mt-1 block"
                  /> */}
                    </div>
                  ))}
                  <button type="button" onClick={handleAddWork} className="flex items-center justify-center w-max py-2 px-4 text-white bg-accent2 hover:bg-accent3 rounded-lg font-semibold transition-colors duration-300">
                    Add Work
                  </button>
                </div>}
                {currentInfo === 'resume' && <div className="mb-4">
                  <p>coming soon....</p>
                  {/* <label htmlFor="resumefile" className=" text-white block font-medium">Resume:</label>
                <input
                  id="resumefile"
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setResumefile(e.target.files ? e.target.files[0] : null)}
                  className="mt-1 block"
                /> */}
                </div>}
              </div>


            </div>
            <div className="flex justify-center space-x-2 my-10  w-full">
              <button type="submit" className="flex items-center justify-center w-max py-2 px-4 text-white bg-accent2 hover:bg-accent3 rounded-lg font-semibold transition-colors duration-300">
                {showprogress ? 'Generating' : "Generate"}
              </button>
            </div>
          </form>

        </div>
      }
    </div>
  )
}

export default GeneratorForm
