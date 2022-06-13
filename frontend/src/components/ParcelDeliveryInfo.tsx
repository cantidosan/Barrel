import React, { FC } from 'react'
import profilepic from '../assets/images/profilepic.jpg'


const ParcelDeliveryInfo: FC = () => {

    return (

        <div className='mt-4 flex flex-col'>
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
                <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={profilepic} alt="Bonnie image" />
            </div>
        </div>

    )
}

export default ParcelDeliveryInfo
