import React, { FC, useEffect } from 'react'
import { useStateValue } from '../state/index'

// THIS COMP NEEDS TO COMMUNICATE WITH THE PARCEL PICTURES
//COMPONENT FOR TO LISTEN FOR CLICK EVENTS TO UPDATE
//DYNAMICALY.
// THE TOTAL WEIGHT AND SPACE SHOULD BE THE AVAILABLE SPACE
// OF THE ROUTE

const BidDetails: FC = () => {

    ///THIS FUNCTION CONDITIONALLY RENDERS BASED ON THE STATE OF THE ROUTE
    let emptyBool = true

    const [{ itemList }, dispatch] = useStateValue();

    useEffect(() => {
        

        
    }, [itemList])
    
    console.log('itemList',itemList)


    return (
        <>
            {!!emptyBool ?
                <div className='flex flex-col p-3'>
                    <div className=''>
                        <span className='text-white font-thin opacity-80 font-roboto'>WEIGHT:</span><br />
                        <span className=' font-bold text-white'>13 lbs</span><br />
                    </div>
                    <div className=''>
                        <span className='text-white font-thin opacity-80 font-roboto'>SPACE:</span><br />
                        <span className=' font-bold text-white'>15 Sqft   </span><br />
                    </div>
                </div > : ''
            }
            {!!emptyBool ? '' :
                <div>
                    <div className='md:pt-4'>
                        <span className='text-white text-xs md:text-lg md:text-xl font-thin opacity-80 font-roboto underline pl-5'>WEIGHT:</span><br />

                        <span className='font-bold text-xs md:text-lg md:text-xl text-white '>TOTAL </span>
                        <span className='ml-3 font-bold text-xs md:text-lg md:text-xl text-white'>USED </span><br />
                        <span className='ml-2 font-bold text-xs md:text-lg md:text-xl text-white'>13 </span>

                        <span className='ml-8 font-bold text-xs md:text-lg md:text-xl text-lime-500'>8.5</span>
                        <span className=' ml-1 text-2xs  text-white opacity-60'>lbs</span>

                    </div>
                    <div className='md:pt-4'>
                        <span className='text-white text-xs md:text-lg md:text-xl font-thin opacity-80 font-roboto pl-5 underline'>SPACE:</span><br />
                        <span className='font-bold text-xs md:text-lg md:text-xl text-white '>TOTAL </span>
                        <span className='ml-3 font-bold text-xs md:text-lg md:text-xl text-white'>USED </span><br />
                        <span className='ml-2 font-bold text-xs md:text-lg md:text-xl text-white'>5 </span>

                        <span className='ml-8 font-bold text-xs md:text-lg md:text-xl text-lime-500'>2.5</span>
                        <span className=' ml-1 text-2xs  text-white opacity-60'>sqft</span>

                    </div>
                </div>
            }
        </>


    )
}

export default BidDetails
