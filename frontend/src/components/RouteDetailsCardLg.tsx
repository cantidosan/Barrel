import React, { FC, ReactElement } from 'react'
import RouteFlag from './RouteFlag';
import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'
import RouteInfoCardDetail from '../components/RouteInfoCardDetail';


interface UrlProp  {

    url: string[] ;
    deptAirport: string;
    arrivAirport: string;
    deptDate: any;
    luggageWeight: string;
    luggageHeight:number;
    luggageLength: number;
    luggageWidth: number;

}

const RouteDetailsCardLg: FC<UrlProp> = (props:UrlProp) => {

    const {
        url,
        deptAirport,
        arrivAirport,
        deptDate,
        luggageWeight,
        luggageHeight,
        luggageLength,
        luggageWidth
            
        } = props


    return (
        <div className=' flex flex-row basis-1/2  '>
            <div className='flex flex-col basis-1/2 '>
                <RouteFlag
                    url={url[0]}
                />
                <RouteFlag
                    url={url[1]}
                />
            </div>
            <div className='border-1'>
                <RouteInfoCardDetail
                    deptAirport={deptAirport}
                    arrivAirport={arrivAirport}
                    deptDate={deptDate}
                    luggageWeight={luggageWeight}
                    luggageHeight={luggageHeight}
                    luggageLength={luggageLength}
                    luggageWidth={luggageWidth}
                    
                
                />

            </div>
        </div>
    )
}

export default RouteDetailsCardLg;
