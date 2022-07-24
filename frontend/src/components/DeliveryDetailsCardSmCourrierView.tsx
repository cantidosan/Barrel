import React, { FC } from 'react'
import DeliveryDetailInfoCard from './DeliveryDetailInfoCard'
import ParcelPicture from './ParcelPicture'

const url = ['']
const DeliveryDetailsCardSmCourrierView: FC = () => {
    return (
        <div className='flex'>
            <ParcelPicture url={url} />
            <DeliveryDetailInfoCard />
        </div>
    )
}

export default DeliveryDetailsCardSmCourrierView
