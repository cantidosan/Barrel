import React, { useState } from 'react'
import { Combobox } from '@headlessui/react'
import AirportSearchDept from '../../AirportSearchDept'
import headerLogo from '../../../assets/images/headerLogo.png'
import AirportSearchArriv from '../../AirportSearchArriv'

function HeaderSearch() {
    return (
        <nav className=" bg-barrel-green border-b-2 border-gray-500 px-2 sm:px-4 py-2.5 rounded dark:bg-barrel-green"  >
            <div className="container flex border-gray-300  flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    <img src={headerLogo}
                        className="h-6 sm:h-9"
                        alt="Barrel Logo" />
                </a>
                <div className="flex items-center md:order-2">
                    <button className=' mr-10 font-hansief text-gray-100'>BECOME A CoURIER</button >
                    <button type="button"
                        className="flex mr-3 text-sm bg-gray-800  
                        rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 
                        ark:focus:ring-gray-600" id="user-menu-button"
                        aria-expanded="false"
                        data-dropdown-toggle="dropdown"
                    >
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full"
                            src="/docs/images/people/profile-picture-3.jpg"
                            alt="user photo" />
                    </button>

                    <div className="hidden z-50 my-4 text-base list-none bg-white 
                        rounded divide-y divide-gray-100
                        shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">

                        <div className="py-3 px-4">
                            <span className="block text-sm 
                                text-gray-900 
                                dark:text-white"
                            >
                                Jane Doe
                            </span>
                            <span className="block text-sm 
                                font-medium text-gray-500 
                                truncate dark:text-gray-400"
                            >
                                jDoe@barrel.com
                            </span>
                        </div>
                        <ul className="py-1" id="dropdown">
                            <li>
                                <a href="#"
                                    className="block py-2 px-4 text-sm
                                        text-gray-700 hover:bg-gray-100
                                        dark:hover:bg-gray-600 dark:text-gray-200
                                        dark:hover:text-white"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100
                                    dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 
                                    dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    Earnings
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 
                                    dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>

                    <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex 
                        items-center p-2 ml-1 text-sm text-gray-500 rounded-lg 
                        md:hidden hover:bg-gray-100 focus:outline-none 
                        focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
                        dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2" aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                        </svg>
                        <svg className="hidden w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className='flex justify-center pt-4 flex-wrap'>
                    <div className=''>
                        <span className='pr-8 text-white 
                            font-thin'>TO:</span>
                        <AirportSearchDept />


                    </div>
                    <div>
                        <span className='p-2 text-white
                            font-thin'>FROM:</span>
                        <AirportSearchArriv />
                    </div>

                </div>
            </div>
        </nav >

    )

}

export default HeaderSearch
