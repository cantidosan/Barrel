import React, { FC, useContext,useState,useEffect } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import ParcelPictures from '../components/ParcelPictures'
import ParcelPicture from '../components/ParcelPicture'
import RouteFlag from '../components/RouteFlag'
import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'
import { isCourier } from '../components/isCourier'
import AuthContext from '../auth/authContext'
import { useNavigate } from 'react-router-dom'
import {
    getFirestore, addDoc, updateDoc,
    doc, getDocs, query,
    collection, where, getDoc
} from "firebase/firestore"; 
import { firebaseConfig } from "../FirebaseConfig";
import { initializeApp } from "firebase/app";
import { useParams } from 'react-router-dom'






//IMPORT FB LIBS/
//IMPORT PARAMS LIB
//USE GET ITEM HOOK FROM FB DB
//MAKE GET PICTURES HOOK FROM ITEMID DB
// RENDER PICTURES AND ITEM DETAILS

const ParcelDetailsPage: FC = () => {


    
    const { user } = useContext(AuthContext);
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    let { parcel_id } = useParams();
    let navigate = useNavigate();

    const [parcelHeight, setParcelHeight] = useState<number>(0);
    const [parcelLength, setParcelLength] = useState<number>(0);
    const [parcelWidth, setParcelWidth] = useState<number>(0);
    const [parcelWeight, setParcelWeight] = useState('');
    const [parcelName, setParcelName] = useState('');
    const [picId, setPicId] = useState('');
    const [picUrl, setPicUrl] = useState('');


    console.log( parcelName)
    console.log( parcelHeight)
    console.log( parcelLength)
    console.log( parcelWeight)
    console.log( parcelWidth)
    console.log( picId)
    console.log( picUrl)




    ///CODE BELOW LIMITS  ACCESS TO SENDER  SOLELY
    if (!user) {

        navigate("/");

    }
    useEffect(() => {
        
        const docRef = doc(db, "items", parcel_id as string);
    
        getDoc(docRef).then(docSnap => {

            if (docSnap.exists()) {
                
                setParcelWeight(docSnap.data().weight)
                setParcelHeight(docSnap.data().height)
                setParcelWidth(docSnap.data().width)
                setParcelLength(docSnap.data().length)
                setParcelName(docSnap.data().name)
                console.log("Item Info Snapshot", docSnap.data())
                    

                } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                }
        })
        
    }, [picId])

    useEffect(() => {
        //change the way you obtain the queryDocumentSnapshot
        //to see if that will allow ForEach to map through 
        //the documents and get the ID and place it in state
        getDocs(query(collection(db,`items/${parcel_id}/pictures`),
        where('height_capacity', '>=', '0')
        )).then((querySnapshot) => {

            querySnapshot.forEach(queryDocumentSnapshot =>
            {     
                
                    setPicId(queryDocumentSnapshot.id)
                    console.log(queryDocumentSnapshot.data())
                
            })
        })

    }, [parcel_id])


    useEffect(() => {

        if(!!picId){
        console.log('picID', picId)
            
        let locationRef = doc(db, "items", parcel_id as string, "pictures", picId);
        console.log('location reference',locationRef)
        getDoc(locationRef).then(docSnap => {


            if (docSnap.exists()) {
    
                console.log("pic Url Snapshot ", docSnap.data());
    
                setPicUrl(docSnap.data().url)
               
    
                } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                }
            
        })
    }
    
    },[picId])

    let volume = (parcelHeight * parcelLength * parcelWidth)
  
    

    return (
        <PageLayout>

            <div className='bg-barrel-green'>
                <div className='flex  flex-col  bg-barrel-green items-center  '>
                    <div className='flex  m-12 gap-8 '>
                        <RouteFlag url={picUrl} />
                        <div className='flex flex-col justify-between '>
                            <div className='mt-1'>
                                <span className=' text-xs font-thin text-white opacity-80 font-weight-200'>Name:</span><br />
                                <span className='text-sm font-wrap font-thin text-white'>{parcelName} </span><br />
                            </div>
                            <div className='mt-1'>
                                <span className='text-xs font-thin text-white opacity-80 font-weight-200'>Weight:</span><br />
                                <span className='text-right text-sm font-thin text-white'>{parcelWeight}</span><br />
                            </div>
                            <div className='mt-1'>
                                <span className='m-1 text-xs font-thin text-white opacity-80 font-weight-200'>Space</span><br />
                                <span className='text-lg  text-sm font-thin text-white '>{volume}  </span><br />
                            </div>
                        </div>

                    </div>
                    <div className='w-74  flex'>
                        <ParcelPictures />
                    </div>
                    <div className='flex gap-6  m-12 w-22 '>
                        <div className=' basis-1/2 pt-16 border-r-2 pr-2 '>
                            <button type="submit" className="inline-flex items-center 
                                py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700
                                rounded-lg focus:ring-4 focus:ring-blue-200 
                                dark:focus:ring-blue-900 hover:bg-blue-800"
                            >
                                BACK

                            </button>
                        </div>
                        <div className='flex basis-1/2'>
                            <div className='flex flex-col justify-around '>
                                <div className='mt-1'>
                                    <span className='underline text-white text-sm font-bold opacity-60 font-weight-200'>Sender Name:</span><br />
                                    <span className='text-right text-lg font-bold text-white mr-1'>Jane Doe</span>
                                </div>
                                <div className='mt-1'>
                                    <span className='m-1 underline text-white text-sm font-bold opacity-60 font-weight-200'>Recipient Name:</span><br />
                                    <span className='text-right font-bold text-white text-lg '> John Doe</span>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </PageLayout>
    )
}

export default ParcelDetailsPage
