import React, { FC,useState } from 'react'
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


    const [routeInfoList, setRouteInfoList] = useState([]);

    const url = [prflag, americanflag]


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
                                            deptAirport={routeInfo.deptAirport}
                                            arrivAirport={routeInfo.arrivAirport}
                                            deptDate={routeInfo.deptDate}
                                            luggageWeight={routeInfo.luggageWeight}
                                            luggageHeight={routeInfo.luggageHeight}
                                            luggageLength={routeInfo.luggageLength}
                                            luggageWidth={routeInfo.luggageWidth}
                                            routeId={routeInfo.routeId}
                                        
                                        />
                            
                                    }
                                )
                            }

                        </div> :

                        <div className='flex flex-col md:flex-row gap-4 '>
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
                                <PendingBidCardSm />
                                <PendingBidCardSm />
                                <PendingBidCardSm />

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
