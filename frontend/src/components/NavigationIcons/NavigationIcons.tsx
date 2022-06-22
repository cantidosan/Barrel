import React, { FC } from 'react'
import NavIcon100 from './NavIcon100'
import NavIcon33 from './NavIcon33'
import NavIcon66 from './NavIcon66'
import { useStateValue } from '../../state/index';



const NavigationIcons: FC = () => {
    const [{ pageCount }, dispatch] = useStateValue();

    return (
        <>

            {

                pageCount === 0 ? <NavIcon33 /> : pageCount === 1 ? <NavIcon66 /> : <NavIcon100 />


            }


        </>
    )
}

export default NavigationIcons
