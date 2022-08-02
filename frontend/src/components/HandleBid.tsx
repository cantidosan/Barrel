import React, { FC } from 'react'
import BidDetailsView from './BidDetailsView';
import BidDetails from './BidDetails';
import {
    getFirestore, addDoc, updateDoc,
    doc, getDocs, query,
    collection, where, getDoc
} from "firebase/firestore"; 




interface courierProp  {

    
    courierId:string
   

}


const HandleBid: FC<courierProp> = (props:courierProp) => {

    const { courierId } = props
    
    return (

        <div className='bg-barrel-green'>
            <BidDetailsView courierId={courierId}/>
            {/* <BidDetails /> */}

        </div>

    )
}

export default HandleBid;
