import React from 'react'

function SignInModal() {

    return (
        <div id='defaultModal'>
            <div className="fixed pin flex items-center">
                <div className="fixed pin bg-black opacity-75 z-10 "></div>

                <div className="relative mx-6 md:mx-auto   w-full  z-20 m-8 ">
                    <div className="shadow-lg bg-white rounded-lg p-8">
                        <div className="flex justify-end mb-6">
                            <button data-modal-toggle='defaultModal'>
                                <span className="mr-2">Close</span>
                                <span>
                                    <i className="fa fa-times"></i>
                                </span>
                            </button>
                        </div>

                        <h1 className="text-center text-2xl font-hansief 
                        text-thin text-green-dark"
                        >Login
                        </h1>

                        <form className="pt-6 pb-2 my-2">
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <input className="shadow appearance-none border 
                                    rounded w-full py-2 px-3 text-grey-darker"
                                    id="email" type="text"
                                    placeholder="Email Address"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input className="shadow appearance-none border rounded 
                                    w-full py-2 px-3 text-grey-darker mb-3"
                                    id="password" type="password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="block md:flex items-center justify-between">
                                <div>
                                    <button className="bg-green hover:bg-green-dark text-black 
                                    font-bold py-2 px-4 rounded border-b-4 border-green-darkest"
                                        type="button">
                                        Sign In
                                    </button>
                                </div>

                                <div className="mt-4 md:mt-0">
                                    <a href="#" className="text-green no-underline"
                                    >Forget Password?
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignInModal
