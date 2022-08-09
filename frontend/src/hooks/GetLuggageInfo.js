
import React, { FC, useContext, useEffect, useState } from 'react'
import RouteDetailsCardLg from '../components/RouteDetailsCardLg'
import ParcelPictures from '../components/ParcelPictures'
import HandleBid from '../components/HandleBid'
import PageLayout from '../components/layouts/PageLayout'
import {
    getFirestore, addDoc, updateDoc,
    doc, getDocs, query,
    collection, where, getDoc
} from "firebase/firestore";
import AuthContext from '../auth/authContext'
import { firebaseConfig } from "../FirebaseConfig";
import { initializeApp } from "firebase/app";
import { useParams } from 'react-router-dom'
import NewItemButton from '../buttons/NewItemButton'
import { isCourier } from '../components/isCourier'
import BidItemListDisplay from '../components/BidItemListDisplay'



const GetRouteInfo = () => {

    const { user } = useContext(AuthContext);
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    let { route_id } = useParams();
    const [deptAirport, setDeptAirport] = useState('');
    const [arrivAirport, setArrivAirport] = useState('');
    const [deptCountry, setDeptCountry] = useState('');
    const [arrivCountry, setArrivCountry] = useState('');
    const [luggageHeight, setLuggageHeight] = useState(0)
    const [luggageLength, setLuggageLength] = useState(0)
    const [luggageWidth, setLuggageWidth] = useState(0)
    const [deptDate, setDeptDate] = useState();
    const [luggageId, setLuggageId] = useState('');
    const [courierId, setCourierId] = useState('');
    const [luggageWeight, setLuggageWeight] = useState(0);
    const [userAuth, setUserAuth] = useState('')


    useEffect(() => {
        //this fetches all the luggage details associated with a particular
        //route

        getDocs(query(collection(db, `routes/${route_id}/luggage`),

            where('height_capacity', '>=', '0')

        )).then((querySnapshot) => {

            // console.log('snapshot', querySnapshot)

            querySnapshot.forEach((queryDocumentSnapshot) => {

                // console.log(queryDocumentSnapshot.data())
                setLuggageId(queryDocumentSnapshot.id)

            })
        })
            .then(() => {
                let locationRef = doc(db, "routes", route_id, "luggage", luggageId);

                getDoc(locationRef).then(docSnap => {


                    if (docSnap.exists()) {

                        // console.log("Document data:", docSnap.data());

                        setLuggageWeight(docSnap.data().weight_capacity)
                        setLuggageHeight(docSnap.data().height_capacity)
                        setLuggageWidth(docSnap.data().width_capacity)
                        setLuggageLength(docSnap.data().length_capacity)

                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }

                })
            })

    }, [route_id])



    return {
        'luggageId': luggageId,
        'luggageHeight': luggageHeight,
        'luggageWeight': luggageWeight,
        'luggageLength': luggageLength,
        'luggageWidth': luggageWidth,

    }
}

export default GetRouteInfo
