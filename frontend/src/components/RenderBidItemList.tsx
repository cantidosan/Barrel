import React, { FC,useState,useContext,useEffect } from 'react'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";
import {
    getFirestore, addDoc, updateDoc,
    doc, getDocs, query,
    collection, where, getDoc
} from "firebase/firestore"; 
import AuthContext from '../auth/authContext'

interface userProp{
  userId:string,
}
  

const RenderBidItemList: FC<userProp> = (props: userProp) => {
  const { userId } = props
  const { user } = useContext(AuthContext);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [bidItemList, setBidItemList] = useState<any>([])
  const [itemUrl, setItemUrl] = useState<any>('')

  
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
                            // console.log('biditems',bidObject['bidItems'])
                            bidArray.push(bidObject)
                            setBidItemList([...bidArray])
                        })
                
                })
            }).then(() => {
              let activeBidArray = [] as any
              bidItemList?.map((url: any, key: any) => { 
                activeBidArray.push(url['bidItems'])
              })
              
              let finalBidList = activeBidArray.join().replaceAll(',', '')
              
              return (finalBidList.trim().split(/\s+/))

            }).then((stringArray) => {
              let urlArray = [] as any
              stringArray.forEach((itemId: string) => {
               
                console.log('itemID',itemId)
                if(itemId !== ''){
                  const docRef = doc(db, "items", itemId as string);
              
                  getDoc(docRef).then(docSnap => {
              
                      if (docSnap.exists()) {
                         console.log('URL SETTING',docSnap.data())
                          
                         getDocs(query(collection(db, `items/${itemId}/pictures`),
                         where('url', '!=', '')))
                         .then((querySnapshot) => {
                             // console.log("picIDSnapshot", querySnapshot)
                             querySnapshot.forEach((result) => {
                                urlArray.push(result.data().url)
                                setItemUrl([...urlArray])
                             
                             }
                             )
              
                         }
                      )
              
                          console.log("Document data: critical", docSnap.data())
                              ;
              
                          } else {
                          // doc.data() will be undefined in this case
                          console.log("No such document!");
                          }
                  })
              }
            })
           

               
              })  
        }
        
            
  }, [user])  
  
    


  
  
  // let stringArray = finalBidList.split(/\s+/);
  
  // const  results = stringArray.filter(e as any => 
  //   return e
  // );
    
  // console.log('joined', stringArray)
  
  return (
    <div className='box-content p-4 
             bg-gray-600 rounded-lg  '
         >
            <div className='flex flex-column gap-4'
            >    
                {

                    // bidItemList.map((url: any, key: any) => {
                    //     console.log('url',url)
                        // return <ParcelPicture url={url['url']}
                        //     picId={url['picId']}
                        //     itemId={url['itemId']}
                        //     key={url['picId']} />
                    // })  
                }
              
             </div>

        </div>
  )


}

export default RenderBidItemList
