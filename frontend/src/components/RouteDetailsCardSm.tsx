import React, { ReactElement, FC } from 'react'
import RouteFlag from './RouteFlag';
import RouteInfoCard from './RouteInfoCard';
import { AirportToFlagConvert } from './AirportToFlagConvert';
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

    let deptFlag = AirportToFlagConvert(deptAirport)
    let arrivFlag = AirportToFlagConvert(arrivAirport)
   //url prop had some issues i didnt have time to deal with so the helper function was 
    //used to get the flags
     let url2 = [`https://countryflagsapi.com/png/${deptFlag}`,`https://countryflagsapi.com/png/${arrivFlag}`]
    console.log('urls',url2)
    return (

        <>
            <div className='justify-center 
                            bg-barrel-green flex gap-1'>
                <div className='flex flex-col basis-1/2 border-2 
                             '>

                    <RouteFlag url={url2[0]} />
                    <RouteFlag url={url2[1]} />

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
