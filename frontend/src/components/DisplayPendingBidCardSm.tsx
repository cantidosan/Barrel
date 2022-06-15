import React, { FC } from 'react'
import DisplayRouteFlag from './DisplayRouteFlag'
import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'
import DisplayParcelPicture from './DisplayParcelPicture'

const DisplayPendingBidCardSm: FC = () => {

    const url = [prflag, americanflag]
    return (
        <div className='flex'>
            <figure className='border-2 '>
                <DisplayRouteFlag url={url[0]} />
                <DisplayRouteFlag url={url[1]} />

            </figure>
            <div className='border-2'>
                <DisplayParcelPicture />
            </div>
        </div>
    )
}

export default DisplayPendingBidCardSm
