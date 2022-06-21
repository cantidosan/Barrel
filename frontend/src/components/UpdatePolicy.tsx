import React, { FC } from 'react'

const UpdatePolicy: FC = () => {
    return (
        <div className='bg-barrel-green'>
            <div className="grid gap-6 pt-10 justify-center bg-barrel-green font-bold text-white ">
                <div>
                    <label htmlFor="small-input" className="block mb-2 text-md font-bold text-white underline font-roboto">Old Policy</label>
                    <p className='text-sm  opacity-70'>Scan at arrival gate</p>
                </div>
                <div>
                    <label htmlFor="small-input" className="block mb-2 text-md font-bold text-white 
                        font-roboto underline "
                    >
                        New Policy
                    </label>
                    <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-white bg-gray-50 
                        rounded-lg border border-gray-300 focus:ring-blue-500
                        focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                        dark:focus:border-blue-500" placeholder="Leave a comment...">

                    </textarea>
                </div>
            </div>
        </div>
    )
}

export default UpdatePolicy
