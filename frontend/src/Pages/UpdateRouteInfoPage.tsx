import React, { FC } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import NavigationIcons from '../components/NavigationIcons/NavigationIcons'
import UpdateLocation from '../components/UpdateLocation'
import UpdateLuggageAttributes from '../components/UpdateLuggageAttributes'
import UpdatePolicy from '../components/UpdatePolicy'


const UpdateRouteInfoPage: FC = () => {
    return (
        <PageLayout>
            <h2 className='pt-3 flex justify-center bg-barrel-green underline
                        text-white font-hansief'>Exchange Location</h2>
            <section className='flex justify-center bg-barrel-green pt-5  '>

                <div className='w-52'>
                    <NavigationIcons />
                </div>
            </section>
            {/* <UpdateLocation /> */}
            {/* <UpdatePolicy /> */}
            <UpdateLuggageAttributes />
            {


                <div className='flex justify-center bg-barrel-green pt-5'>
                    <button className='m-2 focus:outline-none text-white bg-purple-700 
                        hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg 
                        text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                        type="submit"
                    >
                        NEXT
                    </button>
                    <button className='m-2 focus:outline-none text-white bg-purple-700 
                        hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium 
                        rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 
                        dark:focus:ring-purple-900"' type="submit"
                    >
                        CANCEL
                    </button>
                </div>
            }



        </PageLayout >
    )
}

export default UpdateRouteInfoPage
