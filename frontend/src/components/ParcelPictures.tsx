import React, { FC, useEffect, useState } from 'react'
import ParcelPicture from './ParcelPicture'
import {
    getFirestore, addDoc, updateDoc,
    doc, getDocs, query,
    collection, where, getDoc
} from "firebase/firestore"; 
import { firebaseConfig } from "../FirebaseConfig";
import { initializeApp } from "firebase/app";
///Read all items the sender could potentially
///select for bidding.
//place data in a state variable and map it out below

interface userProp{
    userId:string,
}

const ParcelPictures: FC<userProp> = (props: userProp) => {
    
    const { userId } = props
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const [itemList, setItemList] = useState([])
    const [itemPicIdList, setItemPicIdList] = useState([])
    // const [itemUrlList,setItemUrlList]=useState<any>([])
    
    let tempItemList = [] as any
    let itemPicId = [] as any
    let tempItemURL = [] as any

    
    //this gets the initial list of user items
    const q = query(collection(db, "items"), where("userId", "==", userId));
    getDocs(q).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            
            tempItemList.push(doc.id)
            getDocs(query(collection(db, `items/${doc.id}/pictures`),
                where('url', '!=', '')))
                .then((querySnapshot) => {
                    console.log("picIDSnapshot", querySnapshot)
                
                    querySnapshot.forEach((result) => {
                        
                        console.log("pic Data", result.data())
                        tempItemURL.push(result.data().url)
                        itemPicId.push(result.id)
                    
                    }
                    )
                }
                )
        });
    })

    console.log("tempItemList", tempItemList)
    console.log("itemPicId", itemPicId)
    console.log("itemURLtype", tempItemURL)


    //     const querySnapshot = await getDocs(query(collection(db, `items/${item}/pictures`),
    //         where('url', '!=', '')))
    //     .then(
            
    // console.log(querySnapshot)
            
    // }
    // itemList.forEach(getPicIds)
    const listItems = tempItemURL.map((url: any) =>
    {
        console.log('url inside map ',url);
            < li > <ParcelPicture url={url} /></li>
    
    });
    // return (<ul>{listItems}</ul>);
    

    return (
        <div className='box-content p-4 
            bg-gray-600 rounded-lg  '
        >
            <div className='flex flex-column gap-4'
            >
                {<ul>{listItems}</ul>
                    // tempItemURL.map((url: any, key: any) => (
                        
                    //     console.log('map url',url)
                    //     <ParcelPicture url={url} />
                    // ))
                    
                    
                }
                

            </div>

        </div>
    )
}

export default ParcelPictures
