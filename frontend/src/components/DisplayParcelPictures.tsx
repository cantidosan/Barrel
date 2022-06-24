import React, { FC, ReactElement } from 'react'
import DisplayParcelPicture from './DisplayParcelPicture'



const DisplayParcelPictures: FC = (props) => {

    return (
        <div className='box-content p-4 bg-white rounded-lg  '>
            <div className='flex flex-column gap-4'>

                <DisplayParcelPicture />
                <DisplayParcelPicture />
                <DisplayParcelPicture />
                <DisplayParcelPicture />

            </div>

        </div>
    )
}

export default DisplayParcelPictures
