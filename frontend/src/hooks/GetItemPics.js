
import React, { FC, useState, useEffect } from 'react'
import americanflag from '../assets/images/americanflag.png'
import prflag from '../assets/images/prflag.png'
import { useStateValue } from '../state/index'
import {
    getFirestore, addDoc, updateDoc,
    doc, getDocs, query,
    collection, where, getDoc
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";



const GetItemPics = (userId) => {

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const [itemList, setItemList] = useState([])
    const [itemPicIdList, setItemPicIdList] = useState([])
    const [itemUrlList, setItemUrlList] = useState([])
    console.log("itemUrlList", itemUrlList)

    let tempItemList = []
    let itemPicId = []
    let tempItemURL = []

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
                    picId: '',
                    url: ''
                }


                getDocs(query(collection(db, `items/${doc.id}/pictures`),
                    where('url', '!=', '')))
                    .then((querySnapshot) => {
                        // console.log("picIDSnapshot", querySnapshot)
                        querySnapshot.forEach((result) => {


                            picInfoObject['picId'] = result.id
                            picInfoObject['url'] = result.data().url

                            // console.log("pic Data URL", result.data().url)
                            // itemPicId.push(result.id)

                            // console.log("post Push Data", tempItemURL)




                            console.log("itemUrlList", itemUrlList)
                        }
                        )
                        tempItemURL.push(picInfoObject)
                        setItemUrlList([...tempItemURL])

                    }
                    )


            });
        })
    }, [])

    return itemUrlList

}

export default GetItemPics
