import React, { FC } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import DisplayParcelPictures from '../components/DisplayParcelPictures'
import DisplayParcelPicture from '../components/DisplayParcelPicture'
import DisplayRouteFlag from '../components/DisplayRouteFlag'
import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'


const ParcelDetailsPage: FC = () => {
    const url = [prflag, americanflag]
    return (
        <PageLayout>
            <div className='bg-barrel-green'>
                <div className='flex  flex-col  bg-barrel-green items-center  '>
                    <div className='flex  m-12 gap-8 '>
                        <DisplayRouteFlag url={url[1]} />
                        <div className='flex flex-col justify-around '>
                            <div className='mt-1'>
                                <span className='m-1 text-md font-bold text-white opacity-80 font-weight-200'>Item Name:</span><br />
                                <span className='text-lg font-wrap font-bold text-white mr-1'> Plastic Flag</span><br />
                            </div>
                            <div className='mt-1'>
                                <span className='m-1 text-md font-bold text-white opacity-80 font-weight-200'>WEIGHT:</span><br />
                                <span className='text-right text-lg font-bold text-white'>    .01 LBS</span><br />
                            </div>
                            <div className='mt-1'>
                                <span className='m-1 text-md font-bold text-white opacity-80 font-weight-200'>SPACE</span><br />
                                <span className='text-lg  font-bold text-white mr-1'>15   </span><br />
                            </div>
                        </div>

                    </div>
                    <div className='w-74  flex'>
                        <DisplayParcelPictures />
                    </div>
                    <div className='flex gap-6  m-12 w-22'>
                        <div className=' basis-1/2 border-r-2 pr-2'>
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
