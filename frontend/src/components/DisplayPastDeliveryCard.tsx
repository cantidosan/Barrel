import React, { FC } from 'react'
import DisplayRouteFlag from './DisplayRouteFlag'
import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'
import DisplayParcelPicture from './DisplayParcelPicture'


const DisplayPastDeliveryCard: FC = () => {

    const url = [prflag, americanflag]
    return (

        <div className='flex'>
            <figure className='flex flex-col basis-1/2 '>
                <div className='w-7'>
                    <DisplayRouteFlag url={url[0]} />
                </div>
                <div className='w-7'>
                    <DisplayRouteFlag url={url[1]} />
                </div>

            </figure>
            <div className='pt-1' >
                <DisplayParcelPicture />
            </div>
        </div>
    )
}

export default DisplayPastDeliveryCard
