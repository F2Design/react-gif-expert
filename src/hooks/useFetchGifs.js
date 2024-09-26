//los Hooks pueden tener estados independientes useState
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

// Esto es un HOOK que no es mas que una funcion que regresa algo, en este algo regresa un objeto que tiene imagenes y el loading
export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    }

    useEffect( () => {
        getImages();
    }, [])

    return {
    
        images: images,
        isLoading: isLoading

    }
}
