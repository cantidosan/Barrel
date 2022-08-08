import React, { useState, useEffect } from 'react'
import { useStateValue } from '../state/index'



const useAirportSelectionDept = (airport) => {

    const [{ deptPort }, dispatch] = useStateValue();

    // const [selectedAirport, setSelectedAirport] = useState(airport)


    useEffect(() => {
        dispatch({ type: 'deptPort', payload: airport });
    }, [airport])


}

export default useAirportSelectionDept
