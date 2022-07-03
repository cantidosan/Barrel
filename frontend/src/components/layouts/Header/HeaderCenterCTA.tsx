import React from 'react'

function HeaderCenterCTA() {
    return (
        <ul className="flex flex-col pl-28  mt-4 
            md:flex-row md:space-x-8 md:mt-0
            md:text-sm md:font-medium font-hansief"
        >

            <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 
                    border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent
                    md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400
                    md:dark:hover:text-white dark:hover:bg-gray-700
                    dark:hover:text-white md:dark:hover:bg-transparent
                    dark:border-gray-700">WHERE</a>
            </li>
            <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700
                     border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent
                      md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400
                      md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white
                       md:dark:hover:bg-transparent dark:border-gray-700">WHAT</a>
            </li>
            <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b 
                    border-gray-100 hover:bg-gray-50 md:hover:bg-transparent
                    md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400
                    md:dark:hover:text-white dark:hover:bg-gray-700
                    dark:hover:text-white md:dark:hover:bg-transparent
                    dark:border-gray-700">WHEN</a>
            </li>

        </ul>
    )
}

export default HeaderCenterCTA
