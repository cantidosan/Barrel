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
import PrevPageNavButton from '../buttons/PrevPageNavButton';
import NextPageNavButton from '../buttons/NextPageNavButton';

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
                <PrevPageNavButton />
                <NextPageNavButton />
            </div>


        </PageLayout >
    )
}

export default CreateRoutePage
