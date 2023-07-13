import { FRONTEND } from '@/lib/utils/Constants';
import { useState } from 'react';
import { FaCheck, FaCopy } from 'react-icons/fa';


export const CopyIcon = ({ uniqueid }: { uniqueid: string }) => {
    const frontendUrl = `${FRONTEND}/${uniqueid}`;

    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = () => {
        const url = `${FRONTEND}/sites/${uniqueid}`;
        navigator.clipboard.writeText(url);
        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false)
        }, 2000);
    };

    return (
        <div className="w-full  my-3 border border-color3 flex items-center space-x-2 rounded-md">
            <p className='bg-color3 p-3 rounded-md'>URL</p>
            <p id="url" className="overflow-x-auto scrollbar-hidden">
                {frontendUrl}
            </p>
            <div onClick={handleCopyClick} className='text-3xl'>
            {isCopied ? <FaCheck /> : <FaCopy />}
            </div>
        </div>
    );
};
