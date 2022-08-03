import React, { FC, useState,useContext } from 'react'
import ParcelPictures from './ParcelPictures'
import { useStateValue } from '../state/index'
import AuthContext from '../auth/authContext'
import UploadImage from './UploadImage'
import ParcelDetailsUpdate from './ParcelDetailsUpdate'
import ParcelInputUpdate from './ParcelInputUpdate'
import { useParams } from 'react-router-dom'
import NewItemButton from '../buttons/NewItemButton'


const HandleParcelPictures = () => {

    
    const { user } = useContext(AuthContext);
    const [{ pageCount }, dispatch] = useStateValue();
    let {parcel_id} = useParams();
    

    //ParcelUrls will contain all editable items tied to the sender account
    //On click it should update the DOM to show editable details of the active item

    const [parcelUrls, setParcelUrls] = useState<any | null>(null);

    
    
 

    return (
        <>
            {pageCount === 0 ?
                <ParcelInputUpdate itemId={parcel_id!} />
                    
                                   
                 : pageCount === 1 ? <ParcelDetailsUpdate itemId={parcel_id!} /> :<div className='flex  justify-center pt-6 bg-barrel-green'> <UploadImage /> </div>
            }
            
            {!!user ?
                <div className='flex justify-center bg-barrel-green '>
                    <ParcelPictures userId={user.uid} />
                    <NewItemButton/>
                </div>:''
            }
        </>
    )
}

export default HandleParcelPictures
