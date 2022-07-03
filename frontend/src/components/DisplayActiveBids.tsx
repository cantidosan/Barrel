import React from 'react'
import DisplayParcelPicture from './DisplayParcelPicture'
import DisplayPendingBidCardSm from './DisplayPendingBidCardSm'

//This component takes the senderId as a prop and fetches
//all items created by the user then fetches the picurls for each 
//component

const DisplayActiveBids = () => {
    return (
        <div className='max-w-54 p-4 bg-barrel-green rounded-lg'>
            <div className=' flex flex-column gap-4 pb-2 overflow-x-scroll overflow-hidden'>


                <DisplayPendingBidCardSm />




            </div>

        </div>
    )
}

export default DisplayActiveBids
