import React,{FC,useState} from 'react'

import { useStateValue } from '../state/index'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";
import { getFirestore,setDoc, addDoc,updateDoc,doc,getDocs,query,collection,where } from "firebase/firestore";

//THIS COMPONENT HAS TO PULL PARCEL INFO FROM THE DB
//ITEMID WILL BE TAKEN FROM THE URL PARAMS AND GET THE ITEM REF
//UPDATE ITEM REF WITH DATA OBJECT
interface itemIdProp{

  itemId: string,
  
}

const  ParcelInputUpdate:FC<itemIdProp> = (props:itemIdProp)=> {

  const { itemId } = props
  
  const [itemName, setItemName] = useState('')

  const [itemNum, setItemNum] = useState('')
  
  const [{ pageCount, docRef }, dispatch] = useStateValue();

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  let data = {

    name:itemName,
    number:itemNum,
    
    
  }
  //below filters the dataobject of all 
    //unchanged key value attributes
    //before uploading
    
    const dataAsArray = Object.entries(data)
    const filteredData = dataAsArray.filter(([key,value])=> value !=='')
    const newData = Object.fromEntries(filteredData);
    
  const nextPage = async () => {

    const ItemDocRef = doc(db, "items", itemId);

    if (Object.keys(newData).length !== 0) {
      await updateDoc(ItemDocRef, newData)
      dispatch({ type: 'docRef', payload: ItemDocRef })
    }
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

export default ParcelInputUpdate
