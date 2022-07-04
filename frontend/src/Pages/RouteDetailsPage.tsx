import React, { FC, useContext } from 'react'
import DisplayRouteDetailsCardLg from '../components/DisplayRouteDetailsCardLg'
import DisplayParcelPictures from '../components/DisplayParcelPictures'
import HandleBid from '../components/HandleBid'
import PageLayout from '../components/layouts/PageLayout'
import AuthContext from '../auth/authContext'


const RouteDetailsPage: FC = () => {

    const { user } = useContext(AuthContext);

    console.log('CURRENT USER', user)
    return (
        <PageLayout>
            <div className=''>
                <div className='flex  flex-col  bg-barrel-green items-center  '>
                    <div className='border-2 m-12'>
                        <DisplayRouteDetailsCardLg />
                    </div>

                    <div className='w-88  flex'>
                        {user ? <DisplayParcelPictures /> : ''}
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
