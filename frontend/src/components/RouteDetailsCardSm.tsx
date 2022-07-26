import React, { ReactElement, FC } from 'react'
import RouteFlag from './RouteFlag';
import RouteInfoCard from './RouteInfoCard';

import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'

interface routeProp  {

    url: string[] ;
    deptAirport: string;
    arrivAirport: string;
    deptDate: any;
    luggageWeight: string;
    luggageHeight:number;
    luggageLength: number;
    luggageWidth: number;
    routeId:string

}
const flagCode = 'PR'

const RouteDetailsCardSm: FC<routeProp> = (props:routeProp) => {
    const {
        url,
        deptAirport,
        arrivAirport,
        deptDate,
        luggageWeight,
        luggageHeight,
        luggageLength,
        luggageWidth,
        routeId
            
    } = props
   
    // let url = [`https://countryflagsapi.com/png/${flagCode}`,`https://countryflagsapi.com/png/${'JAM'}`]

    return (

        <>
            <div className='justify-center 
                            bg-barrel-green flex gap-1'>
                <div className='flex flex-col basis-1/2 border-2 
                             '>

                    <RouteFlag url={url[0]!} />
                    <RouteFlag url={url[1]!} />

                </div>

                <div className='basis-1/2 border-2 pt-4   '>

                    <RouteInfoCard
                        routeId={routeId}
                        luggageHeight={luggageHeight}
                        luggageLength={luggageLength}
                        luggageWeight={luggageWeight}
                        luggageWidth={luggageWidth}
                        deptAirport={deptAirport}
                        arrivAirport={arrivAirport}
                        deptDate={deptDate}
                    />

                </div>

            </div>
        </>
    )
}

export default RouteDetailsCardSm
