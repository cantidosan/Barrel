import React, { FC } from 'react'

const BidDetails: FC = () => {
    return (
        <div className='flex flex-col p-3'>
            <div className=''>
                <span className='text-white font-thin opacity-80 font-roboto'>WEIGHT:</span><br />
                <span className=' font-bold text-white'>13 lbs</span><br />
            </div>
            <div className=''>
                <span className='text-white font-thin opacity-80 font-roboto'>SPACE:</span><br />
                <span className=' font-bold text-white'>15 Sqft   </span><br />
            </div>
        </div>
    )
}

export default BidDetails
