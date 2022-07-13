import React, { FC, useEffect, useState } from 'react'
import ToggleMetricsButton from '../buttons/ToggleMetricsButton'
import { useStateValue } from '../state/';
import { doc, setDoc,getFirestore,collection,addDoc } from "firebase/firestore"; 
import { firebaseConfig } from "../FirebaseConfig";
import { initializeApp } from "firebase/app";

const InputLuggageDetails: FC = () => {


    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const [{ pageCount, metricToggle, docRef }, dispatch] = useStateValue();
    
    //
    // const luggageRef = doc(db, 'routes', `${docRef.id}`);
    // const luggageRef = db.collection("routes").doc(`${docRef.id}`)
    const luggageRef =collection(db, "routes", docRef.id, "luggage")
    

    
    // console.log('lugRef',luggageRef)
    const [weightMetric, setWeightMetric] = useState('lbs');
    const [sizeMetric, setSizeMetric] = useState('feet');
    const [luggageWeight, setLuggageWeight] = useState('');
    const [luggageHeight, setLuggageHeight] = useState('');
    const [luggageWidth, setLuggageWidth] = useState('');
    const [luggageLength, setLuggageLength] = useState('');


    const handleClick = async () => {

        await addDoc(luggageRef, {
            height_capacity: luggageHeight,
            length_capacity:luggageLength,
            weight_capacity: luggageWeight,
            width_capacity:luggageWidth
        })

         dispatch({ type: 'pageCount', payload: pageCount+1 });

    }
    useEffect(() => {

        if (metricToggle === 'MET') {
            setSizeMetric('centimeters')
            setWeightMetric('grams')
        } else {
            setSizeMetric('feet')
            setWeightMetric('lbs')
        }


    }, [metricToggle])

    return (
        <div className='grid justify-center bg-barrel-green text-white font-bold p-3 
            underline gap-3 font-hansief '>

            <ToggleMetricsButton />

            <section className=''>
                <div>
                    <label htmlFor="item_length" className="block mb-2 text-sm font-medium text-gray-900 
                        dark:text-gray-300 text-center">WEIGHT
                    </label>
                    <input type="text" id="item_length" className="bg-gray-50 border border-gray-300 
                        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={weightMetric} required
                        onChange={(e)=>setLuggageWeight(e.target.value)}
                    />
                </div>

            </section>
            <h2 className='flex justify-center'>SPACE</h2>
            <section className=''>
                <div>
                    <label htmlFor="item_length" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Length</label>
                    <input type="text" id="item_length" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={sizeMetric} required
                        onChange={(ev)=>setLuggageLength(ev.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="item_width" className=" pt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Width</label>
                    <input type="text" id="item_width" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={sizeMetric} required
                        onChange={(ev)=>setLuggageWidth(ev.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="item_height" className="pt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Height</label>
                    <input type="text" id="item_height" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={sizeMetric} required
                        onChange={(eve)=>setLuggageHeight(eve.target.value)}
                    />
                </div>
                <div className='flex justify-center w-58 bg-barrel-green pt-5'>
                <button className='m-2 focus:outline-none text-white bg-purple-700 
                    hover:bg-purple-800 focus:ring-4 focus:ring-purple-300
                    font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600
                    dark: hover: bg-purple-700 dark:focus:ring-purple-900'
                type="submit" onClick={handleClick}
                >
                NEXT
                </button>
            </div>


            </section>
        </div>
    )
}

export default InputLuggageDetails
