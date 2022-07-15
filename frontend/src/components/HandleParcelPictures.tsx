import React, { FC, useState,useContext } from 'react'
import americanflag from '../assets/images/americanflag.png'
import prflag from '../assets/images/prflag.png'
import ParcelPictures from './ParcelPictures'
import { useStateValue } from '../state/index'
import InputParcelInfo from './InputParcelInfo'
import InputParcelDetails from './InputParcelDetails'
import AuthContext from '../auth/authContext'
import UploadImage from './UploadImage'


const HandleParcelPictures = () => {

    const url = [prflag, americanflag]
    const { user } = useContext(AuthContext);
    const [{ pageCount }, dispatch] = useStateValue();

    //ParcelUrls will contain all editable items tied to the sender account
    //On click it should update the DOM to show editable details of the active item

    const [parcelUrls, setParcelUrls] = useState<any | null>(null);;

    const nextPage = () => {
        dispatch({ type: 'pageCount', payload: pageCount+1 });
    }
    const prevPage = () => {
        dispatch({ type: 'pageCount', payload: pageCount -1 });
    }


    return (
        <>

            {pageCount === 0 ?
                <section className=''>
                    {/* <div className='flex justify-center bg-barrel-green'>


                        <figure className='flex ' >
                            <img className=" 
                    block object-fit 
                    object-center  rounded-lg"
                                src={url[1]} alt="" width="154"
                            />

                        </figure>


                    </div > */}
                    <div className='flex  justify-center pt-6 bg-barrel-green'>
                    <UploadImage />
                    </div>
                    {/* <div className='flex justify-center bg-barrel-green '>
                        <ParcelPictures />
                    </div> */}
                </section > : pageCount === 1 ? <InputParcelInfo userId={user?.uid} /> : <InputParcelDetails />
            }
            
            <div className='flex justify-center bg-barrel-green '>
                <ParcelPictures />
            </div>
        </>
    )
}

export default HandleParcelPictures
