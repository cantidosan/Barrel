import React, { FC, useState } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import NavigationIcons from '../components/NavigationIcons'
import Airports from '../assets/AirportList/Airports.json'
import Datepicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList"
import InputRouteInfo from '../components/InputRouteInfo'
import InputExchangeDetails from '../components/InputExchangeDetails'
import InputLuggageDetails from '../components/InputLuggageDetails'

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

            <section className='flex justify-center bg-barrel-green pt-5  '>
                <div className='w-52'>
                    <NavigationIcons />
                </div>
            </section>

            <InputRouteInfo />
            <InputExchangeDetails />
            <InputLuggageDetails />

            {


                <div className='flex justify-center w-58 bg-barrel-green pt-5'>
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





        </PageLayout >
    )
}

export default CreateRoutePage
