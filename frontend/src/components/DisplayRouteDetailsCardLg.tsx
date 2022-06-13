import React, { FC, ReactElement } from 'react'
import DisplayRouteFlag from './DisplayRouteFlag';
import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'
import DisplayRouteInfoCard from './DisplayRouteInfoCard';



const DisplayRouteDetailsCardLg: FC = () => {

    const url = [prflag, americanflag]


    return (
        <div className=' flex flex-row basis-1/2 gap-2 '>
            <div className='flex flex-col basis-1/2 border-2'>
                <DisplayRouteFlag url={url[0]} />
                <DisplayRouteFlag url={url[1]} />
            </div>
            <div className='border-1'>
                <DisplayRouteInfoCard />

            </div>
        </div>
    )
}

export default DisplayRouteDetailsCardLg;
