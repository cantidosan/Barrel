import React from 'react'


//THIS BUTTON WILL LINK TO THE 3rd PARTY QR CODE LIBRARY WE DECIDE ON
function ScanButton() {
    return (
        <button id="scanButton" className='mr-12 text-white-500 bg-gradient-to-r 
                            from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br
                            focus:ring-4 focus:outline-none focus:ring-cyan-300
                            dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 
                            dark:shadow-lg dark:shadow-cyan-800/80 font-bold rounded-lg 
                            text-sm px-2.5  text-center  '
        >
            SCAN
        </button>
    )
}

export default ScanButton
