import React, { FC } from 'react'
import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'


const DisplayParcelPicture: FC = () => {


    const url = [prflag, americanflag]

    return (
        <div>
            <a href="#" className="  flex flex-col 
                items-center rounded-lg  border bg-gray-300">

                <img className="object-cover w-full  rounded-t-lg 
                    w-14 md:rounded-none md:rounded-l-lg"
                    src={url[1]} alt=""
                />

            </a>
        </div>
    )
}

export default DisplayParcelPicture
