import React, { FC } from 'react'

function InputParcelInfo() {
    return (
        <div className="grid gap-6 mb-3 pt-10 justify-center bg-barrel-green ">

            <div className="font-roboto">
                <label htmlFor="username" className='block mb-2 text-sm font-medium 
                                text-gray-900 dark:text-gray-300'
                >
                    Item Name
                </label>
                <input id="username"
                    name="username"

                    className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg 
                                    border border-gray-300 sm:text-xs focus:ring-blue-500 
                                    focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                                    dark:placeholder-gray-400 dark:text-white 
                                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <label htmlFor="cell" className='block mb-2 text-sm font-medium 
                                text-gray-900 dark:text-gray-300'
                >
                    Item # (optional)
                </label>

                <input id="itemNumber"
                    name="itemNumber"
                    placeholder="s/n #453320498"
                    className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg 
                                    border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>

        </div>
    )
}

export default InputParcelInfo
