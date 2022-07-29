import React, { FC, useContext, useState } from 'react'
import PageLayout from '../components/layouts/PageLayout'
import ParcelDeliveryDetails from '../components/ParcelDeliveryDetails'
import DeliveryUpdates from '../components/DeliveryUpdates'
import CreateDeliveryUpdates from '../components/CreateDeliveryUpdates'
import RouteFlag from '../components/RouteFlag'
import americanflag from '../assets/images/americanflag.png'
import prflag from '../assets/images/prflag.png'
import { isDeliveryOwner } from '../components/isDeliveryOwner'
import AuthContext from '../auth/authContext'
import { useNavigate } from 'react-router-dom'

const DeliveryDetailsPage: FC = () => {

    const url = [prflag, americanflag]
    const [userAuth, setUserAuth] = useState('false')

    console.log(userAuth)

    let navigate = useNavigate();

    const { user } = useContext(AuthContext);
    
    isDeliveryOwner(user).then(res => setUserAuth(res))
    console.log('user', user)
    console.log('valid viewer', userAuth)
    // CODE BELOW LIMITS PAGE ACCESS TO SENDER AND COURIER SOLELY
    // if (!user && userAuth) {
    //     navigate("/");
    // }
    return (
        <PageLayout>

            <div className='bg-barrel-green'>
                <main className=''>
                    <section className='flex justify-center pr-2'>
                        <ParcelDeliveryDetails />
                    </section>
                    <section className='flex justify-center mt-8  bg-barrel-green '>
                        <div className='grid grid-cols-2 flex-col border-2 gap-14'>


                            <div className='flex border-2 bg-barrel-green px-1'>
                                <div className=' pt-2 w-full ' id="flags">
                                    <RouteFlag url={url[1]} />
                                    <RouteFlag url={url[0]} />
                                </div>
                                <div className='ml-3 pt-9' id="payouttext">
                                    <span className='m-1 text-left font-bold font-hansief
                                        text-white opacity-60
                                        text-md'
                                    >
                                        PAYOUT
                                    </span><br />
                                    <span className='text-right text-lg
                                    font-bold text-white mr-1 text-lime-500'
                                    >
                                        $90.00
                                    </span>
                                </div>

                            </div>

                            <div className='border-2 text-center' id="porttext">
                                <span className='m-1 text-left text-white opacity-60
                                    font-thin font-roboto p
                                    text-md'>PORTS
                                </span><br />
                                <span className='text-right 
                                    font-bold text-white mr-1'
                                >
                                    JFK -IATA
                                </span><br />
                                <span className='m-1 text-left font-thin font-roboto
                                    text-white opacity-60
                                    text-sm'>EXCHANGE LOCATION
                                </span><br />
                                <span className='text-right 
                                    font-bold text-white mr-1 text-white'
                                >
                                    IATA arrivals
                                </span>
                            </div>



                        </div>
                    </section>
                    <section className='flex flex-col pt-8  px-4 md:flex-row  gap-4 
                        justify-center mt-8 '>

                        <DeliveryUpdates />
                        <CreateDeliveryUpdates />

                    </section>
                </main>
            </div>

        </PageLayout>
    )
}

export default DeliveryDetailsPage
