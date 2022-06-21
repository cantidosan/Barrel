import React, { FC } from 'react'

const InputLuggageDetails: FC = () => {
    return (
        <div className='grid justify-center bg-barrel-green text-white font-bold p-3 
            underline gap-3 font-hansief '>
            <span className='text-center'>LuggageDetails</span>
            <label htmlFor="green-toggle"

                className="ml-8 inline-flex relative 
                    mr-5 cursor-pointer"
            >

                <input type="checkbox" value="courier" id="green-toggle"
                    className="sr-only peer" placeholder='Imperial' name="green-toggle"
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

            <section className=''>
                <div>
                    <label htmlFor="item_length" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">WEIGHT</label>
                    <input type="text" id="item_length" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="lbs" required />
                </div>

            </section>
            <h2 className='flex justify-center'>SPACE</h2>
            <section className=''>
                <div>
                    <label htmlFor="item_length" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Length</label>
                    <input type="text" id="item_length" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="feet" required />
                </div>
                <div>
                    <label htmlFor="item_width" className=" pt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Width</label>
                    <input type="text" id="item_width" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="feet" required />
                </div>
                <div>
                    <label htmlFor="item_height" className="pt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Height</label>
                    <input type="text" id="item_height" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="feet" required />
                </div>


            </section>
        </div>
    )
}

export default InputLuggageDetails
