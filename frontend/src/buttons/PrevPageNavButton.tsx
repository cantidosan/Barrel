import React, { FC, useEffect, useState } from 'react'
import { useStateValue } from '../state/index'

const PrevPageNavButton: FC = () => {

    const [{ pageCount }, dispatch] = useStateValue();



    const prevPage = () => {
        dispatch({ type: 'pageCount', payload: pageCount-1 });
    }
    return (
        <button className='m-2 focus:outline-none text-white bg-gray-700 
                        hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium 
                        rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 
                        dark:focus:ring-gray-900"' type="button" onClick={prevPage}
        >
            BACK
        </button>
    )
}

export default PrevPageNavButton
