
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
import RenderBidItemList from '../components/RenderBidItemList'



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
    const [luggageWeight, setLuggageWeight] = useState('');
    const [userAuth, setUserAuth] = useState('')


    useEffect(() => {
        //this fetches route details tied to the routeId
        const docRef = doc(db, "routes", route_id);

        getDoc(docRef).then(docSnap => {

            if (docSnap.exists()) {
                setCourierId(docSnap.data().userId)
                setArrivAirport(docSnap.data().arrival_airport)
                setDeptAirport(docSnap.data().departure_airport)
                setArrivCountry(docSnap.data().arrival_country)
                setDeptCountry(docSnap.data().departure_country)
                setDeptDate(docSnap.data().departure_date)

                console.log("Document data: critical", docSnap.data())
                    ;

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        })
    }, [route_id])

    return {
        'courier': courierId,
        'deptAirport': deptAirport,
        'arrivAirport': arrivAirport,
        'arrivCountry': arrivCountry,
        'deptCountry': deptCountry,
        'deptDate': deptDate
    }
}

export default GetRouteInfo
