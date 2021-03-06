import React, { useState, useContext, useEffect } from 'react'
import SignInModal from '../../SignInModal'
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import AuthContext from '../../../auth/authContext'

function HeaderUserProfile() {

    const auth = getAuth();
    const [currentUserEmail, setCurrentUserEmail] = useState('');
    const [currentUsername, setCurrentUsername] = useState('');

    let navigate = useNavigate();
    const { user } = useContext(AuthContext);

    

    const handleSignout = () => {

        signOut(auth).then(() => {
            window.location.reload()
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    useEffect(() => {
            setCurrentUserEmail(user?.email as string)
            setCurrentUsername(user?.displayName as string)
    },[user])

    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/firebase.User
    //         setCurrentUserEmail(user.email as string)
    //         setCurrentUsername(user.displayName as string)


    //         // ...
    //     } else {
    //         // User is signed out
    //         // ...
    //     }
    // });

    return (
        <div className="flex items-center md:order-2">
            <button type="button" data-modal-toggle="defaultModal"
                className='mr-10 font-hansief text-gray-100'
            >Login/SignUp
            </button >
            <div id="defaultModal" tabIndex={-1} aria-hidden="true"
                className="hidden overflow-y-auto 
                overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0
                h-modal md:h-full">
                <div className="relative p-4 w-full max-w-2xl h-full ">
                    <SignInModal />
                </div>
            </div>

            <button type="button"
                className={`flex mr-3 text-sm ${user ? '' : 'hidden'} bg-gray-800 
                    rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600`}
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
            >
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full"
                    src="/docs/images/people/profile-picture-3.jpg"
                    alt="user pic " />
            </button> : ''


            <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100
                        shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown">

                <div className="py-3 px-4">
                    <span className="block text-sm text-gray-900 dark:text-white">{!!currentUsername ? currentUsername : 'Jane Doe'}</span>
                    <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{!!currentUserEmail ? currentUserEmail : 'JDoe@email.com'}</span>
                </div>
                <ul className="py-1" id="dropdown" aria-labelledby='dropdown'>
                    <li>
                        <a href="#"
                            className="block py-2 px-4 text-sm text-gray-700 
                                hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200
                                 dark:hover:text-white"
                            onClick={e => navigate('/dashboard/courier/:user_id')}

                        >
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100
                                    dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            Settings
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 
                                    dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            Earnings
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            className="block py-2 px-4 text-sm text-gray-700
                            hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200
                            dark:hover:text-white"
                            onClick={e => handleSignout()}
                        >
                            Sign out
                        </a>
                    </li>
                </ul>
            </div>

            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex 
                        items-center p-2 ml-1 text-sm text-gray-500 rounded-lg 
                        md:hidden hover:bg-gray-100 focus:outline-none 
                        focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
                        dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2" aria-expanded="false"
            >
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>

        </div>
    )
}

export default HeaderUserProfile
