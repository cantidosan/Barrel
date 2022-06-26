import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import NavigationIcons from '../components/NavigationIcons/NavigationIcons'
import CreateParcelSubheader from '../components/layouts/subheaders/CreateParcelSubheader'
import { useStateValue } from '../state/index'
import UploadImage from '../components/UploadImage'
import InputParcelInfo from '../components/InputParcelInfo'
import InputParcelDetails from '../components/InputParcelDetails'
import NextPageNavButton from '../buttons/NextPageNavButton'
import PrevPageNavButton from '../buttons/PrevPageNavButton'

///###TODO complete this page
const CreateParcelPage: FC = () => {

    const [{ pageCount }, dispatch] = useStateValue();


    let pgContext = pageCount

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

            </section>

            <div className='flex justify-center w-58 bg-barrel-green pt-5'>

                <PrevPageNavButton />
                <NextPageNavButton />

            </div>





        </PageLayout >
    )
}

export default CreateParcelPage
