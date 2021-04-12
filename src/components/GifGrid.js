import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import React, { useEffect, useState} from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs(category);

    /*const [images, setImages] = useState([]);

    useEffect(()=>{
        getGifs(category)
            .then(imgs=>setImages(imgs));
    },[category])

    return (
        <>
            <h3>{category}</h3>
            
            {loading?'Cargando...':'Data cargada'}
        </>
    )*/

    return (
        <>
            <h3 className='animate__animated animate__fadeInDown'>{category}</h3>

            {loading && <p className='animate__animated animate__flash'>Loading</p>}

            <div className='card-grid'>
            
                {
                    images.map((img)=>(

                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
           
            </div>
        </>
    )
}
