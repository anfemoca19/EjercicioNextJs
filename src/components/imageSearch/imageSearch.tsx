import React, { useState } from 'react';

type ImageSearchProps = {
  onSearch: (query: string) => void;
};

const ImageSearch: React.FC<ImageSearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    debugger
    if (query.trim() === '') {
      setError('Por favor, ingresa un término de búsqueda válido.');
      return;
    }

    setError('');
    onSearch(query);
  };


  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={handleSubmit} className='w-full max-w-sm'>
        <div className='flex items-center border-b-2 border-grey-500 py-2'>
          <input
            type="text"
            placeholder="Buscar imágenes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='appearance-none bg-transparent border-none w-full text-gray-500 text-sm border-4'
          />
          <button type="submit" className='flex-shrink-0 bg-grey-500 hover:bg-grey-700 border-grey-500 
          hover:border-grey-700 text-sm border-4 py-1 px-2 rounded'>Buscar</button>
          {
              error && <span className='text-red-200'>{error}</span>
          }
        </div>
      </form>
    </div>
      
  );
};

export default ImageSearch;
