import React, { FC } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import InputRouteInfo from '../components/InputRouteInfo'
import InputExchangeDetails from '../components/InputExchangeDetails'
import InputLuggageDetails from '../components/InputLuggageDetails'
import NavigationIcons from '../components/NavigationIcons'

const CreateParcelPage: FC = () => {

    return (
        <PageLayout>
            <div>

                <h2 className=' flex justify-center'>ROUTE INFO</h2>
                <NavigationIcons />
                <InputRouteInfo />
                <InputExchangeDetails />
                <InputLuggageDetails />


            </div>
        </PageLayout>
    )
}

export default CreateParcelPage
