import React, { useState } from "react";
import {
  BsFillFileEarmarkTextFill,
  BsFillFileEarmarkImageFill,
  BsFillFileEarmarkPdfFill,
  BsX,
} from "react-icons/bs";
import { useDropzone } from "react-dropzone";
import { Button } from "@windmill/react-ui";

const FilesGallery = ({ files, onFileUpload }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState(files);
  const [fileToDelete, setFileToDelete] = useState(null);

  const onDrop = (acceptedFiles) => {
    setIsUploading(true);

    // Simulate a file upload process
    setTimeout(() => {
      const newFiles = acceptedFiles.map((file, index) => ({
        id: uploadedFiles.length + index + 1,
        name: file.name,
        type: file.type.includes("pdf")
          ? "pdf"
          : file.type.includes("image")
            ? "image"
            : "text",
      }));
      setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
      setIsUploading(false);
      if (onFileUpload) {
        onFileUpload(newFiles);
      }
    }, 2000);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <BsFillFileEarmarkPdfFill className="h-6 w-6 text-red-500" />;
      case "image":
        return <BsFillFileEarmarkImageFill className="h-6 w-6 text-blue-500" />;
      case "text":
        return <BsFillFileEarmarkTextFill className="h-6 w-6 text-gray-500" />;
      default:
        return <BsFillFileEarmarkTextFill className="h-6 w-6 text-gray-500" />;
    }
  };

  const handleDelete = (file) => {
    setUploadedFiles(uploadedFiles.filter((f) => f.id !== file.id));
    setFileToDelete(null);
  };

  return (
    <div className="mx-auto my-4 max-w-4xl space-y-4 overflow-hidden rounded-xl bg-white p-6 shadow-md">
      <div className="text-lg font-medium text-black">Files Gallery</div>
      <Button
        onClick={() => document.querySelector('input[type="file"]').click()}
      >
        Upload Files
      </Button>
      <div
        {...getRootProps()}
        className="mt-4 cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-4"
      >
        <input {...getInputProps()} />
        <p className="text-center text-gray-500">
          Drag & drop files here, or click to select files
        </p>
      </div>

      {isUploading && (
        <div className="mt-4 text-center text-gray-500">Uploading...</div>
      )}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {uploadedFiles.map((file) => (
          <div
            key={file.id}
            className="relative flex items-center rounded-lg bg-gray-100 p-4 shadow-sm"
          >
            {getFileIcon(file.type)}
            <a
              href="#"
              className="ml-4 text-blue-500"
              onClick={() => alert(`Downloading ${file.name}`)}
            >
              {file.name}
            </a>
            <BsX
              className="absolute right-2 top-2 h-6 w-6 cursor-pointer text-red-500"
              onClick={() => setFileToDelete(file)}
            />
          </div>
        ))}
      </div>

      {fileToDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold">Confirm Deletion</h2>
            <p className="mb-4">
              Are you sure that you want to delete this file?
            </p>
            <div className="flex justify-end space-x-4">
              <Button layout="outline" onClick={() => setFileToDelete(null)}>
                Cancel
              </Button>
              <Button onClick={() => handleDelete(fileToDelete)}>Delete</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilesGallery;
