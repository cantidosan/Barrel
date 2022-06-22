import React, { FC } from 'react'

const InputExchangeDetails: FC = () => {
    return (
        <div className="grid gap-6 pt-10 justify-center bg-barrel-green font-bold text-white ">
            <div>
                <label htmlFor="small-input" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Location</label>
                <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                    sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                    dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Exchange Policy</label>
                <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 
                    focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            </div>
        </div>
    )
}

export default InputExchangeDetails
