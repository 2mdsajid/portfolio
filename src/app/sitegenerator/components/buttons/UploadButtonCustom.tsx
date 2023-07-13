import React, { useState } from 'react';
import { DANGEROUS__uploadFiles } from 'uploadthing/client';

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
          className="flex items-center justify-center w-max py-2 px-4 text-white bg-accent2 hover:bg-accent3 rounded-lg font-semibold transition-colors duration-300"
          onClick={handleUpload}
        >
          {click ? 'Uploading....' : `Upload`}
        </button>
      )}
    </div>

  </>
  );
};

export default UploadComponent;
