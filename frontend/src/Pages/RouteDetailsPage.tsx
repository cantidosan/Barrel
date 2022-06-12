import React, { FC, ReactElement } from 'react'
import DisplayRouteDetailsCardLg from '../components/DisplayRouteDetailsCardLg'
import DisplayParcelPictures from '../components/DisplayParcelPictures'
import HandleBid from '../components/HandleBid'

const RouteDetailsPage: FC = () => {
    return (
        <div className=' '>
            <div className='flex justify-center flex-col  bg-yellow-300    '>
                <div className=' bg-red-400 '>
                    <DisplayRouteDetailsCardLg />
                </div>
                <div className=' bg-blue-300'>
                    <DisplayParcelPictures />
                </div>
                <div className='bg-green-400'>
                    <HandleBid />
                </div>
            </div>
        </div>
    )
}

export default RouteDetailsPage
