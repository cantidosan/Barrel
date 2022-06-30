import React, { useState } from 'react'
import { Combobox } from '@headlessui/react'
import AirportSearchDept from '../../AirportSearchDept'
import headerLogo from '../../../assets/images/headerLogo.png'
import AirportSearchArriv from '../../AirportSearchArriv'
import HeaderCenterCTA from './HeaderCenterCTA'
import HeaderUserProfile from './HeaderUserProfile'

function HeaderSearch() {
    return (
        <nav className=" bg-barrel-green border-b-2 border-gray-500
             px-2 sm:px-4 py-2.5 rounded dark:bg-barrel-green"
        >
            <div className="container flex border-gray-300  flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    <img src={headerLogo}
                        className="h-6 sm:h-9"
                        alt="Barrel Logo" />
                </a>
                <HeaderUserProfile />
                <div className='flex justify-center pt-4 pb-3 flex-wrap'>
                    <div className=''>
                        <span className='pr-8 text-white 
                            font-thin '>TO:</span>
                        <AirportSearchDept />


                    </div>
                    <div>
                        <span className='pl-1  text-white
                            font-thin'>FROM:</span>
                        <AirportSearchArriv />
                    </div>

                </div>
            </div>
        </nav >

    )

}

export default HeaderSearch
