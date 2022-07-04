import React from 'react'
import { useStateValue } from '../../../state/index'

function HeaderCenterCTA() {

    const [{ headerState }, dispatch] = useStateValue();

    const handleClick = (value: any) => {
        console.log('value', value)
        dispatch({ type: 'headerState', payload: value });
    }

    return (
        <ul className="flex flex-col pl-28  mt-4 
            md:flex-row md:space-x-8 md:mt-0
            md:text-sm md:font-medium font-hansief"
        >

            <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-white 
                    border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent
                    md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white
                    md:dark:hover:text-white dark:hover:bg-gray-700
                    dark:hover:text-white md:dark:hover:bg-transparent
                    dark:border-gray-700"
                    onClick={e => handleClick('1')}
                >
                    WHERE
                </a>
            </li>
            <li>
                {/* this component will simulate a price and likelieyhood
                of finding a courier for that particular object while developing 
                our own item codex */}
                <a href="#" className="block py-2 pr-4 pl-3 text-white
                     border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent
                      md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white
                      md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white
                       md:dark:hover:bg-transparent dark:border-gray-700"

                >WHAT</a>
            </li>
            <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-white border-b 
                    border-gray-100 hover:bg-gray-50 md:hover:bg-transparent
                    md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white
                    md:dark:hover:text-white dark:hover:bg-gray-700
                    dark:hover:text-white md:dark:hover:bg-transparent
                    dark:border-gray-700"
                    onClick={e => handleClick('2')}>WHEN</a>
            </li>

        </ul>
    )
}

export default HeaderCenterCTA
