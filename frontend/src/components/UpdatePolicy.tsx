import React, { FC,useState } from 'react'
import { useStateValue } from '../state'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc,updateDoc,doc } from "firebase/firestore"; 
import { firebaseConfig } from "../FirebaseConfig";







const UpdatePolicy: FC = () => {
    const [newPolicy, setNewPolicy] = useState('')
    const [{ pageCount,docRef }, dispatch] = useStateValue();
    
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const prevPage = () => {

        dispatch({ type: 'pageCount', payload: pageCount - 1 });
        
    }
    
    const nextPage = async () => {
    
        if (newPolicy !== '') {
        console.log('new location has been updated')
        await updateDoc(docRef, {
            exchange_policy: newPolicy
        })
        }
        
        
    
        dispatch({ type: 'pageCount', payload: pageCount+1 })
        
        
    }

    return (
        <div className='bg-barrel-green'>
            <div className="grid gap-6 pt-10 justify-center bg-barrel-green font-bold text-white ">
                <div>
                    <label htmlFor="small-input" className="block mb-2 text-md font-bold text-white underline font-roboto">Old Policy</label>
                    <p className='text-sm  opacity-70'>Scan at arrival gate</p>
                </div>
                <div>
                    <label htmlFor="small-input" className="block mb-2 text-md font-bold text-white 
                        font-roboto underline "
                    >
                        New Policy
                    </label>
                    <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-black bg-gray-50 
                        rounded-lg border border-gray-300 focus:ring-blue-500
                        focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                        dark:focus:border-blue-500" placeholder="Leave a comment..."
                        onChange={(e)=>setNewPolicy(e.target.value)}>

                    </textarea>
                </div>
            </div>
            <div className='flex justify-center w-58 bg-barrel-green pt-5'>
                <button className='m-2 focus:outline-none text-white bg-purple-700 
                    hover:bg-purple-800 focus:ring-4 focus:ring-purple-300
                    font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600
                    dark: hover: bg-purple-700 dark:focus:ring-purple-900'
                type="submit" onClick={nextPage}
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

export default UpdatePolicy
