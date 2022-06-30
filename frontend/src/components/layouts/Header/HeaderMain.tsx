import React from 'react'
import headerLogo from '../../../assets/images/headerLogo.png'
import HeaderCenterCTA from './HeaderCenterCTA'
import HeaderUserProfile from './HeaderUserProfile'

function HeaderMain() {
    return (
        <nav className="bg-white border-b-2 border-gray-500 px-2 sm:px-4 py-2.5 rounded dark:bg-barrel-green"  >
            <div className="container flex border-gray-300  flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    <img src={headerLogo}
                        className="h-6 sm:h-9"
                        alt="Barrel Logo" />
                </a>
                <HeaderUserProfile />
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <HeaderCenterCTA />
                </div>
            </div>
        </nav >
    )
}

export default HeaderMain
