import React,{FC,useState} from 'react'
import { useStateValue } from '../state/index'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";
import { getFirestore,setDoc, addDoc,updateDoc,doc,getDocs,query,collection,where } from "firebase/firestore";


interface itemIdProp{

  itemId: string,
  
}
//THIS COMPONENT HAS TO

const  ParcelDetailsUpdate:FC<itemIdProp> = (props:itemIdProp)=> {

  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')

  let data = {

    weight:weight,
    height:height,
    width:width,
    length:length
    
}

  const [{ pageCount, docRef }, dispatch] = useStateValue();
  const app = initializeApp(firebaseConfig)
  
   //below filters the dataobject of all 
    //unchanged key value attributes
    //before uploading
    
    const dataAsArray = Object.entries(data)
    const filteredData = dataAsArray.filter(([key,value])=> value !=='')
    const newData = Object.fromEntries(filteredData);

    const nextPage = async () => {
      
      if (Object.keys(newData).length !== 0) {
          await updateDoc(docRef, newData)
      }
        dispatch({ type: 'pageCount', payload: pageCount+1 })
        
  }
  const prevPage = () => {

    dispatch({ type: 'pageCount', payload: pageCount-1 });

  }
  return (

    <div>
            <section className='grid gap-6 pt-10 justify-center bg-barrel-green '>
                <div>
                    <label htmlFor="item_length" className=" bg-barrel-green block mb-2 text-sm font-roboto font-medium text-white dark:text-white">WEIGHT</label>
                    <input type="text" id="item_length" className="bg-gray-50 placeholder-white-600 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="lbs" required
                        onChange={(e)=>setWeight(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="item_length" className=" bg-barrel-green block mb-2 text-smfont-roboto font-medium text-white dark:text-white">HEIGHT</label>
                    <input type="text" id="item_length" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-white-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="inches " required
                        onChange={(ev)=>setHeight(ev.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="item_length" className=" bg-barrel-green block mb-2 text-smfont-roboto font-medium text-white dark:text-white">LENGTH</label>
                    <input type="text" id="item_length" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-white-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="inches" required
                        onChange={(eve)=>setLength(eve.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="item_length" className=" bg-barrel-green block mb-2 text-smfont-roboto font-medium text-white dark:text-white">WIDTH</label>
                    <input type="text" id="item_length" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-white-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="inches" required
                        onChange={(even)=>setWidth(even.target.value)}
                    />
                </div>
                

            </section>
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

export default ParcelDetailsUpdate
