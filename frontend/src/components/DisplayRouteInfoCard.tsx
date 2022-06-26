import React, { FC, ReactElement } from 'react'
import DisplayLuggageAttributes from './DisplayLuggageAttributes';

const DisplayRouteInfoCard: FC = (props) => {

    //THIS COMPONENT WILL CONDITIONALY RENDER SPACE AND WEIGHT AVAILABILITY 
    //BASED ON SOME PARAMETER
    return (
        <section className=' flex flex-col p-3 '>
            {
                <>
                    <div className=''>
                        <span className='text-white text-md font-thin opacity-80 font-roboto '>DEPT  :</span>
                        <span className=' font-bold text-white'> JFK </span><br />
                        <span className='text-white text-md font-thin opacity-80 font-roboto  '>ARR:</span>
                        <span className=' font-bold  text-md text-white'> MIA </span><br />
                    </div>
                    <div className=''>
                        <span className='pl-7 underline text-white  opacity-80 font-roboto '>DATE:</span>
                        <span className=' font-bold text-white'>    06/05/2022</span>
                    </div>
                    <div>
                        <div className=''>
                            <span className='text-white font-thin opacity-80 font-roboto'>WEIGHT:</span>
                            <span className=' font-bold text-white'>13 lbs</span><br />
                        </div>
                        <div className=''>
                            <span className='text-white font-thin opacity-80 font-roboto'>SPACE:</span>
                            <span className=' font-bold text-white'>15 Sqft   </span><br />
                        </div>
                    </div>
                </>
            }

            {/* THIS WILL BE a CONDITIONAL RENDER
                <DisplayLuggageAttributes /> */}
        </section>

    )
}


export default DisplayRouteInfoCard
