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
import GetParcelUrl from "../hooks/GetParcelUrl"

const ParcelDeliveryDetails: FC = () => {

    //requires a default item stand in
    
    //The component will be listen for parcelId 
    const [{ parcelId }, dispatch] = useStateValue();

    

    let url = GetParcelUrl(parcelId)

    

    

    return (
        <div className='flex flex-cols items-center'>


            <figure className='flex ' >
                <img className=" 
                    block object-fit 
                    object-center  rounded-lg"
                    src={url} alt="" width="168"
                />
                <ParcelDeliveryInfo />
            </figure>

        </div >
    )
}

export default ParcelDeliveryDetails
