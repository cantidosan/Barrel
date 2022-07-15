import React, { FC, ChangeEvent, useState, useEffect } from 'react'
import UploadImagePreviewSm from './UploadImagePreviewSm';
import { useStateValue } from '../state/index'
import { getStorage, ref, uploadBytes,getDownloadURL  } from "firebase/storage";
import { firebaseConfig } from "../FirebaseConfig";
import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore, collection, addDoc } from "firebase/firestore"; 

const UploadImage: FC = () => {

    const [selectedFiles, setSelectedFiles] = useState<any | null>(null);
    const [preview, setPreview] = useState<any | null>(null);
    const [fileUrls, setFileUrls] = useState<any | null>(null);;
    const [{ pageCount, docRef }, dispatch] = useStateValue();
    const storage = getStorage();
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);


    console.log('selected files',selectedFiles)
    console.log(preview)

    useEffect(() => {

        if (!selectedFiles) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFiles[0])

        setPreview(objectUrl)
        
        
        const storageRef = ref(storage, selectedFiles[0].name.replace());
        console.log('selected files',selectedFiles[0].name)
        console.log('storageref ',storageRef)
        uploadBytes(storageRef, selectedFiles[0]).then((snapshot) => {
            
            console.log('Uploaded a blob or file!');
        });

        const luggageRef = collection(db, "items", docRef.id, "pictures")
        console.log('luggageref',luggageRef)
        
        getDownloadURL(ref(storage, selectedFiles[0].name))
            .then(
                    (url) =>
                { 
                    console.log('url',url)
                        addDoc(
                                        luggageRef,
                                        {
                                        url: url,
                                        itemId:docRef.id
                            
                                    }
                                )
                }
            )

    }, [selectedFiles])


    const handleChange = (e: ChangeEvent) => {

        setSelectedFiles((e.target as HTMLInputElement).files)

    }
    const nextPage = () => {
    
        dispatch({ type: 'pageCount', payload: pageCount+1 })
        
    }
    const prevPage = () => {

        dispatch({ type: 'pageCount', payload: pageCount-1 });

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
            <div className='flex justify-center w-58 bg-barrel-green pt-5'>
                <button className='m-2 focus:outline-none text-white bg-purple-700 
                            hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 
                            font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 
                            dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                    type="button" onClick={nextPage}
                >
                    NEXT
                </button>
                <button className='m-2 focus:outline-none text-white bg-gray-700 
                        hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium 
                        rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 
                        dark:focus:ring-gray-900"' type="button" onClick={prevPage}
                >
                    BACK
                </button>
                
            </div>
        </div>
    )
}

export default UploadImage
