import React, { FC,useState } from 'react'
import { useStateValue } from '../state/index'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../FirebaseConfig";
import { collection, addDoc } from "firebase/firestore"; 
import AuthContext from '../auth/authContext'


interface userProp{
    userId:string,
}

const  InputParcelInfo:FC<userProp>=(props:userProp)=> {
    const {userId} = props
    const [itemName, setItemName] = useState('')
    const [itemNum, setItemNum] = useState('')
    
    const [{ pageCount, docRef }, dispatch] = useStateValue();

    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);

    const nextPage = async () => {

        const  newItemDocRef = await addDoc(collection(db, "items"), {

            name:itemName,
            number: itemNum,
            userId:userId
           
        });
        dispatch({ type: 'docRef', payload: newItemDocRef })
        dispatch({ type: 'pageCount', payload: pageCount+1 })
        
        
    }
    const prevPage = () => {

        dispatch({ type: 'pageCount', payload: pageCount-1 });

    }
    
    return (
        <div className="grid gap-6  pt-10 justify-center bg-barrel-green ">

            <div className="font-roboto">
                <label htmlFor="username" className='block mb-2 text-sm font-medium 
                                text-white dark:text-gray-300'
                >
                    Item Name
                </label>
                <input id="username"
                    name="username"

                    className="block p-2 w-full text-black bg-gray-50 rounded-lg 
                                    border border-gray-300 sm:text-xs focus:ring-blue-500 
                                    focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                                    dark:placeholder-gray-400 dark:text-white 
                                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e)=>setItemName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="cell" className='block mb-2 text-sm font-medium 
                                text-white dark:text-gray-300'
                >
                    Item # (optional)
                </label>

                <input id="itemNumber"
                    name="itemNumber"
                    placeholder="s/n #453320498"
                    className="block p-2 w-full text-black bg-gray-50 rounded-lg 
                                    border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(ev)=>setItemNum(ev.target.value)}
                />
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

export default InputParcelInfo
