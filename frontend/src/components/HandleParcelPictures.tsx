import React, { FC, useState } from 'react'
import americanflag from '../assets/images/americanflag.png'
import prflag from '../assets/images/prflag.png'
import ParcelPictures from './ParcelPictures'
import { useStateValue } from '../state/index'
import InputParcelInfo from './InputParcelInfo'
import InputParcelDetails from './InputParcelDetails'

const HandleParcelPictures = () => {

    const url = [prflag, americanflag]

    const [{ pageCount }, dispatch] = useStateValue();

    //ParcelUrls will contain all editable items tied to the sender account
    //On click it should update the DOM to show editable details of the active item

    const [parcelUrls, setParcelUrls] = useState<any | null>(null);;


    let pgContext = pageCount



    const nextPage = () => {

        pgContext++
        // console.log('PageCount+', pgContext)

        if (pgContext > 2) {
            pgContext = 0
        }

        dispatch({ type: 'pageCount', payload: pgContext });

    }
    const prevPage = () => {

        pgContext--
        if (pgContext <= 0) {

            pgContext = 0

        }

        // console.log('PageCountD', pgContext)

        dispatch({ type: 'pageCount', payload: pgContext });

    }


    return (
        <>

            {pageCount === 0 ?
                <section className=''>
                    <div className='flex justify-center bg-barrel-green'>


                        <figure className='flex ' >
                            <img className=" 
                    block object-fit 
                    object-center  rounded-lg"
                                src={url[1]} alt="" width="154"
                            />

                        </figure>


                    </div >
                    <div className='flex justify-center bg-barrel-green '>
                        <ParcelPictures />
                    </div>
                </section > : pageCount === 1 ? <InputParcelInfo /> : <InputParcelDetails />
            }
            <div className='flex justify-center w-58 bg-barrel-green pt-5 pb-4'>

                <button className='m-2 focus:outline-none text-white bg-purple-700 
                        hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium 
                        rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 
                        dark:focus:ring-purple-900"' type="submit" onClick={prevPage}
                >
                    BACK
                </button>
                <button className='m-2 focus:outline-none text-white bg-purple-700 
                        hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg 
                        text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 
                        dark:focus:ring-purple-900'
                    type="submit" onClick={nextPage}
                >
                    NEXT
                </button>
            </div>
            <div className='flex justify-center bg-barrel-green '>
                <ParcelPictures />
            </div>
        </>
    )
}

export default HandleParcelPictures
