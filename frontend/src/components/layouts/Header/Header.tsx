import React, { ReactElement, FC, useEffect } from 'react'
import headerLogo from '../../../assets/images/headerLogo.png'
import { signInWithGoogle } from '../../../auth/SignInUser'
import HeaderMain from './HeaderMain'
import HeaderSearch from './HeaderSearch'
import HeaderSearchDate from './HeaderSearchDate'
import { useStateValue } from '../../../state/index'


const Header: FC<any> = (): ReactElement => {
    ///dimensions are h=110px w=vw
    /// icon left aligned
    /// create a navBarSearch component to be centered
    /// CTA text and user profile icon.
    const [{ headerState }, dispatch] = useStateValue();


    return (
        <>



            {headerState === '' ? <HeaderMain /> :
                headerState === '1' ? <HeaderSearch /> :
                    headerState === '3' ? <HeaderSearchDate /> : ''
            }

        </>
    )










}

export default Header;
