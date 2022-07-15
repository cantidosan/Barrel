import React, { FC,useEffect,useState } from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc,updateDoc,doc } from "firebase/firestore"; 
import { firebaseConfig } from "../FirebaseConfig";
import { useStateValue } from '../state'


interface routeIdProp{
    routeId:string,
}
const UpdateLocation: FC<routeIdProp> = (props: routeIdProp) => {

    const { routeId } = props
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    const [{ pageCount, docRef }, dispatch] = useStateValue();
    
    const locationRef = doc(db, "routes", routeId);


    ///THIS READS FROM THE DB TO POPULATE THE OLD INFORMATION
    
    const [newLocation, setNewLocation] = useState('')

    const prevPage = () => {

        dispatch({ type: 'pageCount', payload: pageCount - 1 });
        
    }
    const nextPage = async () => {

        if (newLocation !== '') {
        console.log('new location has been updated')
        updateDoc(locationRef, {
            exchange_location: newLocation
        })
        }
        
        dispatch({ type: 'docRef', payload: locationRef })

        dispatch({ type: 'pageCount', payload: pageCount+1 })
        
        
    }

    return (

        <div className="grid gap-6 pt-10 justify-center bg-barrel-green 
            font-bold text-white ">
            <div>
                <label htmlFor="small-input" className="block mb-2 text-md 
                font-bold text-white underline font-roboto">Old Location</label>
                <p>100 Hope Road Avenue</p>
            </div>
            <div>
                <label htmlFor="small-input" className="block mb-2 text-md 
                    font-bold text-white font-roboto underline "
                >
                    New Location
                </label>
                <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-black bg-gray-50 
                        rounded-lg border border-gray-300 focus:ring-blue-500
                        focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                        dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 
                        dark:focus:border-blue-500" placeholder="Leave a comment..."
                        onChange={(e)=>setNewLocation(e.target.value)}
                        >

                </textarea>
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

export default UpdateLocation
