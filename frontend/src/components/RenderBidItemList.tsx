import React, { FC,useState,useContext,useEffect } from 'react'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";
import {
    getFirestore, addDoc, updateDoc,
    doc, getDocs, query,
    collection, where, getDoc
} from "firebase/firestore"; 
import AuthContext from '../auth/authContext'
import UrlConvert from '../components/UrlConvert'
import ParcelPicture from './ParcelPicture'

interface userProp{
  userId:string,
}
  

const RenderBidItemList: FC<userProp> = (props: userProp) => {
  const { userId } = props
  const { user } = useContext(AuthContext);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [bidItemList, setBidItemList] = useState<any>([])
  const [itemUrl, setItemUrl] = useState<any>([{}])
  console.log(itemUrl)
  console.log(bidItemList)

  
  useEffect(() => {

    let bidArray = [] as any

        if (user) {
            const pendingBidsQuery = query(collection(db, "bids"), where("courierId", "==", user.uid));
          getDocs(pendingBidsQuery).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              // console.log(doc.id, " => ", doc.data());
                
              let bidObject =
                {

                  bidId: doc.id,
                  amount: doc.data().amount,
                  courierId: doc.data().courierId,
                  status: doc.data().status,
                  senderId: doc.data().senderId,
                  routeId: doc.data().routeId,
                  bidItems: []
                } as any

              getDocs(query(collection(db, `bids/${doc.id}/bidItems`),
                where('itemList', '!=', '0')))
                .then((bidItemQuerySnapshot) => {

                  bidItemQuerySnapshot.forEach((queryDocumentSnapshot) => {

                    bidObject['bidItems'].push(queryDocumentSnapshot.data().itemList)

                  })
                  console.log('BIDARRAY',bidObject)
                  bidArray.push(bidObject)
                  setBidItemList([...bidArray])
                })
                
            })
          })
            .then(() => {

              let bidArray = [] as any
              bidItemList.map((bidInfo: any, key: any) => {
                let bidObj = {
                  bidId: '',
                  itemArray: [] as any,
                  urlArray: [] as any
                }
                
                // let stringArray = bidInfo['bidItems'].split(/\s+/)
                // console.log('string array', stringArray)
                bidObj.itemArray.push(bidInfo['bidItems'])
                bidObj.bidId = bidInfo['bidId']
                bidArray.push(bidObj)
              })
              setItemUrl([...bidArray])

            })
            // .then(() => {
            //   itemUrl.map((bidInfo: any, key: any) => {
              
            //     let itemList = UrlConvert(bidInfo['itemArray'])
            //     console.log('itList', itemList)
            //   })
            // })
           
              
        }
        
        //  console.log('bidItemslist',bidItemList)   
  }, [userId])  

  // let stringArray = finalBidList.split(/\s+/);
  
  // const  results = stringArray.filter(e as any => 
  //   return e
  // );
    

  
  return (
    <div className='box-content p-4 
             bg-gray-600 rounded-lg  '
         >
            <div className='flex flex-column gap-4'
            >    
                {/* {

                    bidItemList.map((url: any, key: any) => {
                        console.log('url',url)
                        return <ParcelPicture url={url['url']}
                            picId={url['picId']}
                            itemId={url['itemId']}
                            key={url['picId']} />
                    })  
                } */}
              
             </div>

        </div>
  )


}

export default RenderBidItemList
