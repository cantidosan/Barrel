import React, { FC } from 'react'
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



    const url = [prflag, americanflag]

    return (
        <PageLayout>
            <main className='bg-barrel-green flex  flex-col '>

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
                            <RouteDetailsCardSmCourrierView />
                            <RouteDetailsCardSmCourrierView />


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
