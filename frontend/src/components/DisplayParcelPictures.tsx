import React, { FC, ReactElement } from 'react'
import DisplayParcelPicture from './DisplayParcelPicture'



const DisplayParcelPictures: FC = (props) => {





    return (
        <div className='box-content h-18 w-46 p-4 border-4  '>
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
