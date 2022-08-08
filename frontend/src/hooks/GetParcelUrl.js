import React, { FC, useState, useEffect } from 'react'
import americanflag from '../assets/images/americanflag.png'
import prflag from '../assets/images/prflag.png'
import { useStateValue } from '../state/index'
import {
    getFirestore, addDoc, updateDoc,
    doc, getDocs, query,
    collection, where, getDoc
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";


//this hooks takes a singular parcel ID and returns a suitable URl as a string

const GetParcelUrl = (parcelId) => {

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const [itemUrl, setItemUrl] = useState('')

    useEffect(() => {

        if (parcelId !== '') {
            const docRef = doc(db, "items", parcelId);

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

    return itemUrl

}

export default GetParcelUrl
