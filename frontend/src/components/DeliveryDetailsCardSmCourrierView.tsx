import React, { FC } from 'react'
import DeliveryDetailInfoCard from './DeliveryDetailInfoCard'
import DisplayParcelPicture from './DisplayParcelPicture'

const DeliveryDetailsCardSmCourrierView: FC = () => {
    return (
        <div className='flex'>
            <DisplayParcelPicture />
            <DeliveryDetailInfoCard />
        </div>
    )
}

export default DeliveryDetailsCardSmCourrierView
