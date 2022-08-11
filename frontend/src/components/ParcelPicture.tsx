import React, { FC, useState } from 'react';
import prflag from '../assets/images/prflag.png';
import americanflag from '../assets/images/americanflag.png';
import { useStateValue } from '../state/index';

//this component accepts a parcel object
interface UrlProp {
  url: string[] | string;
  picId?: string[] | string;
  itemId?: string[] | string;
}
const ParcelPicture: FC<UrlProp> = (props: any) => {
  const { url, picId, itemId } = props;

  const [selectedImage, setSelectedImage] = useState('hello');

  const [{ parcelId, itemList }, dispatch] = useStateValue();

  console.log('URL made it', url);

  const handleSelect = () => {
    // Place the object information inside the
    //state variable and lift it up to SENDER dashboard page
    //the pass it down one level to Parcel Delivery Details
    // setSelectedImage()

    dispatch({ type: 'parcelId', payload: itemId });
    dispatch({ type: 'itemList', payload: itemId });
  };

  return (
    <div>
      <a
        href='#'
        className=' flex flex-col 
                items-center rounded-lg overflow-hidden
                border bg-gray-300'
      >
        <img
          className='opacity-80 object-cover 
                    w-full  rounded-t-lg 
                    w-14 md:rounded-none 
                    md:rounded-l-lg hover:opacity-100
                    hover:bg-green-600 active:bg-green-700 
                     '
          src={url}
          alt=''
          onClick={handleSelect}
        />
      </a>
    </div>
  );
};

export default ParcelPicture;
