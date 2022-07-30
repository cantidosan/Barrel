import React, { FC } from 'react'
import RouteFlag from './RouteFlag'
import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'
import ParcelPicture from './ParcelPicture'

//this component needs route details passed to it as a prop 
//also needs the bid items?


//this function should have an onclick which navigates 
// to route details page

const PendingBidCardSm: FC = () => {

    const url = [prflag, americanflag]

    // const docRef = doc(db, "bids", bid_id as string);



    return (
        <div className='flex '>
            <figure className='flex flex-col basis-1/2  '>
                <div className='w-7'>
                    <RouteFlag url={url[0]} />
                </div>
                <div className='w-7'>
                    <RouteFlag url={url[1]} />
                </div>


            </figure>
            <div className='pt-1'>
                <ParcelPicture url={url} />
            </div>
        </div>
    )
}

export default PendingBidCardSm
