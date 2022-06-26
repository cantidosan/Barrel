import React from 'react'
import DisplayParcelPicture from './DisplayParcelPicture'


//This component takes the senderId as a prop and fetches
//all items created by the user then fetches the picurls for each 
//component

const DisplayRecentParcelPics = () => {
    return (
        <div className='box-content overflow-hidden w-58 
            p-4 bg-barrel-green rounded-lg'>
            <div className='flex flex-column gap-4 overflow-hidden'>

                <DisplayParcelPicture />
                <DisplayParcelPicture />
                <DisplayParcelPicture />
                <DisplayParcelPicture />


            </div>

        </div>
    )
}

export default DisplayRecentParcelPics
