import React, { FC, useState, useContext } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import CreateParcelSubheader from '../components/layouts/subheaders/CreateParcelSubheader'
import NavigationIcons from '../components/NavigationIcons/NavigationIcons'
import HandleParcelPictures from '../components/HandleParcelPictures'
import { isSender } from '../components/isSender'
import AuthContext from '../auth/authContext'
import { useNavigate } from 'react-router-dom'

function UpdateParcelInfoPage() {

    const { user } = useContext(AuthContext);
    const [userAuth, setUserAuth] = useState('false')
    let navigate = useNavigate();
    isSender(user).then(res => setUserAuth(res))

    // CODE BELOW LIMITS PAGE ACCESS TO SENDER 
    if (!user && userAuth) {

        navigate("/");

    }
    return (
        <PageLayout>
            <h2 className='pt-3 flex justify-center 
                bg-barrel-green underline
                text-white font-hansief text-center'
            >
                Edit
            </h2>
            <section className='flex justify-center 
                bg-barrel-green pt-5  '>
                <div className='w-52'>
                    <NavigationIcons />
                </div>
            </section>
            <CreateParcelSubheader />
            <HandleParcelPictures />

        </PageLayout>
    )
}

export default UpdateParcelInfoPage
