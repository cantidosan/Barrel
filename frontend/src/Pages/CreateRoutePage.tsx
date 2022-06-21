import React, { FC, useState } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import NavigationIcons from '../components/NavigationIcons'
import Airports from '../assets/AirportList/Airports.json'
import Datepicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList"

///###TODO ADD THE AIRPORT NAME AS PART OF THE DROPDOWN DISPLAY
///###TODO We have the option of flight timetable look up API use however
/// it does have a price limit

const CreateRoutePage: FC = () => {

    const [startDate, setStartDate] = useState(new Date());

    const ApCodes: any = []

    Airports.forEach(codePush)

    function codePush(item: any, index: any, arr: any) {

        ApCodes.push(item.code)

    }

    console.log(ApCodes[1])
    return (

        <PageLayout>

            <h2 className=" pt-3 flex justify-center 
                bg-barrel-green underline
                text-white font-hansief text-center"
            >CREATE ROUTE </h2>

            <div className='p-2 bg-barrel-green'>
                <NavigationIcons />
            </div>

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
                        <label htmlFor="email" className="block mb-2 text-md font-bold text-gray-900 dark:text-white">Flight #</label>
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
            {


                <div className='flex justify-center w-58 bg-barrel-green'>
                    <button className='m-2 focus:outline-none text-white bg-purple-700 
                        hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg 
                        text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                        type="submit"
                    >
                        NEXT
                    </button>
                    <button className='m-2 focus:outline-none text-white bg-purple-700 
                        hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium 
                        rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 
                        dark:focus:ring-purple-900"' type="submit"
                    >
                        CANCEL
                    </button>
                </div>
            }





        </PageLayout>
    )
}

export default CreateRoutePage
