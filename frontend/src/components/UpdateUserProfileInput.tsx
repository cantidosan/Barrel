import React, { FC,useState } from 'react'
import PrevPageNavButton from '../buttons/PrevPageNavButton'
import NextPageNavButton from '../buttons/NextPageNavButton'

const UpdateUserProfileInput: FC = () => {

    const [username, setUsername] = useState('')
    const [cellular, setCellular] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    /* HOOK REQUIRED TO PULL ORIGINAL USERNAME & PASSWORD    */
    /* HOOK REQUIRED TO CHANGE EMAIL @ CELLULAR    */



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
                placeholder={username}
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
                    placeholder={cellular}
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
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="email"
                    name="email"
                    placeholder={email} />
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
            < div className='flex justify-center pt-4 bg-barrel-green'>

                <PrevPageNavButton />
                <NextPageNavButton />
            </div>
        </div>
    )
}

export default UpdateUserProfileInput
