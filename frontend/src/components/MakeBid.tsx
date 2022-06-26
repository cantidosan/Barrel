import React, { FC } from 'react'

const MakeBid: FC = () => {
    return (
        <div className='basis-1/2  '>
            <div className=''>
                <div className='flex px-2 pt-4 text-3xl font-bold 
                justify-center text-white'>
                    $0.00
                </div>
            </div>

            <div className='flex justify-center mt-3'>
                <button type="button"
                    className="basis-1/2 text-white-500 bg-gradient-to-r 
                    from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br
                    focus:ring-4 focus:outline-none focus:ring-cyan-300
                    dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 
                    dark:shadow-lg dark:shadow-cyan-800/80 font-bold rounded-lg 
                   text-sm px-2.5 py-2.5 text-center  mb-2">
                    BID
                </button>
            </div>


        </div>
    )
}

export default MakeBid
