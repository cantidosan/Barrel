import React, { FC, ReactElement } from 'react'

const DisplayBidDetails: FC = () => {
    return (
        <div className='flex flex-row '>
            <div className='basis-1/2 border-2  '>

                <span className='m-1 text-left font-weight-100'>Space:</span>
                <span className='text-right font-bold text-white'> 2.5 sqft</span><br />


                <button type="button"
                    className="text-white bg-gradient-to-r 
                     from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br
                     focus:ring-4 focus:outline-none focus:ring-cyan-300
                     dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 
                     dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg 
                    text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    BID
                </button>


            </div>
            <div className='basis-1/2 border-2 '>
                <span className='m-1 text-left font-weight-100'>Total Weight:</span>
                <span className='text-right font-bold text-white'> 2.5 lbs</span><br />
                <span className='m-1 text-left font-weight-100'>Total Space:</span>
                <span className='text-right font-bold text-white'> 0.8 sqft</span><br />
            </div>
        </div>
    )
}

export default DisplayBidDetails
