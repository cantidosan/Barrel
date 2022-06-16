import React, { FC } from 'react'
import profilepic from '../assets/images/profilepic.jpg'

///TODO THIS COMPONENT WILL NEED CONDITIONAL RENDERING
/// BASED ON COURIER OR SENDER VIEW TO HIDE QR CODE FOR e.g

const ParcelDeliveryInfo: FC = () => {

    return (

        <div className='mt-4 flex flex-col justify-center'>
            <div>
                <span className='m-1 text-left font-weight-200 text-white opacity-60 font-roboto'>Item Name:</span>
                <span className='text-left font-bold text-white'>Headphones</span><br />
            </div>
            <div className='mt-4'>
                <span className='m-1 text-left font-weight-200 text-white opacity-60 font-roboto' >Status:</span>
                <span className='text-left font-bold text-white'>  IN TRANSIT </span><br />
            </div>
            <div className='mt-4'>
                <span className='m-1 text-left font-weight-200 text-white opacity-60 font-roboto'>Route:</span>
                <span className='text-left font-bold text-white'>   USA PUR</span><br />
            </div>
            <div>
                <p className='m-1 text-white opacity-60 font-roboto'>QR CODE</p>
                <img className="float-right mb-3 w-24 h-24 rounded-full shadow-lg "
                    src={profilepic} alt="QR Code" />
            </div>
        </div>

    )
}

export default ParcelDeliveryInfo
