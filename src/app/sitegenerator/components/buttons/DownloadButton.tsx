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
    downloadLink.click();
  };

  return (
    <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded border">
      Download
    </button>
  );
};

export default DownloadButton;
