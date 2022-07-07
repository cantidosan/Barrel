import React, { FC, useContext } from 'react'
import RouteDetailsCardLg from '../components/RouteDetailsCardLg'
import ParcelPictures from '../components/ParcelPictures'
import HandleBid from '../components/HandleBid'
import PageLayout from '../components/layouts/PageLayout'

import AuthContext from '../auth/authContext'
const RouteDetailsPage: FC = () => {

    const { user } = useContext(AuthContext);


    return (
        <PageLayout>
            <div className=''>
                <div className='flex  flex-col  bg-barrel-green items-center  '>
                    <div className='border-2 m-12'>
                        <RouteDetailsCardLg />
                    </div>

                    <div className='w-88  flex'>
                        {user ? <ParcelPictures /> : ''}
                    </div>
                    <div className='bg-green-400 m-12 w-22'>
                        {user ? <HandleBid /> : ''}
                    </div>


                </div>
            </div>
        </PageLayout >
    )
}

export default RouteDetailsPage
