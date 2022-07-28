import React, { FC, ReactElement } from 'react'
import LuggageAttributes from './LuggageAttributes';
import getVolume from '../components/getVolume'
interface UrlProp  {

    
    deptAirport: string;
    arrivAirport: string;
    deptDate: any;
    luggageWeight: string;
    luggageHeight: number;
    luggageLength: number;
    luggageWidth: number;


}


const RouteInfoCardDetail: FC<UrlProp> = (props:UrlProp) => {

    const {
      
        deptAirport,
        arrivAirport,
        deptDate,
        luggageWeight,
        luggageHeight,
        luggageLength,
        luggageWidth
            
    } = props
    let volume = getVolume(luggageHeight , luggageLength , luggageWidth)
    let emptyBool = false

    console.log('VOlume',volume)
    // console.log('deptDatejson', deptDate.toJSON())
    // console.log('deptDate', deptDate.valueOf())
    let dateObject = new Date(deptDate?.toDate())
    console.log('date',dateObject?.getDate() )
    console.log('month',dateObject?.getMonth() )
    console.log('day',dateObject?.getDay() )

    //THIS COMP WILL PULL USED WEIGHT AND SPACE DATA FROM
    //THE RESPECTIVE DELIVERY DB
    //
    //THIS COMP WILL ALSO
    //
    //
    //THIS COMPONENT WILL CONDITIONALY RENDER SPACE AND WEIGHT AVAILABILITY 
    //BASED ON SOME PARAMETER
    return (
        <section className=' flex flex-col p-1 '>

            {!!emptyBool ?
                <div className='flex flex-col justify-evenly'>
                    <div className=''>
                        <span className='text-white text-xs md:text-lg md:text-2xl  font-thin opacity-80 font-roboto  '>DEPT  :</span>
                        <span className=' font-bold   text-xs md:text-lg md:text-2xl text-white'> {deptAirport}</span><br />
                        <span className='text-white  text-xs md:text-lg md:text-2xl font-thin opacity-80 font-roboto  '>ARR:</span>
                        <span className=' font-bold  text-xs md:text-lg md:text-2xl text-white'>{arrivAirport} </span><br />
                    </div>
                    <div className='md:pt-4'>
                        <span className=' underline text-xs md:text-lg md:text-2xl text-white  opacity-80 font-roboto '>DATE:</span>
                        <span className=' font-bold text-xs md:text-lg md:text-2xl text-white'>{`${dateObject?.getMonth()} / ${dateObject?.getMonth()} `}</span>
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

            {!!emptyBool ? '' :
                <div>
                    <div className=''>
                        <span className='text-white text-xs md:text-lg md:text-xl  font-thin opacity-80 font-roboto  '>DEPT  :</span>
                        <span className=' font-bold ml-1  text-xs md:text-lg md:text-xl text-white'> {deptAirport} </span><br />
                        <span className='text-white  text-xs md:text-lg md:text-xl font-thin opacity-80 font-roboto  '>ARR:</span>
                        <span className=' font-bold ml-3 text-xs md:text-lg md:text-xl text-white'> {arrivAirport} </span><br />
                    </div>
                    <div className='md:pt-4'>
                        <span className=' underline text-xs md:text-lg md:text-xl text-white  opacity-80 font-roboto pl-9 '>DATE:</span><br />
                        <span className=' font-bold text-xs md:text-lg md:text-xl text-white pl-5'>{`${dateObject?.getMonth()} / ${dateObject?.getMonth()} `}</span>
                    </div>
                    <div>
                        <div className='md:pt-4'>
                            <span className='text-white text-xs md:text-lg md:text-xl font-thin opacity-80 font-roboto underline pl-7'>WEIGHT:</span>
                            <span className='ml-2 text-2xs font-bold text-lime-500 opacity-60'>edit</span><br />
                            <span className='font-bold text-xs md:text-lg md:text-xl text-white '>USED </span>
                            <span className='ml-3 font-bold text-xs md:text-lg md:text-xl text-white'>AVAILABLE </span><br />
                            <span className='ml-2 font-bold text-xs md:text-lg md:text-xl text-white'>{luggageWeight} </span>
                            <span className='text-2xs  text-white opacity-60'>lbs</span>
                            <span className='ml-8 font-bold text-xs md:text-lg md:text-xl text-lime-500'>8.5</span>
                            <span className=' ml-1 text-2xs  text-white opacity-60'>lbs</span>

                        </div>
                        <div className='md:pt-4'>
                            <span className='text-white text-xs md:text-lg md:text-xl font-thin opacity-80 font-roboto pl-7 underline'>SPACE:</span><br />
                            <span className='font-bold text-xs md:text-lg md:text-xl text-white '>USED </span>
                            <span className='ml-3 font-bold text-xs md:text-lg md:text-xl text-white'>AVAILABLE </span><br />
                            <span className='ml-2 font-bold text-xs md:text-lg md:text-xl text-white'>{volume} </span>
                            <span className='text-2xs  text-white opacity-60'>sqft</span>
                            <span className='ml-8 font-bold text-xs md:text-lg md:text-xl text-lime-500'>2.5</span>
                            <span className=' ml-1 text-2xs  text-white opacity-60'>sqft</span>

                        </div>

                    </div>
                </div>
            }
        </section>

    )
}


export default RouteInfoCardDetail
