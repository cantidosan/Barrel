import React, { FC } from 'react'

const LuggageAttributes: FC = () => {
    return (
        <>
            <div className='flex flex-row justify-around'>
                <span className=' text-lg  font-bold text-white'>
                    USED
                </span>
                <span className=' text-lg font-bold text-white'>
                    AVAILABLE
                </span>
            </div>
            <div className='flex flex-row justify-around'>
                <span className=' text-lg  font-bold text-white'>
                    8.7
                </span>
                <span className=' text-lg font-bold text-lime-500'>
                    5.8
                </span>
            </div>
        </>
    )
}

export default LuggageAttributes
