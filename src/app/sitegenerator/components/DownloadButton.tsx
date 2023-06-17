'use client'

// const content = ``

import { writeFile } from "@/lib/utils/Functions";
// import { htmlpage } from "./PageGenerator";

const DownloadButton = ({htmlpage}:{htmlpage:string}) => {
    const handleClick = () => {
        const content = htmlpage
        const filename = 'index.html';

        writeFile(content, filename);

        const downloadLink = document.createElement('a');
        downloadLink.href = `/${filename}`;
        downloadLink.download = filename;
        downloadLink.click();
    };

    return (
        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded border">
            Download File
        </button>
    );
}


export default DownloadButton