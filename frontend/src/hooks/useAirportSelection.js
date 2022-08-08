import React, { useState, useEffect } from 'react'
import { useStateValue } from '../state/index'



const useAirportSelection = (airport) => {

    const [{ arrivPort }, dispatch] = useStateValue();

    // const [selectedAirport, setSelectedAirport] = useState(airport)


    useEffect(() => {


        dispatch({ type: 'arrivPort', payload: airport });



    }, [airport])


}

export default useAirportSelection
