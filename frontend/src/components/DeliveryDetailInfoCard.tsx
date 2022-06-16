import React, { FC } from 'react'

const DeliveryDetailInfoCard: FC = () => {
    return (
        <div className='border-2'>
            <span className='m-1 text-left 
                 font-weight-100 text-xs'
            >
                Status:
            </span>
            <span className='text-right 
                font-bold text-white'
            > 2.5 lbs</span><br />
            <span className='m-1 text-left 
                text-xs'>Amount
            </span>
            <span className='text-right 
                font-bold text-white mr-1'
            > $90.00</span><br />
        </div>
    )
}

export default DeliveryDetailInfoCard
