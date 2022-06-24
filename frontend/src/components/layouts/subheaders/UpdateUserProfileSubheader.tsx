import React, { FC } from 'react'
import { useStateValue } from '../../../state/index'

const UpdateUserProfileSubheader: FC = () => {
    const [{ pageCount }, dispatch] = useStateValue();

    let title = 'Profile Info'

    if (pageCount === 1) {

        title = 'Profile Photo'
    } else if (pageCount === 2) {
        title = 'Passport Photo'
    }
    return (
        <h2 className='pt-3 flex justify-center 
        bg-barrel-green underline
        text-white font-hansief text-center'>{title}</h2>

    )

}

export default UpdateUserProfileSubheader
