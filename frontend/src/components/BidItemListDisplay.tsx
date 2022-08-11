import React, { FC,useState,useContext,useEffect } from 'react'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";
import {
    getFirestore, addDoc, updateDoc,
    doc, getDocs, query,
    collection, where, getDoc
} from "firebase/firestore"; 
import AuthContext from '../auth/authContext'
import UrlConvert from './UrlConvert'
import ParcelPicture from './ParcelPicture'
import getParcelUrl from '../hooks/GetParcelUrl'
import GetBidItems from '../hooks/GetBidItems'

interface userProp{
  userId:string,
}
  

const BidItemListDisplay: FC<userProp> = (props: userProp) => {

  const { userId } = props
  const { user } = useContext(AuthContext);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [bidItemList, setBidItemList] = useState<any>([])
  const [itemUrl, setItemUrl] = useState<any>([{}])
  const [bidItemUrlMap, setBidItemUrlMap] = useState<any>({})
  
  console.log(itemUrl)
  console.log(bidItemList)
  console.log('BIDITEMURLMAP',bidItemUrlMap)
  
  useEffect(() => {

    let bidArray = [] as any

    if (user) {
      const pendingBidsQuery = query(collection(db, "bids"), where("courierId", "==", user.uid));
      getDocs(pendingBidsQuery)
        .then((querySnapshot) => {
            
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
                // console.log('awe', bidObject)
                bidArray.push(bidObject)
                // setBidItemList([...bidArray])
                return bidArray
              }).then((bidArray) => {

                    
                const bidItemLists = bidArray.map((bid: any, key: any) => {

                  let idElement = bid['bidItems'].toString().replaceAll('"', '').replaceAll(',', '')
            
                  let finalBidItemList = idElement.split(' ')
                  finalBidItemList.shift()
                  return {
                    bidId: bid.bidId,
                    bidItems: finalBidItemList
                  }
                })
                return bidItemLists
                // console.log("newArray", newArray)
                //bid Object { bidId: "hrZCZSbuTNAaIrevMvAm", amount: "20.19"
                //, courierId: "fvMlFKlXfbO1BSI5GMB746PRaDB2", status: "active",
                //  senderId: "XMSsrVJH00hOOmzrz0hs0zmUB7s2", routeId: "JIPobebM4tl3fzcWHNah",
                //  bidItems: Array [ ", UHrXwvDZENiEZXd2fh9O, kEZguqEWmd3X4wToHgv5" ]
              
                // {
                //   itemId: {
                //     itemUrls:[]
                //   }
                //   itemId: {
                //     itemUrls:[]
                //   }
                // } 

                // 0:{itemId:[urls]}

              }).then((bidArray) => {
                //0: Object { bidId: "hrZCZSbuTNAaIrevMvAm", bidItems: (2) […] }
                // 1: Object { bidId: "y0vnj7soXD48oz5l9Cw0", bidItems: (1) […] }
                // bidCollection (explicit keys)

                  // [
                  //   {
                  //     id: 'sdlkfj___bidId___dfkljsdlfj',
                  //     items: [
                  //       {
                  //         id: 'fsdlkfs___itemId___sldkjf',
                  //         urls: [
                  //           'http://imageurl...',
                  //           'http://imageurl...',
                  //           // ...
                  //         ],
                  //       },
                  //       // ...
                  //     ],
                  //   },
                  //   // ...
                  // ]
                
                
                const updateBidItemsList = bidArray.map((bid: any, key: any) => {

                  let bidObject = [{

                    id: '',
                    items: [
                            {
                              id: '',
                              urls: [
                                
                                // ...
                              ],
                            },
                            // ...
                          ],
                    
                  }] as any

                  //  console.log('bidID print', bid['bidId'])
                  bidObject[0]['id'] = bid['bidId']
                  // console.log('ID',bidObject[0]['items'][0])
                  // console.log('bid daddy object',bidObject)
                //  bidObject['items'].id = bid['bidItems']   // Array [ " UHrXwvDZENiEZXd2fh9O, kEZguqEWmd3X4wToHgv5" ]
                  bid['bidItems'].map((item : any,key : any ) => {
                    // bidObject[0]['items']['id'].push(item)
                    bidObject[0]['items'][0]['id']= item
                    
                  })
                  // console.log('ID',bidObject[0]['items'][0])


                  // console.log('bid daddy object',bidObject)
                  bid['bidItems'].map((itemId: any, key: any) => {
                     ////
                    // console.log('item inside map',itemId)
                     getDocs(query(collection(db, `items/${itemId}/pictures`),
                     where('url', '!=', '')))
                     .then((querySnapshot) => {
                         // console.log("picIDSnapshot", querySnapshot)
                         let newUrlList =[] as any
                         querySnapshot.forEach((result) => {
                            //  setItemUrl(result.data().url)
                            newUrlList.push(result.data().url)
                         })
                       bidObject[0]['items'][0]['urls'].push(newUrlList)
                      //  console.log('final OBject', bidObject[0]['items'][0]['urls'])
                       
                       // 1: Object { bidId: "y0vnj7soXD48oz5l9Cw0",
                      //bidItems: (1)[…]
                      //bidUrls:(1)[...]
                       setBidItemUrlMap({ ...bidItemUrlMap, bidObject })
                    })
                    /////
                  })
                      
                })
                
                return updateBidItemsList
              })//then
            
          })//forEach
        })
    
            
    
    }
  }, [userId])  

//then
            //     let bidArray = [] as any
            //     bidItemLists.map((bidInfo: any, key: any) => {
            //       let bidObj = {
            //         bidId: '',
            //         itemArray: [] as any,
            //         urlArray: [] as any
            //       }
            //       /// bidInfo['bidItems'] looks like this => [", lA0AF4Rr2y2ED9OnEAaU"]
            //       // let bidInfo['bidItems'] = bidInfo['bidItems'].split(/\s+/)
            //       // console.log('string array', stringArray)
            //       let idElement = bidInfo['bidItems'].toString().replaceAll('"', '').replaceAll(',', '')
            
            //       let finalItemList = idElement.split(' ')
            //       finalItemList.shift()
          //       console.log('idElEMENT',idElement)
            //       //  console.log(bidInfo['bidItems'].split(/\s+/))
                  
            //       console.log('final List',finalItemList)

            //       // bidObj.itemArray.push(bidInfo['bidItems'])
            //       bidObj.itemArray.push(finalItemList)
            //       bidObj.bidId = bidInfo['bidId']
            //       bidArray.push(bidObj)
            //     })
            //     setItemUrl([...bidArray])
            //     return itemUrl
            //   })
            //   .then((itemUrl) => {
            //     console.log(itemUrl)
            //     //itemUrl has 0: {bidId: "hrZCZSbuTNAaIrevMvAm", itemArray: Array(1)…}
            //     itemUrl.map((bidInfo: any, key: any) => {
                  
                
            //       // let itemList = UrlConvert(bidInfo['itemArray'])
            //       console.log('itList', bidInfo['itemArray'])

            //       bidInfo['itemArray'].map((itemId:any,key:any) => {
                    
            //          let bidItemUrl = getParcelUrl(itemId)

            //       })

            //     })
              // })
           
              
          
            // fetch('url').then((res) => {
            //   const thing = res.something; return { thing };
            // }).then((data) => {
            //   // thing now is part of data because you returned it console.log(data);
            // })
    

  
  return (
    <div className='box-content p-4 
             bg-gray-600 rounded-lg  '
         >
            <div className='flex flex-column gap-4'
            >    
                {

                    bidItemUrlMap['bidObject'].map((url: any, key: any) => {
                      // console.log('url', url)
                    
                        return <ParcelPicture url={url['items'][0]['urls'][0]}
                            picId={url['picId']}
                            itemId={url['items']}
                            key={url['picId']} />
                    })  
                }
              
             </div>

        </div>
  )


}

export default BidItemListDisplay
