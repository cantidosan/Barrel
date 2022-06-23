import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import NavigationIcons from '../components/NavigationIcons/NavigationIcons'
import CreateParcelSubheader from '../components/layouts/subheaders/CreateParcelSubheader'
import { useStateValue } from '../state/index'
import UploadImage from '../components/UploadImage'
import InputParcelInfo from '../components/InputParcelInfo'
import InputParcelDetails from '../components/InputParcelDetails'

///###TODO complete this page
const CreateParcelPage: FC = () => {

    const [{ pageCount }, dispatch] = useStateValue();


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
        <PageLayout>


            <CreateParcelSubheader />
            <section className='flex justify-center 
                bg-barrel-green pt-5  '>
                <div className='w-52'>
                    <NavigationIcons />
                </div>

            </section>
            <section className='flex  justify-center pt-6 bg-barrel-green'>
                {pageCount === 0 ? <UploadImage /> : pageCount === 1 ? <InputParcelInfo /> : <InputParcelDetails />}

            </section><div className='flex justify-center w-58 bg-barrel-green pt-5'>

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





        </PageLayout >
    )
}

export default CreateParcelPage
