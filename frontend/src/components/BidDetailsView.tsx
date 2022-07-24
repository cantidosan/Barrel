import React, { FC, useContext, useState } from 'react'
import BidDetails from './BidDetails'
import DecideBid from './DecideBid'
import MakeBid from './MakeBid'
import AuthContext from '../auth/authContext'
import { isRouteOwner } from './isRouteOwner'

const BidDetailsView: FC = () => {

    const [userAuth, setUserAuth] = useState('false')
    console.log(userAuth)

    const { user } = useContext(AuthContext);

    isRouteOwner(user).then(res => setUserAuth(res as string))

    return (
        <div className='flex flex-row border  '>
            {userAuth ?   <MakeBid />:<DecideBid />}
            <BidDetails />
        </div>
    )
}

export default BidDetailsView
