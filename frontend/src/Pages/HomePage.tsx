import React, { FC } from 'React'
import prflag from '../src/assets/images/prflag.png'
import americanflag from '../src/assets/images/americanflag.png'



const HomePage: FC = () => {
    return (
        <div className='bg-barrel-green'>
            <div className='container mx-auto pt-20 px-16 align-items-center '>
                <div className=' grid grid-cols-3 bg-barrel-green gap-4  '>
                    <div className='m-4 p-1 h-32 w-23 justify-center bg-barrel-green-300 flex gap-2'>
                        <div className='flex flex-col basis-1/2 border-2 border-black '>
                            {/* <div className='container basis-1/2' >
                <img className='object-cover h-100 w-100' src={prflag} alt="prflag" />
              </div>
              <div className='basis-1/2 '>
                FLAG 2
              </div> */}

                            <a href="#" className=" overflow-hidden flex flex-col items-center rounded-lg  border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700  dark:bg-gray-800 dark:hover:bg-gray-700">

                                <img className="object-cover w-full h-96 rounded-t-lg md:h-auto
              md:w-48 md:rounded-none md:rounded-l-lg" src={prflag} alt="" />

                            </a>
                            <a href="#" className=" overflow-hidden flex flex-col items-center rounded-lg  border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700  dark:bg-gray-800 dark:hover:bg-gray-700">

                                <img className="object-cover w-full h-96 rounded-t-lg md:h-auto
              md:w-48 md:rounded-none md:rounded-l-lg" src={americanflag} alt="" />

                            </a>
                        </div>

                        <div className='basis-1/2 border-2 bg-barrel-green border-black  shadow-inner shadow-lg'>
                            <span className='m-1 text-left font-weight-100'>Space:</span>
                            <span className='text-right font-bold text-white'>      2.5 sqft</span><br />
                            <span className='m-1 text-left font-weight-200'>WEIGHT:</span>
                            <span className='text-left font-bold text-white'>   13 lbs</span><br />
                            <span className='m-1 text-left font-weight-200'>DATE:</span>
                            <span className='text-left font-bold text-white'>   06/05/2022</span><br />
                            <span className='m-1 text-left font-weight-200'>AIRPORT:</span>
                            <span className='text-left font-bold text-white'>JFK SJU</span><br />

                        </div>

                    </div>
                    <div className='m-4 p-4  justify-center  bg-blue-500'>2</div>
                    <div className='m-4 p-4 justify-center  bg-yellow-400'>3</div>
                    <div className=' m-4 p-4  h-32 justify-center  bg-red-300'>4</div>
                    <div className='m-4 p-4 justify-center  bg-yellow-400'>5</div>
                    <div className='m-4 p-4 justify-center  bg-blue-500' >6</div>
                    <div className=' m-4 p-4 h-32 justify-center  bg-red-300'>7</div>
                    <div className='m-4 p-4 justify-center  bg-yellow-400'>8</div>
                    <div className='m-4 p-4  justify-center  bg-orange-400'>9</div>

                </div>
            </div >
        </div >
    )
}


export default HomePage;
