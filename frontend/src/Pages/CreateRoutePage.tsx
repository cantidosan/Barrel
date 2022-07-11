import React, { FC, useContext, useState,useEffect } from 'react'
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
import AuthContext from '../auth/authContext'
import { isCourier } from '../components/isCourier';
import { useNavigate } from 'react-router-dom'


///###TODO ADD THE AIRPORT NAME AS PART OF THE DROPDOWN DISPLAY
///###TODO We have the option of flight timetable look up API use however
/// it does have a price limit





const CreateRoutePage: FC = () => {

    const [{ pageCount }, dispatch] = useStateValue();

    let navigate = useNavigate();
    const [userAuth, setUserAuth] = useState('false')
    
    let pgContext = pageCount

    const { user } = useContext(AuthContext);

    console.log(user)


    const ApCodes: any = []
    // filters airport object list to show just airport codes
    Airports.forEach(codePush)

    function codePush(item: any, index: any, arr: any) {

        ApCodes.push(item.code)

    }


    //authorize user
    isCourier(user).then(res => setUserAuth(res))

    
        if (user === null && userAuth ==='false') {
            // CODE BELOW LIMITS PAGE ACCESS TO LOGGED IN Couriers
            
            navigate("/");
    
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

                pageCount === 0 ? <InputRouteInfo userId={user?.uid} /> :
                    pageCount === 1 ? <InputExchangeDetails /> :
                        <InputLuggageDetails />
            }
            <div className={`${pageCount===0? 'hidden':''} flex justify-center w-58 bg-barrel-green pt-5`}>
                <PrevPageNavButton />
                <NextPageNavButton />
            </div>


        </PageLayout >
    )
}

export default CreateRoutePage
