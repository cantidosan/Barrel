import React, { FC, ReactElement } from 'react'
import BidDetails from './BidDetails'
import DecideBid from './DecideBid'
import MakeBid from './MakeBid'

const DisplayBidDetails: FC = () => {

    let emptyBool = false

    return (
        <div className='flex flex-row border  '>
            {true ? <MakeBid /> : <DecideBid />}
            <BidDetails />
        </div>
    )
}

export default DisplayBidDetails
