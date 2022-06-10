import React, { FC } from 'react'

import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'
import RouteDetailsCardSm from '../components/RouteDetailsCardSm'


const HomePage: FC = () => {

    const url = [prflag, americanflag]

    return (
        <div className='bg-barrel-green'>
            <div className='container mx-auto pt-20 px-16 align-items-center '>
                <div className=' grid grid-cols-3 bg-barrel-green gap-4  '>

                    <RouteDetailsCardSm />
                    <RouteDetailsCardSm />
                    <RouteDetailsCardSm />
                    <RouteDetailsCardSm />
                    <RouteDetailsCardSm />
                    <RouteDetailsCardSm />
                    <RouteDetailsCardSm />
                    <RouteDetailsCardSm />
                    <RouteDetailsCardSm />

                </div>
            </div >
        </div >
    )
}


export default HomePage;
