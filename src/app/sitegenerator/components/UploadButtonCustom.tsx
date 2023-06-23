import React, { useState } from 'react';
import { DANGEROUS__uploadFiles } from 'uploadthing/client';
// import { extractVideoId } from '../constants';
// import { FiCheck, FiCopy } from 'react-icons/fi';


type UploadComponentProps = {
  onUploadComplete?: (response: any) => void;
  onUploadError?: (error: Error) => void;
};

const UploadComponent = ({ onUploadComplete, onUploadError }: UploadComponentProps) => {
  const [click, setClick] = useState(false)

  const [isLinkPreview, setIsLinkPreview] = useState<boolean>(false)

  //   to store the images before sending to backend
  const [images, setImages] = useState<File[]>([]);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    const newImages = Array.from(files).map((file) => file)
    setImages((prevState) => [...prevState, ...newImages]);
  };


  const handleUpload = async () => {
    setClick(true)
    try {
      const res = await DANGEROUS__uploadFiles(images, 'imageUploader');
      onUploadComplete && onUploadComplete(res);
      console.log("🚀 ~ file: UploadButtonCustom.tsx:37 ~ handleUpload ~ res:", res)
      setImages([])
      setClick(false)
    } catch (error: any) {
      onUploadError && onUploadError(error as Error);
    }
  };


  return (
    <>
    <div className="flex items-center">
      <input
        id="fileInput"
        type="file"
        className=""
        onChange={handleImageChange}
      />
      {images.length > 0 && (
        <button
          className="px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700"
          onClick={handleUpload}
        >
          {click ? 'Uploading....' : `Upload ${images.length} file`}
        </button>
      )}
    </div>

  </>
  );
};

export default UploadComponent;
