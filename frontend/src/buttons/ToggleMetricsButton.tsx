import React, { FC, useState } from 'react'
import { useStateValue } from '../state/index';


const ToggleMetricsButton: FC = () => {

    const [{ pageCount, metricToggle }, dispatch] = useStateValue();

    const [preValue, setPreValue] = useState('')

    const handleChange = (e: React.ChangeEvent) => {

        if ((e.target as HTMLInputElement).value !== metricToggle) {

            setPreValue(metricToggle)
            dispatch({ type: 'metricToggle', payload: (e.target as HTMLInputElement).value });
        }
        else {

            dispatch({ type: 'metricToggle', payload: preValue });

        }
    }


    return (
        <label htmlFor="green-toggle"

            className="ml-8 inline-flex relative 
                    mr-5 cursor-pointer"
        >

            <input type="checkbox" value="MET" id="green-toggle"
                className="sr-only peer" placeholder='toggle' name="green-toggle"
                onChange={(e) => handleChange(e)}
            />

            <div className="w-28 h-9 bg-orange-500 rounded-full peer
                    dark:bg-orange-700 peer-focus:ring-4 peer-focus:ring-orange-300
                    dark:peer-focus:ring-green-800 
                    peer-checked:after:translate-x-20
                    peer-checked:after:border-white 
                    after:content-[''] after:absolute
                    after:top-0.5 after:left-[px] after:bg-white after:border-orange-300
                    after:border after:rounded-full after:h-8 after:w-8 after:transition-all 
                    dark:border-orange-600 peer-checked:bg-green-600"
            >
            </div>

        </label>
    )
}

export default ToggleMetricsButton
