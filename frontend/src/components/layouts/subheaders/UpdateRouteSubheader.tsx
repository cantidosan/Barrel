import React, { FC } from 'react'
import { useStateValue } from '../../../state/index'


const UpdateRouteSubheader: FC = () => {

    const [{ pageCount }, dispatch] = useStateValue();

    let title = 'UPDATE ROUTE'

    if (pageCount === 1) {

        title = 'UPDATE EXCHANGE DETAILS'
    } else if (pageCount === 2) {

        title = 'UPDATE LUGGAGE DETAILS'
    }

    return (
        <h2 className=" pt-3 flex justify-center 
        bg-barrel-green underline
        text-white font-roboto text-center"
        >{title} </h2>
    )

}
export default UpdateRouteSubheader
