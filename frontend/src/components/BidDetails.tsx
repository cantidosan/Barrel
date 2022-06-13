import React, { FC } from 'react'

const BidDetails: FC = () => {
    return (
        <div className='basis-1/2 border-2 '>
            <span className='m-1 text-left font-weight-100'>Total Weight:</span>
            <span className='text-right font-bold text-white'> 2.5 lbs</span><br />
            <span className='m-1 text-left font-weight-100'>Total Space:</span>
            <span className='text-right font-bold text-white'> 0.8 sqft</span><br />
        </div>
    )
}

export default BidDetails
