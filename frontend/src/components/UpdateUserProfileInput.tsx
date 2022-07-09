import React, { FC } from 'react'

const UpdateUserProfileInput: FC = () => {
    return (
        <div>
            <div className="font-roboto">

            <label htmlFor="username" className='block mb-2 text-sm
            font-medium text-white dark:text-gray-300'
            >
                Username
            </label>
            <input id="username"
                name="username"

                className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg 
                border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
        </div>
            <div>
                <label htmlFor="cell" className='block mb-2 text-sm font-medium 
            text-white dark:text-gray-300'
                >
                    Cellular
                </label>

                <input id="cellular"
                    name="cellular"
                    placeholder="888-888-8888"
                    className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg 
                border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block mb-2 text-sm font-medium 
            text-white dark:text-gray-300" htmlFor="email">Email</label>

                <input className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg 
                border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 
                dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                dark:focus:ring-blue-500 dark:focus:border-blue-500" id="email" name="email" placeholder="email@email.com" />
            </div>
            <div>
                <label className='block mb-2 text-sm font-medium 
            text-white dark:text-gray-300' htmlFor="password">Password</label>

                <input className="block p-2 w-full text-gray-900 bg-gray-50 
            rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 
            focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
            dark:focus:border-blue-500" id="password" name="password" type="password"
                    placeholder="hunter12"
                />
            </div>
        </div>
    )
}

export default UpdateUserProfileInput
