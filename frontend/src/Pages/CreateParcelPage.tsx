import React, { FC } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import InputRouteInfo from '../components/InputRouteInfo'
import InputExchangeDetails from '../components/InputExchangeDetails'
import InputLuggageDetails from '../components/InputLuggageDetails'
import NavigationIcons from '../components/NavigationIcons'

///###TODO complete this page
const CreateParcelPage: FC = () => {

    return (
        <PageLayout>
            <div>

                <h2 className='bg-barrel-green flex justify-center'>ROUTE INFO</h2>
                <NavigationIcons />



            </div>
        </PageLayout>
    )
}

export default CreateParcelPage
