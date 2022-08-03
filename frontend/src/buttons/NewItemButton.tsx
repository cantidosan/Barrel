import React from 'react'
import plusIcon from '../assets/icons/plusIcon.jpg'

function NewItemButton() {
    
// add tailwind tooltip here for extra info to user on + button
    return (

      <div className='flex '>
        <figure className='flex flex-col basis-1/2 mt-1 '>
                            
                <a href="#" className=" overflow-hidden flex 
                    flex-col items-center rounded-lg  border 
                    shadow-md md:flex-row
                    hover:bg-green-500 
                    bg-grey">

                    <img className=" rounded-t-lg 
                        md:h-auto md:w-48 md:rounded-none 
                        md:rounded-l-lg" src={plusIcon} alt=""
                    />

                </a>
        </figure>
    </div>
  )
}

export default NewItemButton
