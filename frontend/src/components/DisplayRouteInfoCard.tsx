import React, { FC, ReactElement } from 'react'

const DisplayRouteInfoCard: FC = (props) => {

    return (
        <>
            <span className='m-1 text-left font-weight-100'>Space:</span>
            <span className='text-right font-bold text-white'>      2.5 sqft</span><br />
            <span className='m-1 text-left font-weight-200'>WEIGHT:</span>
            <span className='text-left font-bold text-white'>   13 lbs</span><br />
            <span className='m-1 text-left font-weight-200'>DATE:</span>
            <span className='text-left font-bold text-white'>   06/05/2022</span><br />
            <span className='m-1 text-left font-weight-200'>AIRPORT:</span>
            <span className='text-left font-bold text-white'>JFK SJU</span><br />


        </>
    )
}


export default DisplayRouteInfoCard;
