import React, { FC } from 'react'
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';
import PageLayout from '../components/layouts/PageLayout'
import NavigationIcons from '../components/NavigationIcons/NavigationIcons';

enum userType {

    courier = "courier",
    sender = "sender"
}
interface MyFormValues {

    firstName: string;
    username: string;
    lastName: string;
    cellular: string;
    email: string;
    password: string;
    user: userType


}


const SignUpPage: FC = () => {

    const initialValues: MyFormValues = {

        firstName: '',
        lastName: '',
        username: '',
        cellular: '',
        email: '',
        password: '',
        user: userType.sender,

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

                <Form >
                    <h2 className=" pt-3 flex justify-center bg-barrel-green underline
                        text-white font-hansief"
                    >
                        New Profile
                    </h2>
                    <section className=' flex justify-center bg-barrel-green pt-5  '>
                        <div className='w-52 '>
                            <NavigationIcons />
                        </div>
                    </section>



                    <div className="grid gap-6 mb-3 pt-10 justify-center bg-barrel-green ">

                        <div className="font-roboto">
                            <label htmlFor="username" className='block mb-2 text-sm font-medium 
                                text-gray-900 dark:text-gray-300'
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
                                text-gray-900 dark:text-gray-300' htmlFor="firstName">First Name</label>

                            <Field className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg 
                                    border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                    dark:focus:ring-blue-500 dark:focus:border-blue-500" id="firstName" name="firstName"
                                placeholder="John " />
                        </div>
                        <div>
                            <label className='block mb-2 text-sm font-medium 
                                text-gray-900 dark:text-gray-300' htmlFor="lastName">Last Name</label>

                            <Field className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg 
                                    border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                    dark:focus:ring-blue-500 dark:focus:border-blue-500" id="lastName" name="lastName" placeholder="Doe" />
                        </div>

                        <div>
                            <label className='block mb-2 text-sm font-medium 
                                text-gray-900 dark:text-gray-300' htmlFor="password">Password</label>

                            <Field className="block p-2 w-full text-gray-900 bg-gray-50 
                                    rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 
                                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                    dark:focus:ring-blue-500 dark:focus:border-blue-500" id="password" name="password" type="password" placeholder="" />
                        </div>
                        <div className='flex justify-center'>

                            <label htmlFor="green-toggle"

                                className="inline-flex relative items-center 
                            mr-5 cursor-pointer"
                            >

                                <Field type="checkbox" value="courier" id="green-toggle"
                                    className="sr-only peer" placeholder='HELLO' name="user"
                                />

                                <div className="w-28 h-9 bg-orange-500 rounded-full peer
                                dark:bg-orange-700 peer-focus:ring-4 peer-focus:ring-orange-300
                                dark:peer-focus:ring-green-800 
                                peer-checked:after:translate-x-20
                                peer-checked:after:border-white 
                                after:content-[''] after:absolute
                                after:top-0.5 after:left-[px] after:bg-white after:border-orange-300
                                after:border after:rounded-full after:h-8 after:w-8 after:transition-all 
                                dark:border-orange-600 peer-checked:bg-green-600">


                                </div>

                            </label>
                        </div>
                        {


                            <div >
                                <button className='m-2 focus:outline-none text-white bg-purple-700 
                                hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium 
                                rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 
                                dark:focus:ring-purple-900"' type="submit"
                                >
                                    BACK
                                </button>
                                <button className='m-2 focus:outline-none text-white bg-purple-700 
                                hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg 
                                text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                                    type="submit"
                                >
                                    NEXT
                                </button>

                            </div>
                        }

                    </div>


                </Form>



            </Formik>


        </PageLayout >
    )
}
export default SignUpPage
