import React, { FC, ReactElement } from 'react'
import RouteFlag from './RouteFlag';
import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'
import RouteInfoCardDetail from '../components/RouteInfoCardDetail';



const RouteDetailsCardLg: FC = () => {

    const url = [prflag, americanflag]


    return (
        <div className=' flex flex-row basis-1/2  '>
            <div className='flex flex-col basis-1/2 '>
                <RouteFlag url={url[0]} />
                <RouteFlag url={url[1]} />
            </div>
            <div className='border-1'>
                <RouteInfoCardDetail />

            </div>
        </div>
    )
}

export default RouteDetailsCardLg;
