import React, { FC } from 'react'
import profilepic from '../assets/images/profilepic.jpg'


const ParcelDeliveryInfo: FC = () => {

    return (

        <div className='mt-4 flex flex-col justify-center'>
            <div>
                <span className='m-1 text-left font-weight-200'>Item Name:</span>
                <span className='text-left font-bold text-white'>Headphones</span><br />
            </div>
            <div className='mt-4'>
                <span className='m-1 text-left font-weight-200'>Status:</span>
                <span className='text-left font-bold text-white'>  IN TRANSIT </span><br />
            </div>
            <div className='mt-4'>
                <span className='m-1 text-left font-weight-200'>Route:</span>
                <span className='text-left font-bold text-white'>   JFK SJU</span><br />
            </div>
            <div>
                <p className='m-1'>QR CODE</p>
                <img className="float-right mb-3 w-24 h-24 rounded-full shadow-lg"
                    src={profilepic} alt="QR Code" />
            </div>
        </div>

    )
}

export default ParcelDeliveryInfo
