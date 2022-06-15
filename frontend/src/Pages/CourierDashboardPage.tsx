import React, { FC } from 'react'
import PageLayout from '../components/layouts/PageLayout'

import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'
import DisplayRouteFlag from '../components/DisplayRouteFlag'
import DisplayRouteInfoCard from '../components/DisplayRouteInfoCard'
import RouteDetailsCardSmCourrierView from '../components/RouteDetailsCardSmCourrierView'
import DisplayParcelPicture from '../components/DisplayParcelPicture'
import DisplayPendingBidCardSm from '../components/DisplayPendingBidCardSm'
import DeliveryDetailsCardSmCourrierView from '../components/DeliveryDetailsCardSmCourrierView'

///TODO COMPLETE STYLING THE TOGGLE BUTTON MISSING SVG BARREL ICON AND PLACEHOLDER LABEL
const CourierDashboardPage: FC = () => {

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

                    <div className='flex justify-between'>

                        <button id="scanButton" className='mr-12 text-white-500 bg-gradient-to-r 
                     from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br
                     focus:ring-4 focus:outline-none focus:ring-cyan-300
                     dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 
                     dark:shadow-lg dark:shadow-cyan-800/80 font-bold rounded-lg 
                    text-sm px-2.5  text-center  '>SCAN</button>

                        <label htmlFor="green-toggle"

                            className="inline-flex relative items-center 
                            mr-5 cursor-pointer">

                            <input type="checkbox" value="" id="green-toggle"
                                className="sr-only peer" placeholder='HELLO' />
                            <div className="w-28 h-9 bg-orange-500 rounded-full peer
                                dark:bg-orange-700 peer-focus:ring-4 peer-focus:ring-orange-300
                                dark:peer-focus:ring-green-800 
                                peer-checked:after:translate-x-20
                                peer-checked:after:border-white 
                                after:content-[''] after:absolute
                                after:top-0.5 after:left-[px] after:bg-white after:border-orange-300
                                after:border after:rounded-full after:h-8 after:w-8 after:transition-all 
                                dark:border-orange-600 peer-checked:bg-green-600">


                            </div>

                        </label>



                        <button id="newItemButton" className=' text-white-500 bg-gradient-to-r 
                     from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br
                     focus:ring-4 focus:outline-none focus:ring-cyan-300
                     dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 
                     dark:shadow-lg dark:shadow-cyan-800/80 font-bold rounded-lg 
                    text-sm px-2.5  text-center   ml-6'>NEW +</button>
                    </div>


                </section>
                <section className='flex justify-center mt-10 gap-4 '
                >
                    {/* <RouteDetailsCardSmCourrierView />
                    <RouteDetailsCardSmCourrierView /> */}
                    <DeliveryDetailsCardSmCourrierView />
                    <DeliveryDetailsCardSmCourrierView />


                </section>

                <h2 className='text-white underline
                     underline-offset-3 font-hansief 
                     text-2xl font-bold text-center 
                     bg-barrel-green pt-10 tracking-wide'
                >
                    PENDING BIDS
                </h2>
                <section className=' flex  justify-center 
                         gap-2  mt-10   '>
                    {/* <DisplayPendingBidCardSm />
                    <DisplayPendingBidCardSm />
                    <DisplayPendingBidCardSm />
                    <DisplayPendingBidCardSm /> */}


                </section>
            </main>

        </PageLayout >
    )
}

export default CourierDashboardPage
