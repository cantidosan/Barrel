import React, { FC, ReactElement } from 'react'
import BidDetails from './BidDetails'
import DecideBid from './DecideBid'
import MakeBid from './MakeBid'

const DisplayBidDetails: FC = () => {
    return (
        <div className='flex flex-row  '>
            {false ? <MakeBid /> : <DecideBid />}
            <BidDetails />
        </div>
    )
}

export default DisplayBidDetails
