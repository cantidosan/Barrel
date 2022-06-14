import React, { FC } from 'react'

const DisplayDeliveryUpdates: FC = () => {
    return (
        <div className='overflow-hidden overflow-y-scroll h-18  '>

            <h2 className='inline text-left font-bold 
            text-white  font-roboto mb-1 mr-2'
            >
                Delivery Updates
            </h2>

            <p className='w-28 font-light
                 text-xs text-white font-roboto '>

                <time dateTime="06/03/2022" className='opacity-60'>
                    June 6th,2022 &nbsp;
                    <time dateTime='3:00'>
                        3:00am &nbsp;
                    </time>
                </time>
                &nbsp;completed check-in,awaiting boarding
            </p>

        </div>
    )
}

export default DisplayDeliveryUpdates
