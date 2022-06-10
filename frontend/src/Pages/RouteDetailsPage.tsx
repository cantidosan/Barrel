import React, { FC, ReactElement } from 'react'
import DisplayRouteDetailsCardLg from '../components/DisplayRouteDetailsCardLg'
import DisplayParcelPictures from '../components/DisplayParcelPictures'
import HandleBid from '../components/HandleBid'

const RouteDetailsPage: FC = () => {
    return (
        <>
            <DisplayRouteDetailsCardLg />
            <DisplayParcelPictures />
            <HandleBid />
        </>
    )
}

export default RouteDetailsPage
