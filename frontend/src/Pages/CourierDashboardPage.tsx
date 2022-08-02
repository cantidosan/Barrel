import React, { FC,useState,useContext,useEffect } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'
import RouteFlag from '../components/RouteFlag'
import RouteInfoCard from '../components/RouteInfoCard'
import RouteDetailsCardSmCourrierView from '../components/RouteDetailsCardSmCourrierView'
import ParcelPicture from '../components/ParcelPicture'
import PendingBidCardSm from '../components/PendingBidCardSm'
import DeliveryDetailsCardSmCourrierView from '../components/DeliveryDetailsCardSmCourrierView'
import PastDeliveryCard from '../components/PastDeliveryCard'
import ToggleRouteDeliveryButton from '../buttons/ToggleRouteDeliveryButton'
import { useStateValue } from '../state/';
import ScanButton from '../buttons/ScanButton'
import NewRouteButton from '../buttons/NewRouteButton'
import BidStatusSubheader from '../components/layouts/subheaders/BidStatusSubheader'
import AuthContext from '../auth/authContext'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";
import {
    getFirestore, addDoc, updateDoc,
    doc, getDocs, query,
    collection, where, getDoc
} from "firebase/firestore"; 
import { isRouteOwner } from '../components/isRouteOwner'

///TODO COMPLETE STYLING THE TOGGLE BUTTON MISSING SVG BARREL ICON AND PLACEHOLDER LABEL
const CourierDashboardPage: FC = () => {

    const [{ courierToggle }, dispatch] = useStateValue();

    let dashboardView = courierToggle

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
    const [bidItemList, setBidItemList] = useState<any>([]);
    

    const { user } = useContext(AuthContext);
    console.log(user)
   
    const [routeInfoList, setRouteInfoList] = useState([]);

    const url = [prflag, americanflag]
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    let routeObjectList = [] as any
    let bidArray=[] as any


    useEffect(() =>
    {
        if(user){
        //simple active route query
        const routeQuery = query(collection(db, "routes"), where("userId", "==", user.uid));
            getDocs(routeQuery).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());

                    let dateObject = new Date(doc.data().departure_date.toDate())
                            
                    let routeObject =
                    
                    {
                        routeId: doc.id,
                        arrival_ariport: doc.data().arrival_airport,
                        arrival_country: doc.data().arrival_country,
                        departure_airport: doc.data().departure_airport,
                        departure_country: doc.data().departure_country,
                        departure_date: `${dateObject?.getMonth()} / ${dateObject?.getMonth()} `,
                        exchange_location: doc.data().exchange_location,
                        exchange_policy: doc.data().exchange_policy,
                        flight_number: doc.data().flight_number,
                        userId: doc.data().userId,
                        luggageId: '',
                        weight_capacity: '',
                        width_capacity: '',
                        height_capacity: '',
                        length_capacity:'',
                    }
                    //provides the luggage info for each route fetched
                    getDocs(query(collection(db, `routes/${doc.id}/luggage`),
                                where('height_capacity', '>=', '0')))
                                .then((luggagequerySnapshot) => {
                                    luggagequerySnapshot.forEach((queryDocumentSnapshot) =>
                                    {

                                        routeObject.length_capacity = queryDocumentSnapshot.data().length_capacity as string
                                        routeObject.height_capacity = queryDocumentSnapshot.data().height_capacity as string
                                        routeObject.width_capacity = queryDocumentSnapshot.data().width_capacity as string
                                        routeObject.weight_capacity = queryDocumentSnapshot.data().weight_capacity as string
                                        routeObject.luggageId = queryDocumentSnapshot.id as string

                                        routeObjectList.push(routeObject)
                                        
                                        setRouteInfoList(routeObjectList)
                                    })
                                })
    
                });
            })
        }
            //fetches bid details
        
        // const bidQuery = query(collection(db, "bids"),
        //     where("courierId", "==", user.uid));
        //     getDocs(bidQuery).then((bidquerySnapshot) => {
        //         bidquerySnapshot.forEach((doc) => {
        //             // doc.data() is never undefined for query doc snapshots
                    
        //                 console.log(doc.id, " => ", doc.data().senderId);
        //                 console.log('we made it ')
        //         });  
        //     })
    }, [user])
    
    useEffect(() =>
    {
        if (user) {
            const pendingBidsQuery = query(collection(db, "bids"), where("courierId", "==", user.uid));
            getDocs(pendingBidsQuery).then((querySnapshot) => {
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
                        } as any

                    getDocs(query(collection(db, `bids/${doc.id}/bidItems`),
                        where('itemList', '!=', '0')))
                        .then((bidItemQuerySnapshot) => {

                            bidItemQuerySnapshot.forEach((queryDocumentSnapshot) => {

                                bidObject['bidItems'].push(queryDocumentSnapshot.data().itemList)


                            })
                            console.log('biditems',bidObject['bidItems'])
                            bidArray.push(bidObject)
                            setBidItemList([...bidArray,bidObject])
                        })
                
                })
            })
        }
            
    },[user])               
 
                
    console.log('bidItem List',bidItemList)
    
    
    // FETCH ALL ROUTE DOCS TIED TO THE USER REGARDLESS OF ITS
    //RELATIVE STATE(active/disabled/intransit/etc)
    return (
        <PageLayout>
            <main className='bg-barrel-green flex  flex-col '>
                {/* payout represents courier lifetime earnings */}
                <p className='text-white text-2xl 
                    font-hansief font-bold 
                    text-center bg-barrel-green 
                    pt-10 tracking-wide'
                >
                    PAYOUT : $638.83
                </p>

                <section className='flex justify-center 
                    pt-10 bg-barrel-green'
                    id="dashboardToggle">

                    <div className='flex justify-between '>

                        {courierToggle === 'Route' ? <ScanButton /> : ''}

                        <ToggleRouteDeliveryButton />

                        {courierToggle === 'Route' ? <NewRouteButton /> : ''}


                    </div>


                </section>
                <section className='flex justify-center mt-10 gap-4 '
                >
                    {dashboardView === 'Route' ?
                        <div className='flex flex-col md:flex-row gap-4  '>
                            {/* each comp needs two urls per url prop
                            and route/luggage information */}
                            {
                                routeInfoList.map((routeInfo: any,
                                    key: any
                                ) =>
                                    {
                        
                    
                                        return <RouteDetailsCardSmCourrierView url={url}
                                        deptAirport={routeInfo['departure_airport']}
                                        arrivAirport={routeInfo['arrival_airport']}
                                        deptDate={routeInfo['departure_date']}
                                        luggageWeight={routeInfo['weight_capacity']}
                                        luggageHeight={routeInfo['height_capacity']}
                                        luggageLength={routeInfo['length_capacity']}
                                        luggageWidth={routeInfo['width_capacity']}
                                        routeId={routeInfo['routeId']}
                                        key={routeInfo['routeId']}
                                        
                                        />
                            
                                    }
                                )
                            }

                        </div> :

                        <div className='flex flex-col md:flex-row gap-4 '>
                            {/* comp below requires */}

                            <DeliveryDetailsCardSmCourrierView />
                            <DeliveryDetailsCardSmCourrierView />
                        </div>


                    }


                </section>

                <BidStatusSubheader />

                <section className=' flex justify-center
                            gap-2 mt-10   '>


                    {
                        dashboardView === 'Route' ?
                            <div className='flex flex-col md:flex-row gap-4 '>
                                {/* this comp needs two flag urls and one item url */}
                                {bidItemList.map((bidDetail: any,
                                    key: any
                                ) => {
                                    
                                    return <PendingBidCardSm
                                        bidId={bidDetail['bidId']}
                                        amount={bidDetail['amount']}
                                        courierId={bidDetail['courierId']}
                                        status={bidDetail['status']}
                                        senderId={bidDetail['senderId']}
                                        routeId={bidDetail['routeId']}
                                        bidItems={bidDetail['bidItems']}
                                    />
                                }
                                
                                )}
                                
                                

                            </div> :


                            <div className='flex flex-col md:flex-row gap-4 '>
                                <PastDeliveryCard />
                                <PastDeliveryCard />
                                <PastDeliveryCard />
                            </div>
                    }


                </section>
            </main>

        </PageLayout >
    )
}

export default CourierDashboardPage
