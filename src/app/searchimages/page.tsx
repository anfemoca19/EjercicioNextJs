"use client"
import React, { useState, useEffect} from 'react';
import ImageSearch from '../../components/imageSearch/imageSearch';
import ImageList from '../../components/imgeList/imageList';

type Image = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
  };
  user: {
    name: string;
  };
  description: string | null;
};

const ImagesApp: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);

  const searchImages = async (query: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&client_id=Sy9wlyl_4bBaWaQtpKw-cq0V5xArX2sJJDYeZ_5Np6c`
      );
      const data = await response.json();
      setImages(data.results);
    } catch (error) {
      console.error('Error al buscar imágenes', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchImages('nature');
  }, []);

  return (
    <div className=" text-center mt-5">
      <h1>Buscador de Imágenes</h1>
    
        <ImageSearch onSearch={searchImages} />
        <div className='container my-12 mx-auto px-4 md:px-12'>
        {loading ? <p>Cargando...</p> : <ImageList images={images} />}
        </div>
      

      
    </div>
  );
};

export default ImagesApp;