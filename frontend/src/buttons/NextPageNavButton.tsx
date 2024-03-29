import React, { FC } from 'react'
import { useStateValue } from '../state/index'

const NextPageNavButton: FC = () => {

    const [{ pageCount }, dispatch] = useStateValue();


    const nextPage = () => {

      
        dispatch({ type: 'pageCount', payload: pageCount+1 });

    }
    return (
        <button className='m-2 focus:outline-none text-white bg-purple-700 
                        hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg 
                        text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 
                        dark:focus:ring-purple-900'
            type="button" onClick={nextPage}
        >
            NEXT
        </button>
    )
}

export default NextPageNavButton
