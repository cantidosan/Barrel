import React, { FC } from 'react'
import americanflag from '../assets/images/americanflag.png'
import prflag from '../assets/images/prflag.png'
import ParcelDeliveryInfo from './ParcelDeliveryInfo'

const ParcelDeliveryDetails: FC = () => {

    const url = [prflag, americanflag]


    return (
        <div className='flex flex-cols items-center'>


            <figure className='flex ' >
                <img className=" 
                    block object-fit 
                    object-center  rounded-lg"
                    src={url[1]} alt="" width="313"
                />
                <ParcelDeliveryInfo />
            </figure>

        </div >
    )
}

export default ParcelDeliveryDetails
