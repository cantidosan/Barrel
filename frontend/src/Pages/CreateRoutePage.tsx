import React, { FC } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import NavigationIcons from '../components/NavigationIcons/NavigationIcons'
import Airports from '../assets/AirportList/Airports.json'

import "react-datepicker/dist/react-datepicker.css";
import "react-widgets/styles.css";

import InputRouteInfo from '../components/InputRouteInfo'
import InputExchangeDetails from '../components/InputExchangeDetails'
import InputLuggageDetails from '../components/InputLuggageDetails'
import { useStateValue } from '../state/';
import CreateRouteSubheader from '../components/layouts/subheaders/CreateRouteSubheader';


///###TODO ADD THE AIRPORT NAME AS PART OF THE DROPDOWN DISPLAY
///###TODO We have the option of flight timetable look up API use however
/// it does have a price limit

const CreateRoutePage: FC = () => {


    const [{ pageCount }, dispatch] = useStateValue();
    let pgContext = pageCount
    const ApCodes: any = []

    Airports.forEach(codePush)

    function codePush(item: any, index: any, arr: any) {

        ApCodes.push(item.code)

    }


    const nextPage = () => {

        pgContext++
        // console.log('PageCount+', pgContext)

        if (pgContext > 2) {
            pgContext = 0
        }

        dispatch({ type: 'pageCount', payload: pgContext });

    }
    const prevPage = () => {

        pgContext--
        if (pgContext <= 0) {

            pgContext = 0

        }

        // console.log('PageCountD', pgContext)

        dispatch({ type: 'pageCount', payload: pgContext });

    }

    return (

        <PageLayout>

            <CreateRouteSubheader />

            <section className='flex justify-center 
                bg-barrel-green pt-5  '>
                <div className='w-52'>
                    <NavigationIcons />
                </div>
            </section>

            {

                pageCount === 0 ? <InputRouteInfo /> :
                    pageCount === 1 ? <InputExchangeDetails /> :
                        <InputLuggageDetails />


            }







            <div className='flex justify-center w-58 bg-barrel-green pt-5'>
                <button className='m-2 focus:outline-none text-white bg-purple-700 
                        hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg 
                        text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                    type="submit" onClick={nextPage}
                >
                    NEXT
                </button>
                <button className='m-2 focus:outline-none text-white bg-purple-700 
                        hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium 
                        rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 
                        dark:focus:ring-purple-900"' type="submit" onClick={prevPage}
                >
                    CANCEL
                </button>
            </div>





        </PageLayout >
    )
}

export default CreateRoutePage
