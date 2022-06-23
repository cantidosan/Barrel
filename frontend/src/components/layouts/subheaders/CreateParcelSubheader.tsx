import React from 'react'
import { useStateValue } from '../../../state/index'

function CreateParcelSubheader() {

    const [{ pageCount }, dispatch] = useStateValue();

    let title = 'Photos'

    if (pageCount === 1) {

        title = 'Item Details'
    } else if (pageCount === 2) {
        title = 'Size Info'
    }
    return (
        <h2 className='pt-3 flex justify-center 
        bg-barrel-green underline
        text-white font-hansief text-center'>{title}</h2>
    )
}

export default CreateParcelSubheader
