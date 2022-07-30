import React, { FC, useEffect ,useState, useContext} from 'react'
import { useStateValue } from '../state/index'
import { doc, getDoc,getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../FirebaseConfig";
import { initializeApp } from "firebase/app";
import AuthContext from '../auth/authContext'
import { getVolume } from './getVolume';
// THIS COMP NEEDS TO COMMUNICATE WITH THE PARCEL PICTURES
//COMPONENT FOR TO LISTEN FOR CLICK EVENTS TO UPDATE
//DYNAMICALY.
// THE TOTAL WEIGHT AND SPACE SHOULD BE THE AVAILABLE SPACE
// OF THE ROUTE

const BidDetails: FC = () => {

    ///THIS FUNCTION CONDITIONALLY RENDERS BASED ON THE STATE OF THE ROUTE
    let emptyBool = true

    const [{ itemList }, dispatch] = useStateValue();
    const [bidList, setBidList] = useState<any>([]);
    console.log(bidList)
    const { user } = useContext(AuthContext);

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    

    /// this is what item list could look like 
    ///", UHrXwvDZENiEZXd2fh9O, kEZguqEWmd3X4wToHgv5, lA0AF4Rr2y2ED9OnEAaU"
    ///", lA0AF4Rr2y2ED9OnEAaU"
    ///", UHrXwvDZENiEZXd2fh9O, kEZguqEWmd3X4wToHgv5"

    // console.log('itemList Array', JSON.stringify(itemList).replaceAll(',', ''))
    let newItemList = JSON.stringify(itemList).replaceAll(',', '')
    // console.log('newList', newItemList)
    let newerItemList = newItemList.split(' ',)
    // console.log('newList2', newerItemList.pop())

    const newItem  = newerItemList.pop() as string
    // const newItem2  = newItem?.trim() as string
    console.log('newItem',newItem.replaceAll('"','').trim())
    //create an array our of itemLIst then
    // console.log('newITem2', newItem2)
    
    let bidArraylist = [] as any


    useEffect(
        () => {
            if (!!newItem) {

                const docRef = doc(db, "items", newItem.replaceAll('"','').trim());
                getDoc(docRef).then(docSnap => {

                    if (docSnap.exists()) {
                                
                                
                        // console.log("Item Info Snapshot", docSnap.data())
                        
                        let bidDetailsObject = {

                            height:docSnap.data().height,
                            length:docSnap.data().length,
                            weight:docSnap.data().weight,
                            width:docSnap.data().width
                            
                        }     
                        
                        bidArraylist.push(bidDetailsObject)
                        setBidList([...bidList!, bidDetailsObject])
                        // console.log('bidarray',bidArraylist)
                        
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                })
            }
                    
                
        
        }, [newItem])

    
    
    let bidWeight = 0
    bidList.forEach((bid:any, key:any)=> {
            bidWeight += parseInt(bid['weight'])
    })
    
  
    
    const bidVolume = bidList.map((bid:any, key:any)=> {
            return getVolume(bid['height'],bid['width'],bid['length'])
    })
    // console.log('bidVolume', bidVolume)

    //code below calculates total bidVolume
    const initialValue = 0;
    const totalVolume = bidVolume.reduce(
    (previousValue:any, currentValue:any) => previousValue + currentValue,
    initialValue
    );
// extract each itemId from the itemList variable 

    return (
        <>
            {!!emptyBool ?
                <div className='flex flex-col p-3'>
                    <div className=''>
                        <span className='text-white font-thin opacity-80 font-roboto'>WEIGHT:</span><br />
                        <span className=' font-bold text-white'>{bidWeight}</span><br />
                    </div>
                    <div className=''>
                        <span className='text-white font-thin opacity-80 font-roboto'>SPACE:</span><br />
                        <span className=' font-bold text-white'>{totalVolume} </span><br />
                    </div>
                </div > : ''
            }
            {!!emptyBool ? '' :
                <div>
                    <div className='md:pt-4'>
                        <span className='text-white text-xs md:text-lg md:text-xl font-thin opacity-80 font-roboto underline pl-5'>WEIGHT:</span><br />

                        <span className='font-bold text-xs md:text-lg md:text-xl text-white '>TOTAL </span>
                        <span className='ml-3 font-bold text-xs md:text-lg md:text-xl text-white'>USED </span><br />
                        <span className='ml-2 font-bold text-xs md:text-lg md:text-xl text-white'>13 </span>

                        <span className='ml-8 font-bold text-xs md:text-lg md:text-xl text-lime-500'>8.5</span>
                        <span className=' ml-1 text-2xs  text-white opacity-60'>lbs</span>

                    </div>
                    <div className='md:pt-4'>
                        <span className='text-white text-xs md:text-lg md:text-xl font-thin opacity-80 font-roboto pl-5 underline'>SPACE:</span><br />
                        <span className='font-bold text-xs md:text-lg md:text-xl text-white '>TOTAL </span>
                        <span className='ml-3 font-bold text-xs md:text-lg md:text-xl text-white'>USED </span><br />
                        <span className='ml-2 font-bold text-xs md:text-lg md:text-xl text-white'>5 </span>

                        <span className='ml-8 font-bold text-xs md:text-lg md:text-xl text-lime-500'>2.5</span>
                        <span className=' ml-1 text-2xs  text-white opacity-60'>sqft</span>

                    </div>
                </div>
            }
        </>


    )
}

export default BidDetails
