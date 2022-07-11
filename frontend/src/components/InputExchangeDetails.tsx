import React, { FC,useState } from 'react'
import { useStateValue } from '../state'



const InputExchangeDetails: FC = () => {

    const [{ pageCount, docRef }, dispatch] = useStateValue();
    const [exLocation, setExLocation] = useState('')
    const [exPolicy, setExPolicy] = useState('')

    let pgContext = pageCount

    const handleClick = async () => {

        //switches to part to of the form input
        pgContext++
        // console.log('PageCount+', pgContext)

        if (pgContext > 2) {
            pgContext = 0
        }
        //TODO use firebase SDK docRef and local variables to
        //update the route in the DB

        dispatch({ type: 'pageCount', payload: pgContext });
    }
    return (
        <>
        <div className="grid gap-6 pt-10 justify-center bg-barrel-green font-bold text-white ">
            <div>
                <label htmlFor="small-input" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">Location</label>
                <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                    sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e)=>setExLocation(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Exchange Policy</label>
                <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 
                    focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Leave a comment..."
                        onChange={(ev)=>setExLocation(ev.target.value)}>
                        
                </textarea>
            </div>
            </div>
            <div className='flex justify-center w-58 bg-barrel-green pt-5'>
                <button className='m-2 focus:outline-none text-white bg-purple-700 
                hover:bg-purple-800 focus:ring-4 focus:ring-purple-300
                font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600
                dark: hover: bg-purple-700 dark:focus:ring-purple-900'
                type="submit" onClick={handleClick}
                >
                NEXT
                        </button>
            </div>
        </>
    )
}

export default InputExchangeDetails
