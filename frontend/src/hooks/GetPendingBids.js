import React, { FC, useEffect, useContext, useState } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import ParcelDeliveryDetails from '../components/ParcelDeliveryDetails'
import ActiveBids from '../components/ActiveBids'
import DeliveryUpdates from '../components/DeliveryUpdates'
import ParcelPictures from '../components/ParcelPictures'
import AuthContext from '../auth/authContext'
import { useParams } from 'react-router-dom'

import {
    getFirestore, addDoc, updateDoc,
    doc, getDocs, query,
    collection, where, getDoc
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";



const GetPendingBids = () => {

    let { user_id } = useParams();
    const { user } = useContext(AuthContext);
    const [bidItemList, setBidItemList] = useState([]);
    console.log('bidItem List', bidItemList)
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    console.log(user)
    let bidArray = []

    useEffect(() => {

        if (user) {
            const pendingBidsQuery = query(collection(db, "bids"),
                where("senderId", "==", user.uid));
            getDocs(pendingBidsQuery)
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        console.log(doc.id, " => ", doc.data());

                        let bidObject =
                        {

                            bidId: doc.id,
                            amount: doc.data().amount,
                            courierId: doc.data().courierId,
                            status: doc.data().status,
                            senderId: doc.data().senderId,
                            routeId: doc.data().routeId,
                            bidItems: []
                        }

                        getDocs(query(collection(db, `bids/${doc.id}/bidItems`),
                            where('itemList', '!=', '')))
                            .then((bidItemQuerySnapshot) => {

                                bidItemQuerySnapshot.forEach((queryDocumentSnapshot) => {

                                    bidObject['bidItems'].push(queryDocumentSnapshot.data().itemList)
                                    console.log('insideloop')

                                })
                                bidArray.push(bidObject)
                                setBidItemList(bidArray)

                            })
                    })

                })

        }

    }, [user])
    return bidItemList
}
export default GetPendingBids
