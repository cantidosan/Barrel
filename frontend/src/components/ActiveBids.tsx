import React from 'react'
import ParcelPicture from './ParcelPicture'
import PendingBidCardSm from './PendingBidCardSm'

//this component will take the user id and fetch
// all bids that are in an "active" state
// and map them oot ;) .

const ActiveBids = () => {
    return (
        <div className='max-w-54 p-4 bg-barrel-green rounded-lg'>
            <div className=' flex flex-column gap-4 pb-2 overflow-x-scroll overflow-hidden'>


                <PendingBidCardSm />




            </div>

        </div>
    )
}

export default ActiveBids
