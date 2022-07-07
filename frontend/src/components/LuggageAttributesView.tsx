import React, { FC } from 'react'
import LuggageAttributes from './LuggageAttributes'
import pencilIcon from '../assets/images/pencilIcon.png'


const LuggageAttributesView: FC = () => {

    return (
        <div className='flex flex-col'>
            <div className='  mt-4 text-center font-bold pl-8'>
                Space:
                <span className='text-xs'>
                    SQFT
                </span>
                <span className='text-xs text-lime-500 font-thin pl-3 ml-2'>
                    edit
                </span>
            </div>
            <div className='flex justify-end'>
                <img src={pencilIcon} alt='edit icon' className='w-3 mr-2 mb-2' />
            </div>
            <LuggageAttributes />
            <h2 className='mt-4 text-center font-bold'>Weight: LBS</h2>
            <LuggageAttributes />
        </div>

    )
}

export default LuggageAttributesView
