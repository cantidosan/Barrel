import React, { FC, useState } from 'react'
import usePicUrl from '../hooks/usePicUrl';

const UploadImagePreviewSm = (props: any) => {

    const { selectedFiles, preview } = props;
    const [postedPics, setPostedPics] = useState<any | null>(null);

    const picUrls = usePicUrl(selectedFiles)

    return (

        <div className='flex gap-2'>
            {
                !!selectedFiles ? <img src={preview}
                    alt="preview"
                    height="54"
                    width="56"
                /> : ''
            }
            {
                ///This section should render previously taken photos
                ///for preview
                !!picUrls && !!selectedFiles ? picUrls.map((url: any) => {
                    return (
                        <img src={url}
                            alt="preview"
                            height="54"
                            width="56"
                        />)


                }) : ''
            }
        </div>
    )
}

export default UploadImagePreviewSm
