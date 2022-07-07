import React, { FC, ReactElement } from 'react'
import ParcelPicture from './ParcelPicture'


///Takes an array of parcel objects and palces it in 
///selectedImage 

const ParcelPictures: FC = (props) => {


    return (
        <div className='box-content p-4 bg-gray-600 rounded-lg  '>
            <div className='flex flex-column gap-4' >

                <ParcelPicture />
                <ParcelPicture />
                <ParcelPicture />
                <ParcelPicture />


            </div>

        </div>
    )
}

export default ParcelPictures
