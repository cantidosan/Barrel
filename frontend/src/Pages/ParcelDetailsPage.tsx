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
                    <div className='flex border-2 m-12 '>
                        <DisplayRouteFlag url={url[1]} />
                        <div className='flex flex-col justify-around'>
                            <div className='mt-1'>
                                <span className='m-1 text-left font-weight-200'>Item Name:</span>
                                <span className='text-right font-bold text-white'>   13</span><br />
                            </div>
                            <div className='mt-1'>
                                <span className='m-1 text-left font-weight-200'>WEIGHT:</span>
                                <span className='text-right font-bold text-white'>   13</span><br />
                            </div>
                            <div className='mt-1'>
                                <span className='m-1 text-left font-weight-200'>SPACE</span>
                                <span className='text-right font-bold text-white'>15   </span><br />
                            </div>
                        </div>

                    </div>
                    <div className='w-88  flex'>
                        <DisplayParcelPictures />
                    </div>
                    <div className='bg-green-400 m-12 w-22'>
                        <div>

                        </div>
                        <div>

                        </div>

                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default ParcelDetailsPage
