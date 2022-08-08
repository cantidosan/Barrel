import React, { FC, useContext, useState,useEffect } from 'react'
import BidDetails from './BidDetails'
import DecideBid from './DecideBid'
import MakeBid from './MakeBid'
import AuthContext from '../auth/authContext'
import { isRouteOwner } from './isRouteOwner'
import { useParams } from 'react-router-dom'
import {isCourier} from '../components/isCourier'

interface courierProp  {

    
    courierId:string
   

}


const BidDetailsView: FC<courierProp> = (props:courierProp) => {

    const { courierId } = props
    let route_id = useParams();


    const [userAuth, setUserAuth] = useState('false')

    console.log('userAuth',!!userAuth)

    const { user } = useContext(AuthContext);

    useEffect(() => {

        isCourier(user).then((res) => setUserAuth(res))
        console.log('auth says what', userAuth)
        
    }, [user])
    
    return (
        <div className='flex flex-row border  '>
            {
                !!userAuth ?
                <DecideBid /> :
                <MakeBid courierId={courierId} />
            }
            <BidDetails />
        </div>
    )
}

export default BidDetailsView
