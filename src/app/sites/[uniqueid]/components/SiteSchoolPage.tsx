import React, { FC } from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

interface School {
  schoolinstitution: string;
  classof: string;
  schoollevel: string;
  schooldescription: string;
}

interface EducationSectionProps {
  schools: School[];
}

const SiteSchoolPage: FC<EducationSectionProps> = ({ schools }) => {
  const schoolSection = schools.map((school, index) => {
    const { schoolinstitution, classof, schoollevel, schooldescription } = school;
    return (
      <div
        className="school w-[90%] sm:w-[75%] md:w-[65%] lg:w-[55%] xl:w-[45%] mx-auto bg-blue-200 rounded shadow-md relative my-10"
        key={index}
      >
        <div className="absolute -top-6 left-5">
          <div className="flex items-center justify-center text-3xl border w-[4rem] h-[4rem] bg-blue-200 rounded-full">
            <FaGraduationCap />
          </div>
        </div>
        <div className="school-info p-2">
          <div className="school-info-title flex items-end mt-10">
            <p className="school-title text-3xl font-bold">{schoolinstitution}</p>
            <p className="batch-date text-sm text-red-900">{classof}</p>
          </div>
          <p className="school-level text-xl font-semibold my-3">{schoollevel}</p>
          <p className="school-experience py-1 text-blue-700">{schooldescription}</p>
        </div>
      </div>
    );
  });

  return (
    <section id="education" className="pt-20 w-screen px-2 sm:px-5 md:px-10 xl:px-40 py-10">
      <h1 className="text-4xl font-bold mb-5 md:mb-20 lg:mb-26">Education</h1>
      <div className="w-full h-full">{schoolSection}</div>
    </section>
  );
};

export default SiteSchoolPage;
