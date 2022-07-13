import React, { FC,useState } from 'react'

const InputParcelDetails = () => {

    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')
    const [length, setLength] = useState('')
    const [width, setWidth] = useState('')




    return (
        <div>
            <section className='grid gap-6 pt-10 justify-center bg-barrel-green '>
                <div>
                    <label htmlFor="item_length" className=" bg-barrel-green block mb-2 text-sm font-roboto font-medium text-white dark:text-white">WEIGHT</label>
                    <input type="text" id="item_length" className="bg-gray-50 placeholder-white-600 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="lbs" required
                        onChange={(e)=>setWeight(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="item_length" className=" bg-barrel-green block mb-2 text-smfont-roboto font-medium text-white dark:text-white">HEIGHT</label>
                    <input type="text" id="item_length" className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-white-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="inches " required
                        onChange={(ev)=>setHeight(ev.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="item_length" className=" bg-barrel-green block mb-2 text-smfont-roboto font-medium text-white dark:text-white">LENGTH</label>
                    <input type="text" id="item_length" className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-white-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="inches" required
                        onChange={(eve)=>setLength(eve.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="item_length" className=" bg-barrel-green block mb-2 text-smfont-roboto font-medium text-white dark:text-white">WIDTH</label>
                    <input type="text" id="item_length" className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-white-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="inches" required
                        onChange={(even)=>setWeight(even.target.value)}
                    />
                </div>

            </section>
        </div>
    )
}

export default InputParcelDetails
