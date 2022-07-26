import React, { FC, ReactElement } from 'react'
import LuggageAttributes from './LuggageAttributes';


interface routeInfoProp  {

    
    deptAirport: string;
    arrivAirport: string;
    deptDate: any;
    luggageWeight: string;
    luggageHeight:number;
    luggageLength: number;
    luggageWidth: number;
    routeId:string

}

const RouteInfoCard: FC<routeInfoProp> = (props:routeInfoProp) => {

    let emptyBool = true

    const {
        
        deptAirport,
        arrivAirport,
        deptDate,
        luggageWeight,
        luggageHeight,
        luggageLength,
        luggageWidth,
        routeId
            
    } = props
    
    let volume = (luggageHeight * luggageLength * luggageWidth)
    //THIS COMPONENT WILL CONDITIONALY RENDER SPACE AND WEIGHT AVAILABILITY 
    //BASED ON SOME PARAMETER
    return (
        <section className=' flex flex-col p-1 '>

            {!!emptyBool ?
                <div className='flex flex-col justify-evenly'>
                    <div className=''>
                        <span className='text-white text-xs md:text-lg md:text-2xl  font-thin opacity-80 font-roboto  '>DEPT  :</span>
                        <span className=' font-bold   text-xs md:text-lg md:text-2xl text-white'> {deptAirport} </span><br />
                        <span className='text-white  text-xs md:text-lg md:text-2xl font-thin opacity-80 font-roboto  '>ARR:</span>
                        <span className=' font-bold  text-xs md:text-lg md:text-2xl text-white'> {arrivAirport} </span><br />
                    </div>
                    <div className='md:pt-4'>
                        <span className=' underline text-xs md:text-lg md:text-2xl text-white  opacity-80 font-roboto '>DATE:</span>
                        <span className=' font-bold text-xs md:text-lg md:text-2xl text-white'>    {deptDate}</span>
                    </div>
                    <div>
                        <div className='md:pt-4'>
                            <span className='text-white text-xs md:text-lg md:text-2xl font-thin opacity-80 font-roboto'>WEIGHT:</span>
                            <span className=' font-bold text-xs md:text-lg md:text-2xl text-white'>{luggageWeight} </span><br />
                        </div>
                        <div className='md:pt-4'>
                            <span className='text-white text-xs md:text-lg md:text-2xl font-thin opacity-80 font-roboto'>SPACE:</span>
                            <span className=' font-bold text-xs md:text-lg md:text-2xl text-white'>{volume} </span><br />
                        </div>
                    </div>
                </div> : ''
            }


        </section>

    )
}


export default RouteInfoCard
