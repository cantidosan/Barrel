import React, { FC, useContext, useState } from 'react'
import profilepic from '../assets/images/profilepic.jpg'
import QrCode from './QrCode'
import RecipientSetupModal from './RecipientSetupModal'
import AuthContext from '../auth/authContext'
import { isSender } from './isSender'
///TODO THIS COMPONENT WILL NEED CONDITIONAL RENDERING
/// BASED ON COURIER OR SENDER VIEW TO HIDE QR CODE FOR e.g

//this component will accept the parcelId prop and perform its own fetch
//from the delivery table


const ParcelDeliveryInfo: FC = () => {

    const [userAuth, setUserAuth] = useState('false')
    const { user } = useContext(AuthContext);
    isSender(user).then(res => setUserAuth(res))
    console.log('valid', userAuth)
    return (

        <div className='mt-4 flex flex-col justify-center'>
            <div>
                <span className='m-1 text-left font-weight-200 text-white opacity-60 font-roboto'> Name:</span>
                <span className='text-left font-bold text-white'>Headphones</span><br />
            </div>
            <div className='mt-4'>
                <span className='m-1 text-left font-weight-200 text-white opacity-60 font-roboto' >Status:</span>
                <span className='text-left font-bold text-white'>  IN TRANSIT </span><br />
            </div>
            <div className='mt-4'>
                <span className='m-1 text-left font-weight-200 text-white opacity-60 font-roboto'>Route:</span>
                <span className='text-left font-bold text-white'>   USA PUR</span><br />
            </div>
            <div>
                <p className='m-1 text-white opacity-60 font-roboto'>QR CODE</p>
                {/* <img className="float-right mb-3  rounded-full shadow-lg "
                    src={profilepic} alt="QR Code" width="84" >
                </img> */}
                <button type="button"
                    data-modal-toggle="modal"
                    className={`${userAuth === 'true' ? '' : 'hidden'}`}>
                    <QrCode />
                </button>
                <div id="modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                        <RecipientSetupModal />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ParcelDeliveryInfo
