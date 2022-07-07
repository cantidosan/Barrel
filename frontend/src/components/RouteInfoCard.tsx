import React, { FC, ReactElement } from 'react'
import LuggageAttributes from './LuggageAttributes';


const RouteInfoCard: FC = (props) => {

    let emptyBool = true

    //THIS COMPONENT WILL CONDITIONALY RENDER SPACE AND WEIGHT AVAILABILITY 
    //BASED ON SOME PARAMETER
    return (
        <section className=' flex flex-col p-1 '>

            {!!emptyBool ?
                <div className='flex flex-col justify-evenly'>
                    <div className=''>
                        <span className='text-white text-xs md:text-lg md:text-2xl  font-thin opacity-80 font-roboto  '>DEPT  :</span>
                        <span className=' font-bold   text-xs md:text-lg md:text-2xl text-white'> JFK </span><br />
                        <span className='text-white  text-xs md:text-lg md:text-2xl font-thin opacity-80 font-roboto  '>ARR:</span>
                        <span className=' font-bold  text-xs md:text-lg md:text-2xl text-white'> MIA </span><br />
                    </div>
                    <div className='md:pt-4'>
                        <span className=' underline text-xs md:text-lg md:text-2xl text-white  opacity-80 font-roboto '>DATE:</span>
                        <span className=' font-bold text-xs md:text-lg md:text-2xl text-white'>    06/05/2022</span>
                    </div>
                    <div>
                        <div className='md:pt-4'>
                            <span className='text-white text-xs md:text-lg md:text-2xl font-thin opacity-80 font-roboto'>WEIGHT:</span>
                            <span className=' font-bold text-xs md:text-lg md:text-2xl text-white'>13 </span><br />
                        </div>
                        <div className='md:pt-4'>
                            <span className='text-white text-xs md:text-lg md:text-2xl font-thin opacity-80 font-roboto'>SPACE:</span>
                            <span className=' font-bold text-xs md:text-lg md:text-2xl text-white'>15 </span><br />
                        </div>
                    </div>
                </div> : ''
            }


        </section>

    )
}


export default RouteInfoCard
