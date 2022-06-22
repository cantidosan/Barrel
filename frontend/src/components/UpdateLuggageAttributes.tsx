import React from 'react'

function UpdateLuggageAttributes() {
    return (
        <div>
            <section className='grid gap-6 pt-10 justify-center bg-barrel-green '>
                <div>
                    <label htmlFor="item_length" className=" bg-barrel-green block mb-2 text-sm font-roboto font-medium text-gray-900 dark:text-gray-300">WEIGHT</label>
                    <input type="text" id="item_length" className="bg-gray-50 placeholder-white-600 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="lbs" required />
                </div>
                <div>
                    <label htmlFor="item_length" className=" bg-barrel-green block mb-2 text-smfont-roboto font-medium text-gray-900 dark:text-gray-300">HEIGHT</label>
                    <input type="text" id="item_length" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-white-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="inches " required />
                </div>
                <div>
                    <label htmlFor="item_length" className=" bg-barrel-green block mb-2 text-smfont-roboto font-medium text-gray-900 dark:text-gray-300">LENGTH</label>
                    <input type="text" id="item_length" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-white-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="inches" required />
                </div>
                <div>
                    <label htmlFor="item_length" className=" bg-barrel-green block mb-2 text-smfont-roboto font-medium text-gray-900 dark:text-gray-300">WIDTH</label>
                    <input type="text" id="item_length" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-white-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="inches" required />
                </div>

            </section>
        </div>
    )
}

export default UpdateLuggageAttributes
