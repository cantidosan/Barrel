import React, { FC, useEffect, useState } from 'react'
import { useStateValue } from '../state/index'

const PrevPageNavButton: FC = () => {

    const [{ pageCount }, dispatch] = useStateValue();

    let pgContext = pageCount

    const prevPage = () => {

        pgContext--
        if (pgContext <= 0) {

            pgContext = 0

        }

        // console.log('PageCountD', pgContext)

        dispatch({ type: 'pageCount', payload: pgContext });

    }
    return (
        <button className='m-2 focus:outline-none text-white bg-purple-700 
                        hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium 
                        rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 
                        dark:focus:ring-purple-900"' type="submit" onClick={prevPage}
        >
            BACK
        </button>
    )
}

export default PrevPageNavButton
