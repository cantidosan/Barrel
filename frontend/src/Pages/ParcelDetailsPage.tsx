import React, { FC } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import DisplayParcelPictures from '../components/DisplayParcelPictures'
import DisplayParcelPicture from '../components/DisplayParcelPicture'
import DisplayRouteFlag from '../components/DisplayRouteFlag'
import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'
import { isCourier } from '../components/isCourier'


const ParcelDetailsPage: FC = () => {


    const url = [prflag, americanflag]

    isCourier()

    return (
        <PageLayout>

            <div className='bg-barrel-green'>
                <div className='flex  flex-col  bg-barrel-green items-center  '>
                    <div className='flex  m-12 gap-8 '>
                        <DisplayRouteFlag url={url[1]} />
                        <div className='flex flex-col justify-between '>
                            <div className='mt-1'>
                                <span className=' text-xs font-thin text-white opacity-80 font-weight-200'>Name:</span><br />
                                <span className='text-sm font-wrap font-thin text-white'>Phone </span><br />
                            </div>
                            <div className='mt-1'>
                                <span className='text-xs font-thin text-white opacity-80 font-weight-200'>Weight:</span><br />
                                <span className='text-right text-sm font-thin text-white'>.01 LBS</span><br />
                            </div>
                            <div className='mt-1'>
                                <span className='m-1 text-xs font-thin text-white opacity-80 font-weight-200'>Space</span><br />
                                <span className='text-lg  text-sm font-thin text-white '>15   </span><br />
                            </div>
                        </div>

                    </div>
                    <div className='w-74  flex'>
                        <DisplayParcelPictures />
                    </div>
                    <div className='flex gap-6  m-12 w-22 '>
                        <div className=' basis-1/2 pt-16 border-r-2 pr-2 '>
                            <button type="submit" className="inline-flex items-center 
                                py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700
                                rounded-lg focus:ring-4 focus:ring-blue-200 
                                dark:focus:ring-blue-900 hover:bg-blue-800"
                            >
                                BACK

                            </button>
                        </div>
                        <div className='flex basis-1/2'>
                            <div className='flex flex-col justify-around '>
                                <div className='mt-1'>
                                    <span className='underline text-white text-sm font-bold opacity-60 font-weight-200'>Sender Name:</span><br />
                                    <span className='text-right text-lg font-bold text-white mr-1'>Jane Doe</span>
                                </div>
                                <div className='mt-1'>
                                    <span className='m-1 underline text-white text-sm font-bold opacity-60 font-weight-200'>Recipient Name:</span><br />
                                    <span className='text-right font-bold text-white text-lg '> John Doe</span>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default ParcelDetailsPage
