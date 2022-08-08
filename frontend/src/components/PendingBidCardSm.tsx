import React, { FC,useEffect,useState } from 'react'
import RouteFlag from './RouteFlag'

import ParcelPicture from './ParcelPicture'
import {
    getFirestore, addDoc, updateDoc,
    doc, getDocs, query,
    collection, where, getDoc
} from "firebase/firestore"; 
import AuthContext from '../auth/authContext'
import { firebaseConfig } from "../FirebaseConfig";
import { initializeApp } from "firebase/app";
import { AirportToFlagConvert } from '../components/AirportToFlagConvert'


//this component needs route details passed to it as a prop 
//also needs the bid items?


//this function should have an onclick which navigates 
// to route details page

interface bidProp{
    bidId: string,
    amount: string,
    courierId: string,
    status: string,
    senderId: string,
    routeId: string,
    bidItems:[]
    
}

const PendingBidCardSm: FC<bidProp> = (props:bidProp) => {

   
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const {
    
        bidId,
        amount,
        courierId,
        status,
        senderId,
        routeId,
        bidItems,

    } = props

    const [arrivAirport,setArrivAirport]= useState('')
    const [deptAirport, setDeptAirport] = useState('')
    const [itemId, setItemId] = useState<string[]>([''])
    const [itemUrl, setItemUrl] = useState('')
    console.log(itemId)
    console.log(itemUrl)


    let idElement = bidItems.toString().replaceAll('"', '').replaceAll(',', '')
    
    let finalItemList = idElement.split(' ')
    finalItemList.shift()

    // this cleans the itemList and transforms it into
    // an array of strings
    // console.log('idElement', finalItemList)
    

    let deptFlag = AirportToFlagConvert(deptAirport)
    let arrivFlag = AirportToFlagConvert(arrivAirport)

    
    useEffect(() => {
        
        
        const docRef = doc(db, "routes", routeId as string);
    
        getDoc(docRef).then(docSnap => {

            if (docSnap.exists()) {
                setArrivAirport(docSnap.data().arrival_airport)
                setDeptAirport(docSnap.data().departure_airport)
                setItemId(finalItemList)
                console.log(itemId)

                return true
                    

                } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
            
        }).then(() => {

            const docRef = doc(db, "items", finalItemList[0] );
                
                getDoc(docRef).then(docSnap => {

                if (docSnap.exists()) {

                    getDocs(query(collection(db, `items/${finalItemList[0]}/pictures`),
                        where('url', '!=', '')))
                        .then((querySnapshot) => {
                            // console.log("picIDSnapshot", querySnapshot)
                            querySnapshot.forEach((result) => {

                                setItemUrl(result.data().url)
                    
                            }
                            )

                        })

                    console.log("Document data: critical", docSnap.data())
                        ;

                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            })
        })
    }, [routeId])



    // const docRef = doc(db, "bids", bid_id as string);
    let url = [`https://countryflagsapi.com/png/${deptFlag}`,`https://countryflagsapi.com/png/${arrivFlag}`]
    return (
        <div className='flex '>
            <figure className='flex flex-col basis-1/2  '>
                <div className='w-7'>
                    <RouteFlag url={url[0]} />
                </div>
                <div className='w-7'>
                    <RouteFlag url={url[1]} />
                </div>


            </figure>
            <div className='pt-1'>
                <ParcelPicture url={itemUrl} itemId={itemId[0] } />
            </div>
        </div>
    )
}

export default PendingBidCardSm
