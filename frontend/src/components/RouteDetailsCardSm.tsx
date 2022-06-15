import React, { ReactElement, FC } from 'react'
import DisplayRouteFlag from './DisplayRouteFlag';
import DisplayRouteInfoCard from './DisplayRouteInfoCard';

import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'



const RouteDetailsCardSm: FC = (props) => {

    const url = [prflag, americanflag]

    return (

        <>
            <div className='m-4  h-32 w-23 justify-center 
                            bg-barrel-green-300 flex gap-2'>
                <div className='flex flex-col basis-1/2 border-2
                            border-black '>

                    <DisplayRouteFlag url={url[0]} />
                    <DisplayRouteFlag url={url[1]} />

                </div>

                <div className='basis-1/2 border-2 bg-barrel-green border-black '>

                    <DisplayRouteInfoCard />

                </div>

            </div>
        </>
    )
}

export default RouteDetailsCardSm
