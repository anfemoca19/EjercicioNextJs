
import { Images } from '@/types';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

type CardImageProps = {
  image: Images; // Utiliza la interfaz Image aquí
};



const CardImage: React.FC<CardImageProps> = ({ image }) => {

  return(

        <article className="max-w-sm overflow-hidden rounded-lg shadow-lg ">

            <Image 
                src={image.urls.small}
                alt={image.alt_description} 
                width={500} 
                height={500}
                className=' h-2/4 max-h-none'
              />

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <Link className="flex items-center no-underline hover:underline text-black" href="#">

                    <p className="ml-2 text-sm">
                      {image.user.name}
                    </p>
                </Link>
                <Link className="no-underline text-grey-darker hover:text-red-dark" href="#">
                    <span className="hidden">Like</span>
                    <i className="fa fa-heart"></i>
                </Link>
            </footer>
        </article>
    

  )
}

export default CardImage;