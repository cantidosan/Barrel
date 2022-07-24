import React from 'react'
import ParcelPicture from './ParcelPicture'
import PendingBidCardSm from './PendingBidCardSm'
import {
    getFirestore, addDoc, updateDoc,
    doc, getDocs, query,
    collection, where, getDoc
} from "firebase/firestore"; 
import { firebaseConfig } from "../FirebaseConfig";
import { initializeApp } from "firebase/app";
//This component takes the senderId as a prop and fetches
//all items created by the user then fetches the picurls for each 
//component



const RecentParcelPics = (props:any) => {


    const { userId } = props
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    let itemList = [] as any
    let itemPicId = [] as any
    let itemURL = [] as any

    //this gets the initial list of user items
    const q = query(collection(db, "items"), where("userId", "==", userId));
    getDocs(q).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            
            itemList.push(doc.id)
            getDocs(query(collection(db, `items/${doc.id}/pictures`),
            where('url', '!=', '')))
            .then((querySnapshot) => 
                 
                {
                console.log("picIDSnapshot", querySnapshot)
                
                    querySnapshot.forEach((result) => 
                    {
                        
                        console.log("pic Data", result.data())
                        itemURL.push(result.data().url)
                        itemPicId.push(result.id)
                    
                    }
                    )
                }
            )
            });
    })


    return (
        <div className='max-w-54 p-4 bg-barrel-green rounded-lg'>
            <div className=' flex flex-column justify-center gap-4 pb-2 '>


            {itemURL.map((url :any,key:any)=>
                <ParcelPicture url={url as any} />
                
                )}


            </div>

        </div>
    )
}

export default RecentParcelPics
