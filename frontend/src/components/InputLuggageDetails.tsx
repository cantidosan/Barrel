import React, { FC } from 'react'

const InputLuggageDetails: FC = () => {
    return (
        <div className='grid justify-center bg-barrel-green text-white font-bold p-3 underline gap-3 font-hansief '>
            LuggageDetails
            <label htmlFor="green-toggle"

                className=" inline-flex relative items-center 
                    mr-5 cursor-pointer"
            >

                <input type="checkbox" value="courier" id="green-toggle"
                    className="sr-only peer" placeholder='Imperial' name="green-toggle"
                />

                <div className="w-28 h-9 bg-orange-500 rounded-full peer
                    dark:bg-orange-700 peer-focus:ring-4 peer-focus:ring-orange-300
                    dark:peer-focus:ring-green-800 
                    peer-checked:after:translate-x-20
                    peer-checked:after:border-white 
                    after:content-[''] after:absolute
                    after:top-0.5 after:left-[px] after:bg-white after:border-orange-300
                    after:border after:rounded-full after:h-8 after:w-8 after:transition-all 
                    dark:border-orange-600 peer-checked:bg-green-600"
                >
                </div>

            </label>
            <section>

            </section>
            <section>

            </section>
        </div>
    )
}

export default InputLuggageDetails
