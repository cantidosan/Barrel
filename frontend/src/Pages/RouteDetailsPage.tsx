import React, { FC, useContext,useEffect,useState } from 'react'
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


type UrlProp = {

    url: string,
    

}
const RouteDetailsPage: FC = () => {

    const { user } = useContext(AuthContext);
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    let { route_id } = useParams();
    
    const [deptAirport, setDeptAirport] = useState('');
    const [arrivAirport, setArrivAirport] = useState('');
    const [deptCountry, setDeptCountry] = useState('');
    const [arrivCountry, setArrivCountry] = useState('');
    const [luggageHeight, setLuggageHeight] = useState<number>(0);
    const [luggageLength, setLuggageLength] = useState<number>(0);
    const [luggageWidth, setLuggageWidth] = useState<number>(0);
    const [deptDate, setDeptDate] = useState();
    const [luggageId, setLuggageId] = useState('');
    const [luggageWeight, setLuggageWeight] = useState('');


    console.log(luggageHeight)
    console.log(luggageWeight)
    console.log(luggageLength)
    console.log(luggageWidth)
    console.log(luggageId)


    /// get_document.js
    useEffect(() => {
        
        const docRef = doc(db, "routes", route_id as string);
    
        getDoc(docRef).then(docSnap => {

            if (docSnap.exists()) {
                
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
    },[route_id])
    
    useEffect(() => {
        getDocs(query(collection(db,`routes/${route_id}/luggage`),
        where('height_capacity', '>=', '0')
        )).then((querySnapshot) => {
        
            console.log('snapshot', querySnapshot)
            
        querySnapshot.forEach((queryDocumentSnapshot) => {
        
            setLuggageId(queryDocumentSnapshot.id)
        
        })
        })

    }, [deptDate])

    useEffect(() => {

        if (!!luggageId) {
            
        let locationRef = doc(db, "routes", route_id as string, "luggage", luggageId);

        getDoc(locationRef).then(docSnap => {


            if (docSnap.exists()) {
    
                console.log("Document data:", docSnap.data());
    
                setLuggageWeight(docSnap.data().weight_capacity)
                setLuggageHeight(docSnap.data().height_capacity)
                setLuggageWidth(docSnap.data().width_capacity)
                setLuggageLength(docSnap.data().length_capacity)
    
                } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                }
            
        })
    }
    },[luggageId])

    
    ///
    let url = [`https://countryflagsapi.com/png/${deptCountry}`,
                `https://countryflagsapi.com/png/${arrivCountry}`]
    return (
        <PageLayout>
            <div className=''>
                <div className='flex  flex-col  bg-barrel-green items-center  '>
                    <div className='border-2 m-12'>
                        <RouteDetailsCardLg url={url}
                            deptAirport={deptAirport}
                            arrivAirport={arrivAirport}
                            deptDate={deptDate}
                            luggageWeight={luggageWeight}
                            luggageHeight={luggageHeight}
                            luggageLength={luggageLength}
                            luggageWidth={luggageWidth}


                        />
                    </div>

                    <div className='w-88  flex'>
                        {user ? <ParcelPictures /> : ''}
                    </div>
                    <div className='bg-green-400 m-12 w-22'>
                        {user ? <HandleBid /> : ''}
                    </div>


                </div>
            </div>
        </PageLayout >
    )
}

export default RouteDetailsPage
