import React, { FC } from "react";

interface AboutPageProps {
  about: string;
  resumefile?: string;
}

const SiteAboutPage: FC<AboutPageProps> = ({ about, resumefile }) => {
  return (
    <section id="about" className="pt-20 h-max -mt-5 bg-gradient-to-b from-[#1e40af] via-blue-700 to-blue-100 px-4 sm:px-6 lg:px-40 border-black">
      <div className="w-full flex pt-5 pb-10 ">
        <div className="text-center flex flex-col items-center justify-center w-full lg:p-10 md:w-1/2">
          <p className="text-4xl font-bold mb-8">
            Welcome to my website!
          </p>
          <h1 className="text-xl mb-8">
            {about}
          </h1>
          {resumefile && (
            <div className="text-center pb-5">
              <a href={resumefile} download>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  More About Me
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SiteAboutPage;
