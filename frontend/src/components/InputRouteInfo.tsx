import React, { FC, useState } from 'react'
import DropdownList from "react-widgets/DropdownList"
import Datepicker from 'react-datepicker'
import Airports from '../assets/AirportList/Airports.json'
import { AirportToFlagConvert } from './AirportToFlagConvert'
import { setConstantValue } from 'typescript'
import { useStateValue } from '../state'
import { collection, addDoc } from "firebase/firestore"; 
import { firebaseConfig } from "../FirebaseConfig";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

interface userProp{
    userId:string,
}

const InputRouteInfo: FC<userProp> = (props: userProp) => {
    const { userId } = props
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    const [{ pageCount,docRef }, dispatch] = useStateValue();
    
    const [startDate, setStartDate] = useState(new Date());
    const [deptValue, setDeptValue] = useState('')
    const [arriValue, setArriValue] = useState('')
    const [flightNumber, setFlightNumber] = useState('')

    const ApCodes: any = []

    let pgContext = pageCount

    Airports.forEach(codePush)

    function codePush(item: any, index: any, arr: any) {
        ///extract airport codes from airport object array
        ApCodes.push(item.code)

    }
    // AirportToFlagConvert()
    const handleClick = async () => {
        
        //submits the information to the DB

        let countryDeptName = AirportToFlagConvert(deptValue)
        let countryArrivName = AirportToFlagConvert(arriValue)

        
        console.log('Country Dept Name',countryDeptName[0])
        console.log('Country Arriv Name', countryArrivName[0])
        
        const docRef = await addDoc(collection(db, "routes"), {

            arrival_ariport:arriValue,
            arrival_country:countryArrivName,
            departure_airport:deptValue,
            departure_country:countryDeptName,
            departure_date:startDate,
            flight_number:flightNumber,
            userId: userId
            
        });
        //allows rest of multi-form to have access to db reference
        dispatch({ type: 'docRef', payload: docRef});
        




        //switches to part to of the form input
        pgContext++
        // console.log('PageCount+', pgContext)

        if (pgContext > 2) {
            pgContext = 0
        }

        dispatch({ type: 'pageCount', payload: pgContext });

    }
    return (

        <div >

            <div className='flex justify-center bg-barrel-green'>
                <section className='flex flex-col w-56  '>
                    <span className='text-white font-bold pt-8'>FROM</span>
                    <DropdownList  data={ApCodes} onSelect={(value:string)=>setDeptValue(value) }  />
                    
                    <span className='text-white font-bold pt-2 pb-2'>TO</span>
                    <DropdownList  data={ApCodes} onSelect={(value1: string) => setArriValue(value1)} />



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
                            onChange={(e)=>setFlightNumber(e.target.value)}

                        />
                    </div>
                </section>
            </div>
            <div className='grid justify-center p-3 bg-barrel-green' >
                <span className='text-white font-bold' >Departure Date</span>
                <Datepicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
            </div>
            <div className='flex justify-center w-58 bg-barrel-green pt-5'>
                <button className='m-2 focus:outline-none text-white bg-purple-700 
                    hover:bg-purple-800 focus:ring-4 focus:ring-purple-300
                    font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600
                    dark: hover: bg-purple-700 dark:focus:ring-purple-900'
                type="submit" onClick={handleClick}
                >
                NEXT
                </button>
            </div>
            
        </div>

    )
}

export default InputRouteInfo
