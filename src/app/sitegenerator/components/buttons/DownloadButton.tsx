'use client'
import { writeFile } from "@/lib/utils/Functions";
import { useRouter } from "next/navigation";
import React from "react";

const DownloadButton = ({ htmlpage }:{htmlpage:string}) => {
  const router = useRouter()
  const handleClick = () => {
    const content = htmlpage;
    const filename = 'index.html';

    writeFile(content, `${filename}`); // Specify the path as '/public/filename'

    const downloadLink = document.createElement('a');
    // router.push(`/${filename}`)
    downloadLink.href = `/${filename}`; // Update the href to point to the public folder
    // downloadLink.download = filename;
    // downloadLink.click();
  };

  return (
    <button onClick={handleClick} className="flex items-center justify-center w-max py-2 px-4 text-white bg-accent2 hover:bg-color1 rounded-lg font-semibold transition-colors duration-300">
      Download index file
    </button>
  );
};

export default DownloadButton;
