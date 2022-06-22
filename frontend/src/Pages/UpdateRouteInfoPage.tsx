import React, { FC } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import NavigationIcons from '../components/NavigationIcons/NavigationIcons'
import UpdateLocation from '../components/UpdateLocation'
import UpdateLuggageAttributes from '../components/UpdateLuggageAttributes'
import UpdatePolicy from '../components/UpdatePolicy'
import { useStateValue } from '../state/';
import CreateRouteSubheader from '../components/layouts/subheaders/CreateRouteSubheader';
import UpdateRouteSubheader from '../components/layouts/subheaders/UpdateRouteSubheader'


const UpdateRouteInfoPage: FC = () => {
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


            <UpdateRouteSubheader />
            <section className='flex justify-center bg-barrel-green pt-5  '>

                <div className='w-52'>
                    <NavigationIcons />
                </div>
            </section>


            {

                pageCount === 0 ? <UpdateLocation /> : pageCount === 1 ? <UpdatePolicy /> : <UpdateLuggageAttributes />


            }
            {


                <div className='flex justify-center bg-barrel-green pt-5'>
                    <button className='m-2 focus:outline-none text-white bg-purple-700 
                        hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg 
                        text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                        type="submit"
                        onClick={nextPage}
                    >
                        NEXT
                    </button>
                    <button className='m-2 focus:outline-none text-white bg-purple-700 
                        hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium 
                        rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 
                        dark:focus:ring-purple-900"' type="submit"
                        onClick={prevPage}
                    >
                        CANCEL
                    </button>
                </div>
            }



        </PageLayout >
    )
}

export default UpdateRouteInfoPage
