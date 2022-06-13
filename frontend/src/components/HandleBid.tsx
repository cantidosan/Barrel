import React, { FC } from 'react'
import DecideBid from './DecideBid';
import DisplayBidDetails from './DisplayBidDetails';


const HandleBid: FC = () => {
    return (
        <div className='bg-barrel-green'>
            <DisplayBidDetails />
            <DecideBid />
        </div>
    )
}

export default HandleBid;
