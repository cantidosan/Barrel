import React, { ReactElement, FC } from 'react'
import headerLogo from '../../../assets/images/headerLogo.png'
import { signInWithGoogle } from '../../../auth/SignInUser'
import HeaderMain from './HeaderMain'
import HeaderSearch from './HeaderSearch'

//TODO FIEN TUNE THE HEADER STYLING
//TODO ACCURATLEY FILL IN USER PROFILE SPOT THEN REFACTOR FOR REUSABILITY
//TODO ADD SEARCH ICON TO HEADER

const Header: FC<any> = (): ReactElement => {
    ///dimensions are h=110px w=vw
    /// icon left aligned
    /// create a navBarSearch component to be centered
    /// CTA text and user profile icon.

    let valid = true



    return (
        <>
            {valid ? <HeaderSearch /> : <HeaderMain />}
        </>
    )










}

export default Header;
