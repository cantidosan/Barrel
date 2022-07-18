import React, { FC,useEffect,useState } from 'react'
import { useStateValue } from '../state/';
import { getFirestore, addDoc,updateDoc,doc,getDocs,query,collection,where,getDoc } from "firebase/firestore"; 
import { firebaseConfig } from "../FirebaseConfig";
import { initializeApp } from "firebase/app";


interface routeIdProp{

    routeId: string,
    
}


const UpdateLuggageAttributes: FC<routeIdProp> = (props: routeIdProp) => {
    const { routeId } = props
    
    const [{ pageCount, metricToggle, docRef }, dispatch] = useStateValue();

    const [oldLuggageWeight, setOldLuggageWeight] = useState('');
    const [oldLuggageHeight, setOldLuggageHeight] = useState('');
    const [oldLuggageWidth, setOldLuggageWidth] = useState('');
    const [oldLuggageLength, setOldLuggageLength] = useState('');
    const [luggageWeight, setLuggageWeight] = useState('');
    const [luggageHeight, setLuggageHeight] = useState('');
    const [luggageWidth, setLuggageWidth] = useState('');
    const [luggageLength, setLuggageLength] = useState('');
    const [luggageId, setLuggageId] = useState('');
   



    console.log(luggageHeight)
    console.log(luggageWeight)
    console.log(luggageLength)
    console.log(luggageWidth)
    console.log(oldLuggageHeight)
    console.log(oldLuggageWeight)
    console.log(oldLuggageLength)
    console.log(oldLuggageWidth)
    console.log(luggageId)

    let data = {

        weight_capacity:luggageWeight,
        height_capacity:luggageHeight,
        width_capacity:luggageWidth,
        length_capacity:luggageLength
        
    }
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    useEffect(() => {
                getDocs(query(collection(db,`routes/${routeId}/luggage`),
                where('height_capacity', '>=', '0')
                )).then((querySnapshot) => {
                
                    console.log('snapshot', querySnapshot)
                    
                querySnapshot.forEach((queryDocumentSnapshot) => {
                
                    setLuggageId(queryDocumentSnapshot.id)
                
        })
        })
        
    }, [routeId])
    

    // const citiesRef = collection(db, "routes",routeId,"luggage");

    // const q = query(citiesRef, where("height_capacity", ">=", "0"));
    // console.log('q',q)
    
    // let locationRef = doc(db, "routes", routeId, "luggage", luggageId);

    
    useEffect(() => {

        if (!!luggageId) {
            
        let locationRef = doc(db, "routes", routeId, "luggage", luggageId);

        getDoc(locationRef).then(docSnap => {


            if (docSnap.exists()) {
    
                console.log("Document data:", docSnap.data());
    
                setOldLuggageWeight(docSnap.data().weight_capacity)
                setOldLuggageHeight(docSnap.data().height_capacity)
                setOldLuggageWidth(docSnap.data().width_capacity)
                setOldLuggageLength(docSnap.data().length_capacity)
    
                } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                }
            
        })
    }
    },[luggageId])
    
    //below filters the dataobject of all 
    //unchanged key value attributes
    //before uploading
    
    const dataAsArray = Object.entries(data)
    const filteredData = dataAsArray.filter(([key,value])=> value !=='')
    const newData = Object.fromEntries(filteredData);


    const nextPage = async () => {

        const querySnapshot = await getDocs(
            query(
                collection(db,`routes/${docRef.id}/luggage`),
                where('height_capacity', '>=', '0')
                
            )

        )
        querySnapshot.forEach((queryDocumentSnapshot) => {
            
                setLuggageId(queryDocumentSnapshot.id)
                console.log(luggageId)
          })
    
        
        const luggageRef = doc(db, "routes", routeId, "luggage", luggageId);
        


        console.log('luggageREf down low',luggageRef)
        updateDoc(luggageRef,newData)

        dispatch({ type: 'pageCount', payload: pageCount+1 })
      
    }
   
    const prevPage = () => {
            
            dispatch({ type: 'pageCount', payload: pageCount-1 });
        }

    return (
        <div>
            <section className='grid gap-6 pt-10 justify-center bg-barrel-green '>
                <div>
                    <label htmlFor="item_length" className=" bg-barrel-green block mb-2 text-sm 
                        font-roboto font-medium text-white dark:text-gray-300"
                    >
                        WEIGHT
                    </label>
                    <input type="text" id="item_length" className="bg-gray-50 placeholder-white-600 
                        border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={oldLuggageWeight} required
                        onChange={(e)=>setLuggageWeight(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="item_length" className=" bg-barrel-green block mb-2 text-sm 
                        font-roboto font-medium text-white dark:text-gray-300"
                    >HEIGHT
                    </label>
                    <input type="text" id="item_length" className="bg-gray-50 border border-gray-300
                        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-white-500
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={oldLuggageHeight} required
                        onChange={(ev)=>setLuggageHeight(ev.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="item_length" className=" bg-barrel-green block mb-2 text-sm font-roboto font-medium text-white dark:text-gray-300">LENGTH</label>
                    <input type="text" id="item_length" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                        placeholder-white-500 dark:text-white dark:focus:ring-blue-500
                        dark:focus:border-blue-500" placeholder={oldLuggageLength} required
                        onChange={(eve)=>setLuggageLength(eve.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="item_length" className=" bg-barrel-green block mb-2 text-sm 
                        font-roboto font-medium text-white dark:text-gray-300">WIDTH
                    </label>
                    <input type="text" id="item_length" className="bg-gray-50 border border-gray-300 
                        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-white-500
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={oldLuggageWidth} required
                        onChange={(even)=>setLuggageWidth(even.target.value)}
                    />
                </div>

            </section>
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

export default UpdateLuggageAttributes
