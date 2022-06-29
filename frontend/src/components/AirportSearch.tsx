import React, { useState } from 'react'
import { Combobox } from '@headlessui/react'
import Airports from '../assets/AirportList/Airports.json'

function AirportSearch() {
    const ApCodes: any = []
    const [selectedAirport, setSelectedAirport] = useState(ApCodes[2])
    const [query, setQuery] = useState('')



    Airports.forEach(codePush)

    function codePush(item: any, index: any, arr: any) {
        ///extract airport codes from airport object array
        ApCodes.push(item.code)

    }

    const filteredAirport =
        query === ''
            ? Airports
            : Airports.filter((airport: any) => {
                return airport.code.toLowerCase().includes(query.toLowerCase())
            })
    return (
        <Combobox value={selectedAirport} onChange={setSelectedAirport}>
            <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
            <Combobox.Options>
                {filteredAirport.map((airport) => (
                    <Combobox.Option key={airport.code} value={airport.code}>
                        {airport.code}
                    </Combobox.Option>
                ))}
            </Combobox.Options>
        </Combobox>

    )
}

export default AirportSearch
