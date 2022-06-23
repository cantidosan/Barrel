import React, { FC } from 'react'

const UploadImagePreviewSm = (props: any) => {

    const { selectedFiles, preview } = props;
    return (
        <>
            {
                !!selectedFiles ? <img src={preview}
                    alt="preview"
                    height="4"
                    width="56"
                /> : ''
            }
        </>
    )
}

export default UploadImagePreviewSm
