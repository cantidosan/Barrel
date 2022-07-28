import React, { FC,useState,useContext, useEffect } from 'react'

import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'
import RouteDetailsCardSm from '../components/RouteDetailsCardSm'
import PageLayout from '../components/layouts/PageLayout'
import { useStateValue } from '../state/index'
import { getFirestore, addDoc, updateDoc,doc, getDocs, query,
    collection, where, getDoc } from "firebase/firestore";
import AuthContext from '../auth/authContext'
import { firebaseConfig } from "../FirebaseConfig";
import { initializeApp } from "firebase/app";

//TODO REFACTOR RANDOM DIVS TO BE MORE SPEFICI SEMANTIC HTML


const HomePage: FC = () => {

    const [{ deptPort, arrivPort }, dispatch] = useStateValue();
    
    const [routeInfoList, setRouteInfoList] = useState([]);
    const [luggageIdList, setLuggageIdList] = useState([]);

    console.log(routeInfoList)

    const [flagPic, setFlagPic] = useState();
    const { user } = useContext(AuthContext);
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const url = [prflag, americanflag]

    let routeObjectList = [] as any
    let luggageObjectList = [] as any
        
   //REQUIRES A FETCH FROM THE DB TO PLACE
    //DATA INSIDE route info state variable
    useEffect(() =>
        {

            getDocs(collection(db, "routes"))
            .then((querySnapshot) =>
                {
                    querySnapshot.forEach((doc) =>
                    {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data().arrival_airport)
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
                        // console.log('routeObject', routeObject)
                        // routeObjectList.push(routeObject)
                        //  console.log("post Push Data", tempItemURL)
                        // setRouteInfoList(routeObjectList)

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
                        
                    })
                
                })
            
          
            
        }, [])
          
          
    

    return (

        <PageLayout>
            <section className='bg-barrel-green'>
                <div className='container mx-auto pt-20 px-16 
                    align-items-center '>
                    <div className=' grid gap-3 md:grid md:grid-cols-3'>
                    {
                                routeInfoList.map((routeInfo: any,
                                    key: any
                                ) =>
                                
                                    {
                                        console.log('Width',routeInfo.luggageWidth)
                                        console.log('Weight',routeInfo['weight_capacity'])
                                        console.log('Height',routeInfo['height_capacity'])
                                        console.log('Length',routeInfo.luggageLength)
                                        
                                        return <RouteDetailsCardSm url={url}
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

                    </div>
                </div >
            </section >
        </PageLayout>
    )
}


export default HomePage
