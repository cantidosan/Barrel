import React, { FC } from 'react'
import BidDetailsView from './BidDetailsView';
import BidDetails from './BidDetails';


const HandleBid: FC = () => {
    return (
        <div className='bg-barrel-green'>
            <BidDetailsView/>
            {/* <BidDetails /> */}

        </div>
    )
}

export default HandleBid;
