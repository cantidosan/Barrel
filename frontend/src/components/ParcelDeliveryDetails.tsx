import React, { FC, useState,useEffect } from 'react'
import americanflag from '../assets/images/americanflag.png'
import prflag from '../assets/images/prflag.png'
import ParcelDeliveryInfo from './ParcelDeliveryInfo'
import { useStateValue } from '../state/index'
import {
    getFirestore, addDoc, updateDoc,
    doc, getDocs, query,
    collection, where, getDoc
} from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";

const ParcelDeliveryDetails: FC = () => {

    //requires a default item stand in
    const [itemUrl,setItemUrl]=useState('')
    //The component will be listen for parcelId 
    const [{ parcelId }, dispatch] = useStateValue();
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    

    useEffect(() => {
        
        if(parcelId !== ''){
        const docRef = doc(db, "items", parcelId as string);
    
        getDoc(docRef).then(docSnap => {

            if (docSnap.exists()) {
               console.log(docSnap.data())
                
               getDocs(query(collection(db, `items/${parcelId}/pictures`),
               where('url', '!=', '')))
               .then((querySnapshot) => {
                   // console.log("picIDSnapshot", querySnapshot)
                   querySnapshot.forEach((result) => {

                      setItemUrl(result.data().url)
                   
                   }
                   )

               }
           )

                console.log("Document data: critical", docSnap.data())
                    ;

                } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                }
        })
    }
    }, [parcelId])

    console.log('itemURl',itemUrl)

    return (
        <div className='flex flex-cols items-center'>


            <figure className='flex ' >
                <img className=" 
                    block object-fit 
                    object-center  rounded-lg"
                    src={itemUrl} alt="" width="168"
                />
                <ParcelDeliveryInfo />
            </figure>

        </div >
    )
}

export default ParcelDeliveryDetails
