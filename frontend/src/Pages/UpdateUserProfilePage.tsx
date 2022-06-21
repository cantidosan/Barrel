import React, { FC } from 'react'
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';
import PageLayout from '../components/layouts/PageLayout'
import NavigationIcons from '../components/NavigationIcons'

interface UpdateFormValues {
    username: string;
    cellular: string;
    email: string;
    password: string;
}



const UpdateUserProfilePage: FC = () => {


    const initialValues: UpdateFormValues = {


        username: '',
        cellular: '',
        email: '',
        password: '',


    };


    return (



        <PageLayout>

            <Formik

                initialValues={initialValues}

                onSubmit={(values, actions) => {

                    console.log({ values, actions });

                    alert(JSON.stringify(values, null, 2));

                    actions.setSubmitting(false);

                }}

            >
                <Form>
                    <h2 className=" pt-3 flex justify-center 
                bg-barrel-green underline
                text-white font-hansief text-center"
                    >
                        Update <br /> Profile <br /> Info
                    </h2>

                    <section className=' flex justify-center bg-barrel-green
                        pt-5'
                    >
                        <div className='w-52 '>
                            <NavigationIcons />
                        </div>
                    </section>
                    <section className="grid gap-6 mb-3 pt-10 justify-center 
                        bg-barrel-green "
                    >

                        <div className="font-roboto">

                            <label htmlFor="username" className='block mb-2 text-sm
                                font-medium text-gray-900 dark:text-gray-300'
                            >
                                Username
                            </label>
                            <Field id="username"
                                name="username"

                                className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg 
                                    border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="cell" className='block mb-2 text-sm font-medium 
                                text-gray-900 dark:text-gray-300'
                            >
                                Cellular
                            </label>

                            <Field id="cellular"
                                name="cellular"
                                placeholder="888-888-8888"
                                className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg 
                                    border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium 
                                text-gray-900 dark:text-gray-300" htmlFor="email">Email</label>

                            <Field className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg 
                                    border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                    dark:focus:ring-blue-500 dark:focus:border-blue-500" id="email" name="email" placeholder="email@email.com" />
                        </div>
                        <div>
                            <label className='block mb-2 text-sm font-medium 
                                text-gray-900 dark:text-gray-300' htmlFor="password">Password</label>

                            <Field className="block p-2 w-full text-gray-900 bg-gray-50 
                                rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 
                                focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
                                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                                dark:focus:border-blue-500" id="password" name="password" type="password"
                                placeholder=""
                            />
                        </div>
                        {


                            <div >
                                <button className='m-2 focus:outline-none text-white bg-purple-700 
                                    hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg 
                                    text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                                    type="submit"
                                >
                                    NEXT
                                </button>
                                <button className='m-2 focus:outline-none text-white bg-purple-700 
                                    hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium 
                                    rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 
                                    dark:focus:ring-purple-900"' type="submit"
                                >
                                    CANCEL
                                </button>
                            </div>
                        }

                    </section>
                </Form>



            </Formik>
        </PageLayout>
    )
}

export default UpdateUserProfilePage
