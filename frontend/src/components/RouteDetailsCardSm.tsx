import React, { ReactElement, FC } from 'react'
import RouteFlag from './RouteFlag';
import RouteInfoCard from './RouteInfoCard';

import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'



const RouteDetailsCardSm: FC = (props) => {

    const url = [prflag, americanflag]

    return (

        <>
            <div className='justify-center 
                            bg-barrel-green flex gap-1'>
                <div className='flex flex-col basis-1/2 border-2 
                             '>

                    <RouteFlag url={url[0]} />
                    <RouteFlag url={url[1]} />

                </div>

                <div className='basis-1/2 border-2 pt-4   '>

                    <RouteInfoCard />

                </div>

            </div>
        </>
    )
}

export default RouteDetailsCardSm
