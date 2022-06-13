import React, { FC } from 'react'
import americanflag from '../assets/images/americanflag.png'
import prflag from '../assets/images/prflag.png'
import ParcelDeliveryInfo from './ParcelDeliveryInfo'

const ParcelDeliveryDetails: FC = () => {

    const url = [prflag, americanflag]


    return (
        <div className='flex flex-cols items-center'>



            <img className=" 
                   block object-cover 
                   object-center w-full 
                   h-full rounded-lg"
                src={url[1]} alt=""
            />
            <ParcelDeliveryInfo />
        </div >
    )
}

export default ParcelDeliveryDetails
