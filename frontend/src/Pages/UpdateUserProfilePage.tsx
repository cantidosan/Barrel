import React, { FC } from 'react'
import { useStateValue } from '../state/index'
import PageLayout from '../components/layouts/PageLayout'
import NavigationIcons from '../components/NavigationIcons/NavigationIcons'
import UpdateUserProfileSubheader from '../components/layouts/subheaders/UpdateUserProfileSubheader'
import UploadImage from '../components/UploadImage'
import UpdateUserProfileInput from '../components/UpdateUserProfileInput'
import NextPageNavButton from '../buttons/NextPageNavButton'
import PrevPageNavButton from '../buttons/PrevPageNavButton'

const UpdateUserProfilePage: FC = () => {

    //THIS COMP NEEDS THE BUTTONS PLACED INSIDE EVERY CHILD INSTEAD
    //OF ITS CURRENT POSITION OUTSIDE IN THE PARENT COMP
    //THIS REQUIRES USER AUTH AND DB READING WILL
    //BE DONE IN EACH CHILD COMP

    
    const [{ pageCount }, dispatch] = useStateValue();



    return (

        <PageLayout>


            <h2 className=" pt-3 flex justify-center 
                bg-barrel-green underline
                text-white font-hansief text-center"
            >
                Edit <br /> Profile <br /> Info
            </h2>

            <section className=' flex justify-center bg-barrel-green
                        pt-5'
            >
                <div className='w-52 '>
                    <NavigationIcons />
                </div>

            </section>
            <UpdateUserProfileSubheader />


            <section className="grid gap-6  pt-10 justify-center 
                        bg-barrel-green "
            >
                {
                    pageCount === 0 ? <UpdateUserProfileInput /> :
                        pageCount === 1 ? <UploadImage /> :
                            pageCount === 2 ? <div><UploadImage /><label htmlFor="passpNumber" className='block mb-2 text-sm font-medium 
                            text-gray-900 dark:text-gray-300'
                            >
                                Passport #
                            </label>

                                <input id="passpNumber"
                                    name="passpNumber"
                                    placeholder=" #453320498"
                                    className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg 
                                        border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 
                                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                        dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                /></div> : ''
                }




            </section>


            < div className='flex justify-center pt-4 bg-barrel-green'>

                <PrevPageNavButton />
                <NextPageNavButton />
            </div>


        </PageLayout >
    )
}

export default UpdateUserProfilePage
