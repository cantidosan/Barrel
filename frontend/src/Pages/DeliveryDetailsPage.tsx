import React, { FC } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import ParcelDeliveryDetails from '../components/ParcelDeliveryDetails'
import DisplayDeliveryUpdates from '../components/DisplayDeliveryUpdates'
import CreateDeliveryUpdates from '../components/CreateDeliveryUpdates'
import DisplayRouteFlag from '../components/DisplayRouteFlag'
import americanflag from '../assets/images/americanflag.png'
import prflag from '../assets/images/prflag.png'


const DeliveryDetailsPage: FC = () => {

    const url = [prflag, americanflag]


    return (
        <PageLayout>
            <div className='bg-barrel-green'>
                <main className=''>
                    <section className='flex justify-center'>
                        <ParcelDeliveryDetails />
                    </section>
                    <section className='flex justify-center mt-8  bg-barrel-green '>
                        <div className='grid grid-cols-2 flex-col border-2 gap-20'>
                            <div className='flex border-2 bg-barrel-green'>
                                <div className=' justify-center w-14' id="flags">
                                    <DisplayRouteFlag url={url[1]} />
                                    <DisplayRouteFlag url={url[0]} />
                                </div>
                                <div className='ml-3' id="payouttext">
                                    <span className='m-1 text-left font-bold font-roboto text-white opacity-60
                                    text-md'>PAYOUT
                                    </span><br />
                                    <span className='text-right text-lg
                                    font-bold text-white mr-1 text-lime-500'
                                    >
                                        $90.00
                                    </span>
                                </div>

                            </div>

                            <div className='border-2' id="porttext">
                                <span className='m-1 text-left text-white opacity-60 font-bold font-roboto
                                    text-md'>PORTS
                                </span><br />
                                <span className='text-right 
                                    font-bold text-white mr-1'
                                >
                                    JFK -IATA
                                </span><br />
                                <span className='m-1 text-left font-bold font-roboto text-white opacity-60
                                    text-sm'>EXCHANGE LOCATION
                                </span><br />
                                <span className='text-right 
                                    font-bold text-white mr-1 text-lime-500'
                                >
                                    IATA arrivals
                                </span>
                            </div>



                        </div>
                    </section>
                    <section className='flex flex-cols gap-4 
                        justify-center mt-8'>

                        <DisplayDeliveryUpdates />
                        <CreateDeliveryUpdates />

                    </section>
                </main>
            </div>
        </PageLayout>
    )
}

export default DeliveryDetailsPage
