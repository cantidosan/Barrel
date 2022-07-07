import React, { FC } from 'react'


// this componentt should recieve a parcelID as a prop
// and fetch delivery table to retrieve deliveryID then
//fetch the delivery update from the deliveryupdates table
const DeliveryUpdates: FC = () => {
    return (
        <div className='  '>

            <h2 className='inline text-left font-thin 
            text-white font-roboto mb-1 mr-2 text-lg font-hansief'
            >
                Delivery Updates
            </h2>

            <p className='font-light 
                 text-xs text-white
                 font-roboto  md:overflow-y-scroll md:overflow-x-scroll '
            >

                <time dateTime="06/03/2022" className='opacity-60'>
                    June 6th,2022<time dateTime='3:00'>
                        3:00am
                    </time>

                </time>
                &nbsp;completed check-in,awaiting boarding
            </p>

        </div>
    )
}

export default DeliveryUpdates
