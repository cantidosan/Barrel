import React, { FC } from 'react'
import { useStateValue } from '../state/index'
import PageLayout from '../components/layouts/PageLayout'
import NavigationIcons from '../components/NavigationIcons/NavigationIcons'
import UpdateUserProfileSubheader from '../components/layouts/subheaders/UpdateUserProfileSubheader'
import UploadImage from '../components/UploadImage'
import UpdateUserProfileInput from '../components/UpdateUserProfileInput'





const UpdateUserProfilePage: FC = () => {

    const [{ pageCount }, dispatch] = useStateValue();
    let pgContext = pageCount

    const nextPage = () => {

        pgContext++
        // console.log('PageCount+', pgContext)

        if (pgContext > 2) {
            pgContext = 0
        }

        dispatch({ type: 'pageCount', payload: pgContext });

    }
    const prevPage = () => {

        pgContext--
        if (pgContext <= 0) {

            pgContext = 0

        }

        // console.log('PageCountD', pgContext)

        dispatch({ type: 'pageCount', payload: pgContext });

    }
    return (



        <PageLayout>


            <h2 className=" pt-3 flex justify-center 
                bg-barrel-green underline
                text-white font-hansief text-center"
            >
                Edit <br /> Profile <br /> Info
            </h2>

            <section className=' flex justify-center bg-barrel-green
                        pt-5'
            >
                <div className='w-52 '>
                    <NavigationIcons />
                </div>

            </section>
            <UpdateUserProfileSubheader />


            <section className="grid gap-6  pt-10 justify-center 
                        bg-barrel-green "
            >
                {
                    pageCount === 0 ? <UpdateUserProfileInput /> :
                        pageCount === 1 ? <div > <UploadImage /></div> :
                            pageCount === 2 ? <UploadImage /> : ''
                }




            </section>


            < div className='flex justify-center pt-4 bg-barrel-green'>
                <button className='m-2 focus:outline-none text-white bg-purple-700 
                        hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium 
                        rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 
                        dark:focus:ring-purple-900"' type="submit" onClick={prevPage}
                >
                    BACK
                </button>
                <button className='m-2 focus:outline-none text-white bg-purple-700 
                        hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg 
                        text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 
                        dark:focus:ring-purple-900'
                    type="submit" onClick={nextPage}
                >
                    NEXT
                </button>
            </div>


        </PageLayout >
    )
}

export default UpdateUserProfilePage
