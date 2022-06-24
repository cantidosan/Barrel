import React, { FC } from 'react'
import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'
import PageLayout from '../components/layouts/PageLayout'
import ParcelDeliveryDetails from '../components/ParcelDeliveryDetails'
import DisplayParcelPictures from '../components/DisplayParcelPictures'
import DisplayDeliveryUpdates from '../components/DisplayDeliveryUpdates'
import DisplayRecentParcelPics from '../components/DisplayRecentParcelPics'


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
                    <section className='flex flex-cols gap-4 justify-center  mt-8'>

                        <DisplayDeliveryUpdates />
                        <div className='opacity-70 hover:opacity-100  '>
                            <span className='font-bold text-white opacity-100'>RECENT</span>
                            {/* We need to pass a prop to this containing
                            shortcuts to recently created parcels */}
                            <DisplayRecentParcelPics />
                        </div>
                    </section>
                </main>
            </div>
        </PageLayout>
    )
}

export default SenderDashboardPage
