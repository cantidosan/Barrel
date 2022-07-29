import React, { FC } from 'react'
import BidDetailsView from './BidDetailsView';
import BidDetails from './BidDetails';
import {
    getFirestore, addDoc, updateDoc,
    doc, getDocs, query,
    collection, where, getDoc
} from "firebase/firestore"; 

const HandleBid: FC = () => {

    return (

        <div className='bg-barrel-green'>
            <BidDetailsView/>
            {/* <BidDetails /> */}

        </div>

    )
}

export default HandleBid;
