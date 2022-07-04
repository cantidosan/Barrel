import React, { useState } from 'react'
import headerLogo from '../../../assets/images/headerLogo.png'
import HeaderUserProfile from './HeaderUserProfile'
import Datepicker from 'react-datepicker'
import { useStateValue } from '../../../state/index'

function HeaderSearchDate() {

    const [{ headerState }, dispatch] = useStateValue();

    const handleNavChange = (e: any) => {

        dispatch({ type: 'headerState', payload: e });


    }
    const [startDate, setStartDate] = useState(new Date());
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
                    <button type="button" className='m-2 focus:outline-none text-white bg-purple-700 
                        hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg 
                        text-sm px-5 py-2.0 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 
                        dark:focus:ring-purple-900'
                        onClick={e => handleNavChange('1')}
                    >Back
                    </button>
                    <div className='grid justify-center p-3 bg-barrel-green' >
                        <span className='text-white font-bold pl-14' >Departure Date</span>
                        <div className='pl-14'>

                            <Datepicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default HeaderSearchDate
