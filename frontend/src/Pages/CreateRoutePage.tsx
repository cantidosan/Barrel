import React, { FC } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import NavigationIcons from '../components/NavigationIcons'
import Airports from '../assets/AirportList/Airports.json'
import Datepicker from 'flowbite-datepicker/Datepicker';

const CreateRoutePage: FC = () => {

    return (
        <PageLayout>
            <div className='flex '> CreateRoutePage


                <select id="country" name="country">
                    <option>Country</option>
                    {Airports.map((airport, key) =>
                        <option value={airport.country}>
                            {airport.country}
                        </option>
                    )}

                </select>
                <select id="deptAirport" name="deptAirport">
                    <option>Airport</option>
                    {Airports.map((airport, key) =>
                        <option value={airport.code}>
                            {airport.name}
                        </option>
                    )}

                </select>
                <select id="arrivCountry" name="arrivCountry">
                    <option>Country</option>
                    {Airports.map((airport, key) =>
                        <option value={airport.country}>
                            {airport.country}
                        </option>
                    )}

                </select>
                <select id="arrivAirport" name="arrivAirport">
                    <option>Airport</option>
                    {Airports.map((airport, key) =>
                        <option value={airport.code}>
                            {airport.name}
                        </option>
                    )}

                </select>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"><path
                                fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input datepicker type="text" className="bg-gray-50 border border-gray-300 
                        text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 
                        focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 
                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                        dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date" />
                </div>




            </div>
        </PageLayout>
    )
}

export default CreateRoutePage
