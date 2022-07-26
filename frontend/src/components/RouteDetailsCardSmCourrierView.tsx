import React, { FC } from 'react'
import RouteFlag from './RouteFlag'
import RouteInfoCard from './RouteInfoCard'
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

const RouteDetailsCardSmCourrierView: FC<routeProp> = (props:routeProp) => {

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
    
    // const url = [prflag, americanflag]

    return (
        <div className='flex'>
            <figure className='w-8  basis-1/2 border-2 '>
                <RouteFlag url={url[0]} />
                <RouteFlag url={url[1]} />

            </figure>
            <div className=' basis-1/2 border-2'>
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
    )
}

export default RouteDetailsCardSmCourrierView
