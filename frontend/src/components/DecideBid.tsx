import React, { FC } from 'react'




const DecideBid: FC = () => {
    return (
        <div className='container'>
            <div className='pt-10 flex  text-3xl font-bold 
                justify-center'>
                <span className='pt-2 text-white'
                >$80.00
                </span>
                <div className=''>
                    <a href="#" className="inline-block py-2 px-5 
                        rounded-full text-2xs bg-amber-300
                        hover:bg-amber-400 duration-300 text-red-400">
                        modify bid
                    </a>
                </div>
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
