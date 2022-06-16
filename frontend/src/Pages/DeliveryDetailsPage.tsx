import React, { FC } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import ParcelDeliveryDetails from '../components/ParcelDeliveryDetails'
import DisplayDeliveryUpdates from '../components/DisplayDeliveryUpdates'
import CreateDeliveryUpdates from '../components/CreateDeliveryUpdates'


const DeliveryDetailsPage: FC = () => {
    return (
        <PageLayout>
            <div className='bg-barrel-green'>
                <main className=''>
                    <section className='flex justify-center '>
                        <ParcelDeliveryDetails />
                    </section>
                    <section className='flex justify-center  mt-8'>
                        BLANK SECTION
                    </section>
                    <section className='flex flex-cols gap-4 justify-center  mt-8'>

                        <DisplayDeliveryUpdates />
                        <CreateDeliveryUpdates />
                        <div className='flex  '>



                            <button id="scanButton" className=' text-white-500 bg-gradient-to-r 
                                    from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br
                                    focus:ring-4 focus:outline-none focus:ring-cyan-300
                                    dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 
                                    dark:shadow-lg dark:shadow-cyan-800/80 font-bold rounded-lg 
                                    text-sm px-2.5  text-center opacity-70 hover:opacity-100 '
                            >
                                CANCEL
                            </button>

                        </div>
                    </section>
                </main>
            </div>
        </PageLayout>
    )
}

export default DeliveryDetailsPage
