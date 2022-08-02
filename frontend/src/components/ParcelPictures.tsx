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
    const [itemUrlList, setItemUrlList] = useState<any>([])
    console.log("itemUrlList", itemUrlList)

    let tempItemList = [] as any
    let itemPicId = [] as any
    let tempItemURL = [] as any

    // tempItemUrl[0] = result.data()[0] || "https://www.barrell.jm"

        //this gets the initial list of user items
    useEffect(() => {
        
        const q = query(collection(db, "items"), where("userId", "==", userId));
        getDocs(q).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                
                tempItemList.push(doc.id)
                let picInfoObject = {
                    itemId: doc.id,
                    picId:'',
                    url:''
                }


                getDocs(query(collection(db, `items/${doc.id}/pictures`),
                    where('url', '!=', '')))
                    .then((querySnapshot) => {
                        // console.log("picIDSnapshot", querySnapshot)
                        querySnapshot.forEach((result) => {


                            picInfoObject['picId']=result.id
                            picInfoObject['url']=result.data().url

                            // console.log("pic Data URL", result.data().url)
                            // itemPicId.push(result.id)
                            
                            // console.log("post Push Data", tempItemURL)
                            
                            


                            console.log("itemUrlList", itemUrlList)
                        }
                        )
                        tempItemURL.push(picInfoObject)
                        setItemUrlList(tempItemURL)

                    }
                )
            
                
            });
        })
    }, [])
    

    // console.log("MAIN LIST", itemUrlList, itemPicIdList)
   
 
    return (
    
         <div className='box-content p-4 
             bg-gray-600 rounded-lg  '
         >
            <div className='flex flex-column gap-4'
            >    
                {

                    itemUrlList.map((url: any, key: any) => {
                        console.log('url',url)
                        return <ParcelPicture url={url['url']}
                            picId={url['picId']}
                            itemId={url['itemId']}
                            key={url['picId']} />
                    })  
                }
              
             </div>

        </div>
    
    )
}

export default ParcelPictures
