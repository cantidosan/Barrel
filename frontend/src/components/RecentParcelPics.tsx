import React from 'react'
import ParcelPicture from './ParcelPicture'
import PendingBidCardSm from './PendingBidCardSm'

//This component takes the senderId as a prop and fetches
//all items created by the user then fetches the picurls for each 
//component

const RecentParcelPics = () => {
    return (
        <div className='max-w-54 p-4 bg-barrel-green rounded-lg'>
            <div className=' flex flex-column gap-4 pb-2 overflow-x-scroll overflow-hidden'>


                <ParcelPicture />
                <ParcelPicture />
                <ParcelPicture />
                <ParcelPicture />




            </div>

        </div>
    )
}

export default RecentParcelPics
