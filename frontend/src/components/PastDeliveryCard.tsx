import React, { FC } from 'react'
import RouteFlag from './RouteFlag'
import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'
import ParcelPicture from './ParcelPicture'


const PastDeliveryCard: FC = () => {

    const url = [prflag, americanflag]
    return (

        <div className='flex'>
            <figure className='flex flex-col basis-1/2 '>
                <div className='w-7'>
                    <RouteFlag url={url[0]} />
                </div>
                <div className='w-7'>
                    <RouteFlag url={url[1]} />
                </div>

            </figure>
            <div className='pt-1' >
                <ParcelPicture />
            </div>
        </div>
    )
}

export default PastDeliveryCard
