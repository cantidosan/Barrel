import React, { FC } from 'react'
import DeliveryDetailInfoCard from './DeliveryDetailInfoCard'
import ParcelPicture from './ParcelPicture'

const DeliveryDetailsCardSmCourrierView: FC = () => {
    return (
        <div className='flex'>
            <ParcelPicture />
            <DeliveryDetailInfoCard />
        </div>
    )
}

export default DeliveryDetailsCardSmCourrierView
