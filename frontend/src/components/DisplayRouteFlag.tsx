import React, { FC, ReactElement } from 'react'



type UrlProp = {

    url: string;

}

const DisplayRouteFlag: FC<UrlProp> = (props) => {

    return (

        <>
            <a href="#" className=" overflow-hidden flex 
                flex-col items-center rounded-lg  border 
                shadow-md md:flex-row
                 hover:bg-gray-100 
                dark:border-gray-700  
                dark:bg-gray-800 dark:hover:bg-gray-700">

                <img className=" rounded-t-lg 
                    md:h-auto md:w-48 md:rounded-none 
                    md:rounded-l-lg" src={props.url} alt=""
                />

            </a>



        </>

    )


}

export default DisplayRouteFlag;
