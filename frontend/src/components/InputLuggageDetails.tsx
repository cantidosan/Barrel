import React, { FC, useEffect, useState } from 'react'
import ToggleMetricsButton from '../buttons/ToggleMetricsButton'
import { useStateValue } from '../state/';


const InputLuggageDetails: FC = () => {

    const [{ pageCount, metricToggle }, dispatch] = useStateValue();

    const [weightMetric, setWeightMetric] = useState('lbs');
    const [sizeMetric, setSizeMetric] = useState('feet');


    console.log('sizemetric', sizeMetric)
    console.log('weightmetric', weightMetric)


    useEffect(() => {

        if (metricToggle === 'MET') {
            setSizeMetric('centimeters')
            setWeightMetric('grams')
        } else {
            setSizeMetric('feet')
            setWeightMetric('lbs')
        }


    }, [metricToggle])

    return (
        <div className='grid justify-center bg-barrel-green text-white font-bold p-3 
            underline gap-3 font-hansief '>

            <ToggleMetricsButton />

            <section className=''>
                <div>
                    <label htmlFor="item_length" className="block mb-2 text-sm font-medium text-gray-900 
                        dark:text-gray-300 text-center">WEIGHT
                    </label>
                    <input type="text" id="item_length" className="bg-gray-50 border border-gray-300 
                        text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={weightMetric} required
                    />
                </div>

            </section>
            <h2 className='flex justify-center'>SPACE</h2>
            <section className=''>
                <div>
                    <label htmlFor="item_length" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Length</label>
                    <input type="text" id="item_length" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={sizeMetric} required />
                </div>
                <div>
                    <label htmlFor="item_width" className=" pt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Width</label>
                    <input type="text" id="item_width" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={sizeMetric} required />
                </div>
                <div>
                    <label htmlFor="item_height" className="pt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Height</label>
                    <input type="text" id="item_height" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={sizeMetric} required />
                </div>


            </section>
        </div>
    )
}

export default InputLuggageDetails
