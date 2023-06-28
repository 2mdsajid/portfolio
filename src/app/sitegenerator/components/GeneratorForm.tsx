'use client'

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
    <div className='min-h-screen max-h w-screen bg-gray-800 relative'>
      <div className='absolute w-full flex items-center justify-center pt-10 '>
        {showalert && <div className="my-1"><Alert severity={alertseverity} onClose={() => { setshowAlert(false) }}>{alertmessage}</Alert></div>}
      </div>
      {resData?.uniqueid ? <div className='w-full h-full'>
        <PreviewModel formData={resData} />
      </div> :
        <div className='w-full'>
          <form onSubmit={handleSubmit} className="w-full p-6  bg-gray-800 text-white rounded-lg flex flex-col items-center">

            <div className='w-full  flex flex-col md:flex-row '>
              <div className='w-full md:w-[50%] lg:pr-[8.5rem] lg:pl-[2.5rem] max-h-[80vh] overflow-auto lg:border-r'>
                <p className='text-2xl font-semibold py-5'>These are required</p>
                <div className="mb-4">
                  <label htmlFor="name" className=" text-white block font-medium">Name:</label>
                  <input
                    id="name"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="p-2  mt-1 bg-gray-700 text-white block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className=" text-white block font-medium">Email:</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className=" p-2   mt-1 bg-gray-700 text-white block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className=" text-white block font-medium">Address:</label>
                  <input
                    id="address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    className=" p-2   mt-1 bg-gray-700 text-white block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="about" className=" text-white block font-medium">About:</label>
                  <textarea
                    id="about"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    required
                    className=" p-2   mt-1 bg-gray-700 text-white block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  ></textarea>
                </div>

                <div className="mb-4">
                  {cover ? 'cover image uploaded' : <UploadButtonCustom
                    onUploadComplete={handleUploadComplete}
                    onUploadError={handleUploadError}
                  />}
                </div>


                <div className="mb-4">
                  <h2 className="text-xl font-medium mb-2">Social Media Links:</h2>

                  <input
                    id="facebook"
                    placeholder='Facebook'
                    type="text"
                    value={socialmedialinks.facebook}
                    onChange={(e) => handleSocialMediaLinkChange('facebook', e.target.value)}
                    required
                    className=" p-2   mt-1 bg-gray-700 text-white block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />

                  <input
                    id="instagram"
                    type="text"
                    placeholder='Instagram'
                    value={socialmedialinks.instagram}
                    onChange={(e) => handleSocialMediaLinkChange('instagram', e.target.value)}
                    required
                    className=" p-2   mt-1 bg-gray-700 text-white block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />

                  <input
                    id="twitter"
                    type="text"
                    placeholder='Twitter'
                    value={socialmedialinks.twitter}
                    onChange={(e) => handleSocialMediaLinkChange('twitter', e.target.value)}
                    className=" p-2   mt-1 bg-gray-700 text-white block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <div className="mb-4">
                    <p className='text-xl my-3'>Add Hobbies:</p>
                    {professions.map((profession, index) => (
                      <div key={index} className="mb-2">
                        <input
                          type="text"
                          value={profession}
                          onChange={(e) => handleProfessionChange(index, e.target.value)}
                          required
                          className="p-2   mt-1 bg-gray-700 text-white block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    ))}
                    <button type="button" onClick={handleAddProfession} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                      Add
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


              <div className='w-full md:w-[50%] overflow-auto max-h-[80vh] lg:pl-[8.5rem] lg:pr-[2.5rem]'>
                <p className='text-2xl font-semibold py-5'>Not really required!</p>

                <div className='w-full flex justify-evenly border my-5'>
                  <div onClick={() => setCurrentInfo('school')} className=' text-center p-1 cursor-pointer border-r w-[33%]'>Education</div>
                  <div onClick={() => setCurrentInfo('work')} className=' text-center p-1 cursor-pointer border-r w-[33%]'>Work</div>
                  <div onClick={() => setCurrentInfo('resume')} className=' text-center p-1 cursor-pointer  w-[33%]'>Resume</div>
                </div>
                {currentInfo === 'school' && <div className="mb-4">
                  {schools.map((school, index) => (
                    <div key={index} className="mb-4">
                      <label htmlFor={`schoolinstitution-${index}`} className=" text-white block font-medium">Institution:</label>
                      <input
                        id={`schoolinstitution-${index}`}
                        type="text"
                        value={school.schoolinstitution}
                        onChange={(e) => handleSchoolChange(index, 'schoolinstitution', e.target.value)}
                        required
                        className="p-2  mt-1 bg-gray-700 text-white block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <label htmlFor={`schoollevel-${index}`} className=" text-white block font-medium">Level:</label>
                      <input
                        id={`schoollevel-${index}`}
                        type="text"
                        value={school.schoollevel}
                        onChange={(e) => handleSchoolChange(index, 'schoollevel', e.target.value)}
                        required
                        className="p-2  mt-1 bg-gray-700 text-white block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <label htmlFor={`classof-${index}`} className=" text-white block font-medium">Class of:</label>
                      <input
                        id={`classof-${index}`}
                        type="text"
                        value={school.classof}
                        onChange={(e) => handleSchoolChange(index, 'classof', e.target.value)}
                        required
                        className="p-2  mt-1 bg-gray-700 text-white block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <label htmlFor={`schooldescription-${index}`} className=" text-white block font-medium">Description:</label>
                      <input
                        id={`schooldescription-${index}`}
                        type="text"
                        value={school.schooldescription}
                        onChange={(e) => handleSchoolChange(index, 'schooldescription', e.target.value)}
                        required
                        className="p-2  mt-1 bg-gray-700 text-white block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      {/* <label htmlFor={`schoolimage-${index}`} className=" text-white block font-medium">Image:</label>
                    <input
                      id={`schoolimage-${index}`}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleSchoolChange(index, 'schoolimage', e.target.value)}
                      className="mt-1 block"
                    /> */}
                      <p className='my-2 w-full h-1 bg-gray-900'></p>
                    </div>
                  ))}
                  <button type="button" onClick={handleAddSchool} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                    Add School
                  </button>
                </div>}

                {currentInfo === 'work' && <div className="mb-4">
                  {works.map((work, index) => (
                    <div key={index} className="mb-4">
                      <label htmlFor={`jobinstitution-${index}`} className=" text-white block font-medium">Institution:</label>
                      <input
                        id={`jobinstitution-${index}`}
                        type="text"
                        value={work.jobinstitution}
                        onChange={(e) => handleWorkChange(index, 'jobinstitution', e.target.value)}
                        required
                        className=" p-2   p-2  mt-1 bg-gray-700 text-white block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <label htmlFor={`jobrole-${index}`} className=" text-white block font-medium">Role:</label>
                      <input
                        id={`jobrole-${index}`}
                        type="text"
                        value={work.jobrole}
                        onChange={(e) => handleWorkChange(index, 'jobrole', e.target.value)}
                        required
                        className=" p-2   p-2  mt-1 bg-gray-700 text-white block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <label htmlFor={`jobyear-${index}`} className=" text-white block font-medium">Year:</label>
                      <input
                        id={`jobyear-${index}`}
                        type="text"
                        value={work.jobyear}
                        onChange={(e) => handleWorkChange(index, 'jobyear', e.target.value)}
                        required
                        className=" p-2   p-2  mt-1 bg-gray-700 text-white block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <label htmlFor={`jobdescription-${index}`} className=" text-white block font-medium">Description:</label>
                      <input
                        id={`jobdescription-${index}`}
                        type="text"
                        value={work.jobdescription}
                        onChange={(e) => handleWorkChange(index, 'jobdescription', e.target.value)}
                        required
                        className="p-2  mt-1 bg-gray-700 text-white block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <p className='my-2 w-full h-1 bg-gray-900'></p>
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
                  <button type="button" onClick={handleAddWork} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
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
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded border">
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
