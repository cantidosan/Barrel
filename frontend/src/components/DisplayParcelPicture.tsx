import React, { FC, useState } from 'react'
import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'
import { useStateValue } from '../state/index'

//this component accepts a parcel object

const DisplayParcelPicture: FC = () => {

    const [selectedImage, setSelectedImage] = useState<any | null>(null);

    const [{ parcelId }, dispatch] = useStateValue();

    const handleSelect = () => {

        // Place the object information inside the
        //state variable and lift it up to SENDER dashboard page
        //the pass it down one level to Parcel Delivery Details
        // setSelectedImage()
        dispatch({ type: 'parcelId', payload: selectedImage });



    }
    const url = [prflag, americanflag]

    return (
        <div>
            <a href="#" className=" flex flex-col 
                items-center rounded-lg
                border bg-gray-300"
                onClick={handleSelect}
            >

                <img className="opacity-80 object-cover 
                    w-full  rounded-t-lg 
                    w-14 md:rounded-none 
                    md:rounded-l-lg hover:opacity-100
                    hover:bg-green-600 active:bg-green-700 
                     "
                    src={url[1]}
                    alt=""
                />

            </a>
        </div>
    )
}

export default DisplayParcelPicture
