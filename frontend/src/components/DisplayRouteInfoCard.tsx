import React, { FC, ReactElement } from 'react'
import DisplayLuggageAttributes from './DisplayLuggageAttributes';

const DisplayRouteInfoCard: FC = (props) => {

    return (
        <main className='mt-2 flex flex-col'>
            <div>
                <span className='m-1 text-left font-weight-200'>DEPT  DEST:</span>
                <span className='text-left font-bold text-white'>JFK SJU</span><br />
            </div>
            <div className='mt-2'>
                <span className='m-1 text-left font-weight-200'>DATE:</span>
                <span className='text-left font-bold text-white'>   06/05/2022</span><br />
            </div>
            <div>
                <div className='mt-1'>
                    <span className='m-1 text-left font-weight-200'>WEIGHT:</span>
                    <span className='text-left font-bold text-white'>   13</span><br />
                </div>
                <div className='mt-1'>
                    <span className='m-1 text-left font-weight-200'>SPACE</span>
                    <span className='text-left font-bold text-white'>15   </span><br />
                </div>
            </div>

            {/* THIS WILL BE a CONDITIONAL RENDER
                <DisplayLuggageAttributes /> */}
        </main>

    )
}


export default DisplayRouteInfoCard
