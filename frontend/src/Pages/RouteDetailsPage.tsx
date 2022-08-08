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
import NewItemButton from '../buttons/NewItemButton'
import {isCourier} from '../components/isCourier'
import RenderBidItemList from '../components/RenderBidItemList'
import GetRouteInfo from '../hooks/GetRouteInfo'
import GetLuggageInfo from '../hooks/GetLuggageInfo'

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
    const [courierId, setCourierId] = useState('');
    const [luggageWeight, setLuggageWeight] = useState('');
    const [userAuth,setUserAuth] = useState('')


    console.log(luggageHeight)
    console.log(luggageWeight)
    console.log(luggageLength)
    console.log(luggageWidth)
    console.log(luggageId)
    console.log(userAuth)


    
    /// GetRouteInfo returns a list of route details from a fetch
    let routeInfo = GetRouteInfo()
    /// GET Luggage INfo return a luggage Id object
    let luggageInfo = GetLuggageInfo()

    console.log('RouteINfo', routeInfo)
    

   
    useEffect(() => {
        isCourier(user).then((res) => setUserAuth(res))
        console.log('auth says what',userAuth)
    },[user])
    

    
    let url = [`https://countryflagsapi.com/png/${routeInfo['deptCountry']}`,
        `https://countryflagsapi.com/png/${routeInfo['arrivCountry']}`]
    
    
    return (
        <PageLayout>
            <div className=''>
                <div className='flex  flex-col  bg-barrel-green items-center  '>
                    <div className='border-2 m-12'>
                        <RouteDetailsCardLg url={url}
                            deptAirport={routeInfo['deptAirport']}
                            arrivAirport={routeInfo['arrivAirport']}
                            deptDate={routeInfo['deptDate']}
                            luggageWeight={luggageInfo['luggageWeight']}
                            luggageHeight={luggageInfo['luggageHeight']}
                            luggageLength={luggageInfo['luggageLength']}
                            luggageWidth={luggageInfo['luggageWidth']}
                        />
                    </div>

                    <div className='w-88  flex'>
                        {
                            !!user && userAuth === 'false' ?
                                <>
                                <ParcelPictures userId={user.uid} />
                                <NewItemButton/>
                                </> 
                                : !!user && userAuth === 'true' ?
                                <>
                                <RenderBidItemList userId={user.uid} />
                                
                                </> :''
                            
                        }
                    </div>
                    <div className='bg-green-400 m-12 w-22'>
                        {
                            user ? <HandleBid courierId={courierId} />
                                : ''
                        }
                    </div>


                </div>
            </div>
        </PageLayout >
    )
}

export default RouteDetailsPage
