import React, { FC,useState,useContext } from 'react'
import { useStateValue } from '../state/index'
import AuthContext from '../auth/authContext'
import { doc, addDoc,collection, getFirestore } from "firebase/firestore"
import { firebaseConfig } from "../FirebaseConfig"
import { initializeApp } from "firebase/app";
import { useParams,useNavigate } from 'react-router-dom'
//this component will take user input for the bid dollar amount
// once the user clicks bid we should create a bid object to
//send to the DB that will include the bid dollar amount and senderId




interface courierProp  {

    
    courierId:string
   

}

const MakeBid: FC<courierProp> = (props:courierProp) => {

    const { courierId } = props
    
    const [bidAmount, setBidAmount] = useState('')

    const [{ itemList }, dispatch] = useStateValue();
    const { user } = useContext(AuthContext);
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    let { route_id } = useParams();
    let navigate = useNavigate()
    let newItemList = JSON.stringify(itemList).replaceAll(',', '')
    // console.log('newList', newItemList)
    let newerItemList = newItemList.split(' ',)
    // console.log('newList2', newerItemList.pop())

    const newItem  = newerItemList.pop() as string
    // const newItem2  = newItem?.trim() as string
    console.log('newItem', newItem.replaceAll('"', '').trim())
    


    const handleClick = async () => {

        const docRef = await addDoc(collection(db, "bids"), {
            amount: bidAmount,
            routeId: route_id,
            senderId: user.uid,
            status: 'active',
            courierId:courierId
        });

        //add itemLIst to docref's subcollection
        let bidItemsRef = collection(db, "bids", docRef.id as string, "bidItems");
        await addDoc(bidItemsRef, {itemList})
        navigate(`/dashboard/sender/${user.uid}`)
        
    }
    
    return (
        <div className='basis-1/2  '>
            <div className=''>
                <div className='flex px-2 pt-4 text-3xl font-bold 
                justify-center text-white'>
                    <label htmlFor="item_length" className="block mb-2 text-md font-medium text-white dark:text-white pr-2">$</label>
                    <input type="text" id="item_length" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder='419.99' required
                        onChange={(ev)=>setBidAmount(ev.target.value)}
                    />
                  
                </div>
            </div>

            
            <div className='flex justify-center mt-3'>
                <button type="button"
                    className="basis-1/2 text-white-500 bg-gradient-to-r 
                    from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br
                    focus:ring-4 focus:outline-none focus:ring-cyan-300
                    dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 
                    dark:shadow-lg dark:shadow-cyan-800/80 font-bold rounded-lg 
                   text-sm px-2.5 py-2.5 text-center  mb-2"
                    onClick={handleClick}
                >
                    BID
                </button>
            </div>


        </div>
    )
}

export default MakeBid
