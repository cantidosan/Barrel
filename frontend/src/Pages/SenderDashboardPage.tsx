import React, { FC,useEffect,useContext,useState } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import ParcelDeliveryDetails from '../components/ParcelDeliveryDetails'
import ActiveBids from '../components/ActiveBids'
import DeliveryUpdates from '../components/DeliveryUpdates'
import ParcelPictures from '../components/ParcelPictures'
import AuthContext from '../auth/authContext'
import {useParams} from 'react-router-dom'
import {
    getFirestore, addDoc, updateDoc,
    doc, getDocs, query,
    collection, where, getDoc
} from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../FirebaseConfig";

const SenderDashboardPage: FC = () => {

    // const url = [prflag, americanflag]
    let { user_id } = useParams();
    const { user } = useContext(AuthContext);
    const [bidItemList, setBidItemList] = useState<any>([]);
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    console.log(user)
//take userId from params and
//get bidId then query item list and routeID and store in local state var
//use routeId  to query routeInfo
    
useEffect(() =>
{
    if (user) {
        const pendingBidsQuery = query(collection(db, "bids"), where("senderId", "==", user.uid));
        getDocs(pendingBidsQuery).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            
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
                        setBidItemList([bidObject])
                    })
            
            })
        })
    }
        
},[user])  

    return (
        <PageLayout>
            <div className='bg-barrel-green'>
                <main className=''>
                    <section className='flex justify-center '>
                        {/* this pulls data from the delivery table */}
                        <ParcelDeliveryDetails />
                    </section>
                    <section className='flex justify-center  mt-8'>
                        {!!user ? <ParcelPictures userId={user.uid} />:''}
                    </section>
                    <section className='flex flex-col px-3 
                        md:flex-row  gap-4 md:gap-4 justify-center
                        mt-8'
                    >
                        <div className='md:w-32'>
                            <DeliveryUpdates />
                        </div>
                        <div className='opacity-70 hover:opacity-100  '>
                            <span className='font-bold text-white opacity-100'
                            >
                                MANAGE BIDS
                            </span>
                            {/* We need to pass a prop to this containing
                            links to active bids */}
                            
                            {bidItemList.map((bidDetail: any,
                                key: any
                            ) => {
                                    
                                return <ActiveBids
                                    bidId={bidDetail['bidId']}
                                    amount={bidDetail['amount']}
                                    courierId={bidDetail['courierId']}
                                    status={bidDetail['status']}
                                    senderId={bidDetail['senderId']}
                                    routeId={bidDetail['routeId']}
                                    bidItems={bidDetail['bidItems']}
                                />
                            }
                        )}
                        </div>
                    </section>
                </main>
            </div>
        </PageLayout>
    )
}

export default SenderDashboardPage
