import React, { useState } from 'react'
import { Combobox } from '@headlessui/react'
import AirportSearchDept from '../../AirportSearchDept'
import headerLogo from '../../../assets/images/headerLogo.png'
import AirportSearchArriv from '../../AirportSearchArriv'
import HeaderCenterCTA from './HeaderCenterCTA'
import HeaderUserProfile from './HeaderUserProfile'
import { useStateValue } from '../../../state/index'
import NextPageNavButton from '../../../buttons/NextPageNavButton'

function HeaderSearch() {

    const [{ headerState }, dispatch] = useStateValue();

    const handleNavChange = (e: any) => {

        dispatch({ type: 'headerState', payload: e });


    }


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
                    <button type="button" className='m-2 focus:outline-none text-white bg-purple-700 
                        hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg 
                        text-sm px-5 py-2.0 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 
                        dark:focus:ring-purple-900'
                        onClick={e => handleNavChange('2')}
                    >Next</button>


                </div>
            </div>
        </nav >

    )

}

export default HeaderSearch
