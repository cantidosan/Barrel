import React, { FC } from 'react'
import { useStateValue } from '../../../state/index'


const CreateRouteSubheader: FC = () => {

    const [{ pageCount }, dispatch] = useStateValue();

    let title = 'CREATE ROUTE'

    if (pageCount === 1) {

        title = 'EXCHANGE DETAILS'
    } else if (pageCount === 2) {
        title = 'LUGGAGE DETAILS'
    }

    return (
        <h2 className=" pt-3 flex justify-center 
        bg-barrel-green underline
        text-white font-hansief text-center"
        >{title} </h2>
    )
}

export default CreateRouteSubheader
