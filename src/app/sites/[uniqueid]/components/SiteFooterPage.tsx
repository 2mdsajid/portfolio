import React, { FC } from "react";

interface FooterProps {
  username: string;
  address: string;
}

const SiteFooterPage: FC<FooterProps> = ({ username, address }) => {
  return (
    <footer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,96L34.3,90.7C68.6,85,137,75,206,74.7C274.3,75,343,85,411,106.7C480,128,549,160,617,192C685.7,224,754,256,823,240C891.4,224,960,160,1029,144C1097.1,128,1166,160,1234,170.7C1302.9,181,1371,171,1406,165.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#0099ff] text-lg sm:flex sm:justify-between px-2 sm:px-5 md:px-10 xl:px-40 py-10">
        <div className="foot-info">
          <h1>{username}</h1>
          <address>{address}</address>
        </div>
        <div className="block sm:hidden w-full h-1 my-5 bg-blue-900"></div>
        <div className="foot-copyright f-c sm:border-l-4 border-blue-900 sm:pl-8 sm:w-[50%]">
          <p>©2023 {username} all rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooterPage;
