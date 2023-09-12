// import Image from 'next/image';
import React from 'react';
import CardImage from '../cardImg/cardImg';
import { Images } from '@/types';


// type Image = {
//   id: string;
//   alt_description: string;
//   urls: {
//     small: string;
//   };
//   user: {
//     name: string;
//   };
//   description: string | null;
// };

type ImageListProps = {
  images: Images[];
};

const ImageList: React.FC<ImageListProps> = ({ images }) => {
  return (

    <div className=" grid grid-cols-3 gap-4">
      {images.map((image) => (
        
        // <div key={image.id} className="flex flex-wrap -mx-1 lg:-mx-4">
          <CardImage  key={image.id} image={image}/>
        // </div>
      ))}
    </div>
  );
};

export default ImageList;
