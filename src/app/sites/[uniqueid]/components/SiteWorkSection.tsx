import React, { FC } from "react";
import { BsBag } from "react-icons/bs";
import { FaBabyCarriage } from "react-icons/fa";

interface Work {
  jobinstitution: string;
  jobrole: string;
  jobyear: string;
  jobdescription: string;
}

interface WorkSectionProps {
  works: Work[];
}

const SiteWorkSection: FC<WorkSectionProps> = ({ works }) => {
  const workSection = works.map((work, index) => {
    const { jobinstitution, jobrole, jobyear, jobdescription } = work;
    if (index % 2 === 0) {
      return (
        <div className="w-full border-black flex justify-end" key={index}>
          <div className="work-detail-info f-c w-[70%] md:w-[45%] flex flex-col border-blue-900 items-start pb-4">
            <div className="rounded shadow-md bg-blue-200 p-2">
              <h1 className="font-bold text-3xl mb-4">{jobinstitution}</h1>
              <h3 className="text-lg text-blue-800 mb-2">
                {jobrole} <span className="work-date text-sm">{jobyear}</span>
              </h3>
              <p className="text-sm">{jobdescription}</p>
            </div>
          </div>
          <div className="w-[15%] md:w-[10%] flex flex-col items-center">
            {/* <img src="res\work\seds.jpg" className="w-[50%] rounded-full shadow-md" alt=""> */}
            <i className="fas fa-briefcase border p-3 rounded-full shadow-md"></i>
            <div className="w-1 h-full bg-blue-900"></div>
          </div>
          <div className="w-[5%] md:w-[45%] md:block"></div>
        </div>
      );
    } else {
      return (
        <div className="w-full border-black flex flex-row-reverse md:flex-row" key={index}>
          <div className="w-[5%] md:w-[45%] md:block"></div>
          <div className="w-[15%] md:w-[10%] flex flex-col items-center">
            {/* <img src="res\work\seds.jpg" className="w-[50%] rounded-full shadow-md" alt=""> */}
            <i className="fas fa-briefcase border p-3 rounded-full shadow-md"></i>
            <div className="w-1 h-full bg-blue-900"></div>
          </div>
          <div className="work-detail-info f-c w-[70%] md:w-[45%] flex flex-col border-blue-900 items-start pb-4">
            <div className="rounded shadow-md bg-blue-200 p-2">
              <h1 className="font-bold text-3xl mb-4">{jobinstitution}</h1>
              <h3 className="text-lg text-blue-800 mb-2">
                {jobrole}<span className="work-date text-sm">{jobyear}</span>
              </h3>
              <p className="text-sm">{jobdescription}</p>
            </div>
          </div>
        </div>
      );
    }
  });

  const GeneratedWork = ({ keyprop, work }: { keyprop: number, work: Work }) => {
    return (
      <div key={keyprop} className='w-full h-full flex justify-center text-black md:px-10 lg:px-44 xl:px-52 '>
        <div className={`w-full border-black flex ${keyprop % 2 !== 0 && 'md:flex-row-reverse'} justify-end`}>
          <div className="work-detail-info f-c w-[70%] md:w-[45%] flex flex-col border-blue-900 items-start pb-4 ">
          <div className="rounded shadow-md bg-blue-200 p-2">
              <h1 className="font-bold text-3xl mb-4">{work.jobinstitution}</h1>
              <h3 className="text-lg text-blue-800 mb-2">
                {work.jobrole}<span className="work-date text-sm">{work.jobyear}</span>
              </h3>
              <p className="text-sm">{work.jobdescription}</p>
            </div>
          </div>
          <div className="w-[15%] md:w-[10%] flex flex-col items-center">
            <i className="fas fa-briefcase border p-3 rounded-full shadow-md">
              <BsBag/>
            </i>
            <div className="w-1 h-full bg-blue-900"></div>
          </div>
          <div className="w-[5%] md:w-[45%] md:block"></div>
        </div>
      </div>
    )
  }


  return (
    <section id="work" className="sm:pt-20 w-screen max-h px-2 sm:px-5 md:px-10 xl:px-40 py-10">
      <h1 className="text-4xl font-bold mb-5 md:mb-8 lg:mb-10">Work</h1>
      <div className='w-full h-full'>
        {works.map((work, index, array) => {
          return <GeneratedWork key={index} keyprop={index} work={work} />
        })}
      </div>
    </section>
  );
};

export default SiteWorkSection
