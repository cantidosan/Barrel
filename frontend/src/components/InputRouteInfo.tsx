import React, { FC, useState } from 'react'
import DropdownList from "react-widgets/DropdownList"
import Datepicker from 'react-datepicker'
import Airports from '../assets/AirportList/Airports.json'


const InputRouteInfo: FC = () => {

    const [startDate, setStartDate] = useState(new Date());



    const ApCodes: any = []

    Airports.forEach(codePush)

    function codePush(item: any, index: any, arr: any) {
        ///extract airport codes from airport object array
        ApCodes.push(item.code)

    }
    return (

        <>

            <div className='flex justify-center bg-barrel-green'>
                <section className='flex flex-col w-56  '>
                    <span className='text-white font-bold pt-8'>FROM</span>
                    <DropdownList defaultValue={'JFK'} data={ApCodes} />

                    <span className='text-white font-bold pt-2 pb-2'>TO</span>
                    <DropdownList defaultValue={'MIA'} data={ApCodes} />



                </section>
            </div>

            <div className='flex justify-center bg-barrel-green'>
                <section className='flex flex-col w-56'>

                    <div className="mb-6 pt-2">
                        <label htmlFor="email" className="block mb-2 text-md font-bold text-white dark:text-white">Flight #</label>
                        <input type="email" id="email" className="bg-white-400 border border-gray-300 text-gray-900 text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 
                    dark:placeholder-black-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="MIA256" required
                        />
                    </div>



                </section>
            </div>
            <div className='grid justify-center p-3 bg-barrel-green' >
                <span className='text-white font-bold' >Departure Date</span>
                <Datepicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
            </div>
        </>

    )
}

export default InputRouteInfo
