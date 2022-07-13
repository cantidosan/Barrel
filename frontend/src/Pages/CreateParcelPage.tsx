import React, { ChangeEvent, FC, useEffect, useState, useContext } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import NavigationIcons from '../components/NavigationIcons/NavigationIcons'
import CreateParcelSubheader from '../components/layouts/subheaders/CreateParcelSubheader'
import { useStateValue } from '../state/index'
import UploadImage from '../components/UploadImage'
import InputParcelInfo from '../components/InputParcelInfo'
import InputParcelDetails from '../components/InputParcelDetails'
import NextPageNavButton from '../buttons/NextPageNavButton'
import PrevPageNavButton from '../buttons/PrevPageNavButton'
import RecentParcelPics from '../components/RecentParcelPics'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../auth/authContext'
import { isSender } from '../components/isSender'


///###TODO complete this page
const CreateParcelPage: FC = () => {

    const [{ pageCount }, dispatch] = useStateValue();

    const [userAuth, setUserAuth] = useState('false')

    console.log(userAuth)

    let navigate = useNavigate();

    let pgContext = pageCount
    const { user } = useContext(AuthContext);

    console.log('user', user)
    isSender(user).then(res => setUserAuth(res))
    // CODE BELOW LIMITS  ACCESS TO SENDER  SOLELY
    // if (!!user && userAuth) {

    //     navigate("/");

    // }
    const nextPage = () => {

        console.log('before dispatch',pgContext)
        pgContext++

        // console.log('PageCount+', pgContext)
        if (pgContext > 2) {
            console.log('context reset')
            pgContext = 0
        }
        
        dispatch({ type: 'pageCount', payload: pgContext })
        console.log('after dispatch',pageCount)
    }

    return (
        <PageLayout>


            <CreateParcelSubheader />
            <section className='flex justify-center 
                bg-barrel-green pt-5  '>
                <div className='w-52'>
                    <NavigationIcons />
                </div>

            </section>
            <section className='flex  justify-center pt-6 bg-barrel-green'>
                {pageCount === 0 ? <UploadImage /> : pageCount === 1 ? <InputParcelInfo /> : <InputParcelDetails />}

            </section>
            <section className='flex flex-col justify-center bg-barrel-green
                 py-6 '>
                {/* THIS COMPONENT SHOULD ALLOW QUICK SELECTION OF RECENTLY
                OR FREQUENTLY USED ITEMS */}
                <p className=' text-center font-bold text-white font-hansief'>Top Items</p>

                <RecentParcelPics />

            </section>
            <div className='flex justify-center w-58 bg-barrel-green pt-5'>
                <button className='m-2 focus:outline-none text-white bg-purple-700 
                            hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 
                            font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 
                            dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                    type="button" onClick={nextPage}
                >
                    NEXT
                </button>
            </div>

        </PageLayout >
    )
}

export default CreateParcelPage
