import React, { FC } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import CreateParcelSubheader from '../components/layouts/subheaders/CreateParcelSubheader'
import NavigationIcons from '../components/NavigationIcons/NavigationIcons'
import HandleParcelPictures from '../components/HandleParcelPictures'
function UpdateParcelInfoPage() {
    return (
        <PageLayout>
            <h2 className='pt-3 flex justify-center 
                bg-barrel-green underline
                text-white font-hansief text-center'
            >
                Edit
            </h2>
            <section className='flex justify-center 
                bg-barrel-green pt-5  '>
                <div className='w-52'>
                    <NavigationIcons />
                </div>
            </section>
            <CreateParcelSubheader />
            <HandleParcelPictures />

        </PageLayout>
    )
}

export default UpdateParcelInfoPage
