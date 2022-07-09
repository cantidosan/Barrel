import React, { FC,useState } from 'react'

import prflag from '../assets/images/prflag.png'
import americanflag from '../assets/images/americanflag.png'
import RouteDetailsCardSm from '../components/RouteDetailsCardSm'
import PageLayout from '../components/layouts/PageLayout'
import { useStateValue } from '../state/index'


//TODO REFACTOR RANDOM DIVS TO BE MORE SPEFICI SEMANTIC HTML


const HomePage: FC = () => {

    const [{ deptPort, arrivPort }, dispatch] = useStateValue();


    const [flagPic, setFlagPic] = useState();

    const url = [prflag, americanflag]
    
   
    return (
        <PageLayout>
            <section className='bg-barrel-green'>
                <div className='container mx-auto pt-20 px-16 
                    align-items-center '>
                    <div className=' grid gap-3 md:grid md:grid-cols-3'>


                        <RouteDetailsCardSm />
                        <RouteDetailsCardSm />
                        <RouteDetailsCardSm />

                        {/* <RouteDetailsCardSm />
                        <RouteDetailsCardSm />
                        <RouteDetailsCardSm />
                        <RouteDetailsCardSm />
                        <RouteDetailsCardSm />
                        <RouteDetailsCardSm />
                        <RouteDetailsCardSm /> */}

                    </div>
                </div >
            </section >
        </PageLayout>
    )
}


export default HomePage;
