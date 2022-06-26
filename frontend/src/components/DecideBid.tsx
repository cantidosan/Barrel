import React, { FC } from 'react'

const DecideBid: FC = () => {
    return (
        <div className='container  border-2'>
            <div className='flex border-2 pt-4 text-3xl font-bold 
                justify-center text-white'>
                $80.00
            </div>
            <div className='flex flex-column mt-2 gap-3 pt-3 mx-2 justify-center'>
                <div className='border-2 justify-center'>
                    <button className="text-white-500 bg-gradient-to-r 
                     from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br
                     focus:ring-4 focus:outline-none focus:ring-cyan-300
                     dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 
                     dark:shadow-lg dark:shadow-cyan-800/80 font-bold rounded-lg 
                    text-sm px-2.5 py-2.5 text-center  mb-2">ACCEPT</button>
                </div>
                <div className='border-2 justify-center '>
                    <button className='"text-white bg-gradient-to-r 
                     from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br
                     focus:ring-4 focus:outline-none focus:ring-cyan-300
                     dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 
                     dark:shadow-lg dark:shadow-cyan-800/80 font-bold rounded-lg 
                    text-sm px-2.5 py-2.5 text-center  mb-2"'>REJECT</button>
                </div>
            </div>
        </div>
    )
}

export default DecideBid
