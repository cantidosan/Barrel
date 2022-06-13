import React, { FC } from 'react'
import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'
import PageLayout from '../components/layouts/PageLayout'
import ParcelDeliveryDetails from '../components/ParcelDeliveryDetails'

const SenderDashboardPage: FC = () => {

    const url = [prflag, americanflag]


    return (
        <PageLayout>
            <div className='bg-barrel-green'>
                <div className=''>
                    <div className='flex justify-center'>
                        <ParcelDeliveryDetails />
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default SenderDashboardPage
