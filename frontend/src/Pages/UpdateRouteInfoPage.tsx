import React, { FC, useContext, useState } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import NavigationIcons from '../components/NavigationIcons/NavigationIcons'
import UpdateLocation from '../components/UpdateLocation'
import UpdateLuggageAttributes from '../components/UpdateLuggageAttributes'
import UpdatePolicy from '../components/UpdatePolicy'
import { useStateValue } from '../state/';
import CreateRouteSubheader from '../components/layouts/subheaders/CreateRouteSubheader';
import UpdateRouteSubheader from '../components/layouts/subheaders/UpdateRouteSubheader'
import NextPageNavButton from '../buttons/NextPageNavButton'
import PrevPageNavButton from '../buttons/PrevPageNavButton'
import AuthContext from '../auth/authContext'
import { useNavigate } from 'react-router-dom'
import { isRouteOwner } from '../components/isRouteOwner'
import { useParams } from 'react-router-dom'

const UpdateRouteInfoPage: FC = () => {

    const [{ pageCount }, dispatch] = useStateValue();
    const { user } = useContext(AuthContext);
    const [userAuth, setUserAuth] = useState('false')
    let { route_id } = useParams();
    //this takes the routeId from the params and passes it to children

    const nextPage = () => {

       

        dispatch({ type: 'pageCount', payload: pageCount + 1 });

    }
    const prevPage = () => {


        

        dispatch({ type: 'pageCount', payload: pageCount-1 });

    }

    let navigate = useNavigate();

    isRouteOwner(user).then(res => setUserAuth(res as string))

    // CODE BELOW LIMITS PAGE ACCESS TO  COURIER SOLELY
    if (!user && userAuth) {
        navigate("/");
    }
    return (
        <PageLayout>
            <UpdateRouteSubheader />
            <section className='flex justify-center 
                bg-barrel-green pt-5  '>

                <div className='w-52'>
                    <NavigationIcons />
                </div>
            </section>


            {

                pageCount === 0 ? <UpdateLocation routeId={route_id!} /> :
                    pageCount === 1 ? <UpdatePolicy routeId={route_id!} /> :
                        <UpdateLuggageAttributes  routeId={route_id!}/>


            }
            {


                <div className='flex justify-center 
                    bg-barrel-green pt-5'>
                    <PrevPageNavButton />
                    <NextPageNavButton />
                </div>
            }



        </PageLayout >
    )
}

export default UpdateRouteInfoPage
