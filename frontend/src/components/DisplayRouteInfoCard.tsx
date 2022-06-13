import React, { FC, ReactElement } from 'react'
import DisplayLuggageAttributes from './DisplayLuggageAttributes';

const DisplayRouteInfoCard: FC = (props) => {

    return (
        <div className='mt-4 flex flex-col'>
            <div>
                <span className='m-1 text-left font-weight-200'>DEPT  DEST:</span>
                <span className='text-left font-bold text-white'>JFK SJU</span><br />
            </div>
            <div className='mt-4'>
                <span className='m-1 text-left font-weight-200'>DATE:</span>
                <span className='text-left font-bold text-white'>   06/05/2022</span><br />
            </div>
            <DisplayLuggageAttributes />
        </div>

    )
}


export default DisplayRouteInfoCard
