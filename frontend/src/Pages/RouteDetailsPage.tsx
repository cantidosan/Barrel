import React, { FC, ReactElement } from 'react'
import DisplayRouteDetailsCardLg from '../components/DisplayRouteDetailsCardLg'
import DisplayParcelPictures from '../components/DisplayParcelPictures'
import HandleBid from '../components/HandleBid'
import PageLayout from '../components/layouts/PageLayout'

const RouteDetailsPage: FC = () => {
    return (
        <PageLayout>
            <div className=''>
                <div className='flex  flex-col  bg-barrel-green items-center  '>
                    <div className='border-2 m-12'>
                        <DisplayRouteDetailsCardLg />
                    </div>
                    <div className='w-88  flex'>
                        <DisplayParcelPictures />
                    </div>
                    <div className='bg-green-400 m-12 w-22'>
                        <HandleBid />
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default RouteDetailsPage
