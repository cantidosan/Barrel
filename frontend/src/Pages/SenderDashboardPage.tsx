import React, { FC,useContext,useState } from 'react'
import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'
import PageLayout from '../components/layouts/PageLayout'
import ParcelDeliveryDetails from '../components/ParcelDeliveryDetails'
import ActiveBids from '../components/ActiveBids'
import DeliveryUpdates from '../components/DeliveryUpdates'
import ParcelPictures from '../components/ParcelPictures'
import AuthContext from '../auth/authContext'

const SenderDashboardPage: FC = () => {

    const url = [prflag, americanflag]
    const { user } = useContext(AuthContext);
    console.log(user)
    
    return (
        <PageLayout>
            <div className='bg-barrel-green'>
                <main className=''>
                    <section className='flex justify-center '>
                        {/* this pulls data from the delivery table */}
                        <ParcelDeliveryDetails />
                    </section>
                    <section className='flex justify-center  mt-8'>
                        {!!user ? <ParcelPictures userId={user.uid} />:''}
                    </section>
                    <section className='flex flex-col px-3 
                        md:flex-row  gap-4 md:gap-4 justify-center
                        mt-8'
                    >
                        <div className='md:w-32'>
                            <DeliveryUpdates />
                        </div>
                        <div className='opacity-70 hover:opacity-100  '>
                            <span className='font-bold text-white opacity-100'
                            >
                                MANAGE BIDS
                            </span>
                            {/* We need to pass a prop to this containing
                            links to active bids */}
                            <ActiveBids />
                        </div>
                    </section>
                </main>
            </div>
        </PageLayout>
    )
}

export default SenderDashboardPage
