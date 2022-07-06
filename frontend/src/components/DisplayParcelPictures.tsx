import React, { FC, ReactElement } from 'react'
import DisplayParcelPicture from './DisplayParcelPicture'


///Takes an array of parcel objects and palces it in 
///selectedImage 

const DisplayParcelPictures: FC = (props) => {


    return (
        <div className='box-content p-4 bg-gray-600 rounded-lg  '>
            <div className='flex flex-column gap-4' >

                <DisplayParcelPicture />
                <DisplayParcelPicture />
                <DisplayParcelPicture />
                <DisplayParcelPicture />


            </div>

        </div>
    )
}

export default DisplayParcelPictures
