import React, { FC, ChangeEvent, useState, useEffect } from 'react'
import UploadImagePreviewSm from './UploadImagePreviewSm';

const UploadImage: FC = () => {

    const [selectedFiles, setSelectedFiles] = useState<any | null>(null);
    const [preview, setPreview] = useState<any | null>(null);
    const [fileUrls, setFileUrls] = useState<any | null>(null);;

    console.log(selectedFiles)
    console.log(preview)

    useEffect(() => {

        if (!selectedFiles) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFiles[0])

        setPreview(objectUrl)


    }, [selectedFiles])


    const handleChange = (e: ChangeEvent) => {

        setSelectedFiles((e.target as HTMLInputElement).files)


    }

    return (
        <div>
            <div className="flex justify-center items-center ">
                <label htmlFor="dropzone-file" className="flex flex-col justify-center 
                        items-center w-full h-58 bg-gray-50 rounded-lg
                        border-2 border-gray-300 border-dashed cursor-pointer 
                        dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100
                        dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col justify-center items-center 
                        pt-5 pb-6 w-44 px-3 text-center ">
                        <svg className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p className="mb-2  text-sm text-gray-500 dark:text-gray-400"><span
                            className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs font-roboto text-gray-500 dark:text-gray-400"
                        >   SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                    </div>
                    <input id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={(e) => handleChange(e)}
                    />
                </label>
            </div>
            <div className='pt-3' >
                <UploadImagePreviewSm
                    selectedFiles={selectedFiles}
                    preview={preview} />

            </div>
        </div>
    )
}

export default UploadImage
