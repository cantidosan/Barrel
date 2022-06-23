import React, { useState, useEffect } from 'react'

const usePicUrl = (selectedFiles: any) => {

    const [picUrl, setPicUrl] = useState<any | null>(null);

    console.log('inside hook', selectedFiles)


    return ['https://res.cloudinary.com/daydto7f1/image/upload/v1647869662/n02113712_1748_xvw67i.jpg']
}


export default usePicUrl
