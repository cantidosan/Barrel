import React, { FC, ReactElement } from 'react'
import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'



const DisplayParcelPictures: FC = (props) => {


    const url = [prflag, americanflag]


    return (
        <div className='box-content h-18 w-46 p-4 border-4  '>
            <div className='flex flex-column gap-4'>

                <a href="#" className="  flex flex-col 
                    items-center rounded-lg  border shadow-md 
                    hover:bg-white-100 dark:border-gray-700  
                    dark:bg-gray-800 dark:hover:bg-gray-700">

                    <img className="object-cover w-full  rounded-t-lg 
                         md:w-14 md:rounded-none md:rounded-l-lg"
                        src={url[1]} alt=""
                    />

                </a>

                <a href="#" className="  flex flex-col 
                    items-center rounded-lg  border shadow-md 
                    hover:bg-gray-100 dark:border-gray-700  
                    dark:bg-gray-800 dark:hover:bg-gray-700">

                    <img className="object-cover w-full  rounded-t-lg 
                         md:w-14 md:rounded-none md:rounded-l-lg"
                        src={url[0]} alt=""
                    />

                </a>
                <a href="#" className="  flex flex-col 
                    items-center rounded-lg  border shadow-md 
                    hover:bg-gray-100 dark:border-gray-700  
                    dark:bg-gray-800 dark:hover:bg-gray-700">

                    <img className="object-cover w-full  rounded-t-lg 
                         md:w-14 md:rounded-none md:rounded-l-lg"
                        src={url[1]} alt=""
                    />

                </a>

                <a href="#" className="  flex flex-col 
                    items-center rounded-lg  border shadow-md 
                    hover:bg-gray-100 dark:border-gray-700  
                    dark:bg-gray-800 dark:hover:bg-gray-700">

                    <img className="object-cover w-full  rounded-t-lg 
                         md:w-14 md:rounded-none md:rounded-l-lg"
                        src={url[0]} alt=""
                    />

                </a>




            </div>

        </div>
    )
}

export default DisplayParcelPictures
