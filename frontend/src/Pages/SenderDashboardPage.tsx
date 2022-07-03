import React, { FC } from 'react'
import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'
import PageLayout from '../components/layouts/PageLayout'
import ParcelDeliveryDetails from '../components/ParcelDeliveryDetails'
import DisplayActiveBids from '../components/DisplayActiveBids'
import DisplayDeliveryUpdates from '../components/DisplayDeliveryUpdates'
import DisplayParcelPictures from '../components/DisplayParcelPictures'


const SenderDashboardPage: FC = () => {

    const url = [prflag, americanflag]


    return (
        <PageLayout>
            <div className='bg-barrel-green'>
                <main className=''>
                    <section className='flex justify-center '>
                        <ParcelDeliveryDetails />
                    </section>
                    <section className='flex justify-center  mt-8'>
                        <DisplayParcelPictures />
                    </section>
                    <section className='flex flex-col px-3 
                        md:flex-row  gap-4 md:gap-4 justify-center
                        mt-8'
                    >
                        <div className='md:w-32'>
                            <DisplayDeliveryUpdates />
                        </div>
                        <div className='opacity-70 hover:opacity-100  '>
                            <span className='font-bold text-white opacity-100'
                            >
                                MANAGE BIDS
                            </span>
                            {/* We need to pass a prop to this containing
                            shortcuts to recently created parcels */}
                            <DisplayActiveBids />
                        </div>
                    </section>
                </main>
            </div>
        </PageLayout>
    )
}

export default SenderDashboardPage
