import React, { FC } from 'react'
import americanflag from '../assets/images/americanflag.png'
import prflag from '../assets/images/prflag.png'
import ParcelDeliveryInfo from './ParcelDeliveryInfo'
import { useStateValue } from '../state/index'

const ParcelDeliveryDetails: FC = () => {

    const url = [prflag, americanflag]

    //The component will be listen for parcelId 
    const [{ parcelId }, dispatch] = useStateValue();

    !!parcelId ? url[1] = parcelId : url[1] = prflag

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
