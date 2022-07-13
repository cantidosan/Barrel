import React, { FC,useState } from 'react'

function InputParcelInfo() {

    const [itemName, setItemName] = useState('')
    const [itemNum, setItemNum] = useState('')


    return (
        <div className="grid gap-6  pt-10 justify-center bg-barrel-green ">

            <div className="font-roboto">
                <label htmlFor="username" className='block mb-2 text-sm font-medium 
                                text-white dark:text-gray-300'
                >
                    Item Name
                </label>
                <input id="username"
                    name="username"

                    className="block p-2 w-full text-white bg-gray-50 rounded-lg 
                                    border border-gray-300 sm:text-xs focus:ring-blue-500 
                                    focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                                    dark:placeholder-gray-400 dark:text-white 
                                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e)=>setItemName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="cell" className='block mb-2 text-sm font-medium 
                                text-white dark:text-gray-300'
                >
                    Item # (optional)
                </label>

                <input id="itemNumber"
                    name="itemNumber"
                    placeholder="s/n #453320498"
                    className="block p-2 w-full text-white bg-gray-50 rounded-lg 
                                    border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(ev)=>setItemNum(ev.target.value)}
                />
            </div>

        </div>
    )
}

export default InputParcelInfo
