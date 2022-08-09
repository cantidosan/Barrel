import React, { FC, useState, useContext, useEffect } from 'react'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";
import {
    getFirestore, addDoc, updateDoc,
    doc, getDocs, query,
    collection, where, getDoc
} from "firebase/firestore";
import AuthContext from '../auth/authContext'

import getParcelUrl from '../hooks/GetParcelUrl'



const GetBidItems = (id) => {




    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const [bidItemList, setBidItemList] = useState([])
    const [itemUrl, setItemUrl] = useState([{}])
    console.log(itemUrl)
    console.log(bidItemList)

    let itemArray = []

    useEffect(() => {



        getDocs(query(collection(db, `bids/${id}/bidItems`),
            where('itemList', '!=', '0')))
            .then((bidItemQuerySnapshot) => {

                bidItemQuerySnapshot.forEach((queryDocumentSnapshot) => {

                    itemArray.push(queryDocumentSnapshot.data().itemList)

                })
                // console.log('awe', bidObject)
                // bidArray.push(bidObject)
                // setBidItemList([...bidArray])
                return itemArray
            })

    }, [id])

}


export default GetBidItems
