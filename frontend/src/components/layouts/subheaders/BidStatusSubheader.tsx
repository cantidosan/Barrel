import React, { FC } from 'react'
import { useStateValue } from '../../../state';

const BidStatusSubheader: FC = () => {

    const [{ courierToggle }, dispatch] = useStateValue();

    let title = 'PENDING BIDS'
    if (courierToggle !== 'Route') {
        title = 'DELIVERY HISTORY'
    }

    return (

        <h2 className='text-white underline
                     underline-offset-3 font-hansief 
                     text-2xl font-bold text-center 
                     bg-barrel-green pt-10 tracking-wide '
        >
            {title}
        </h2>
        //  <h2 className='text-white underline
        //             underline-offset-3 font-hansief 
        //             text-2xl font-bold text-center 
        //             bg-barrel-green pt-10 tracking-wide'
        //        >
        //            PENDING BIDS
        //        </h2> 

    )
}

export default BidStatusSubheader
