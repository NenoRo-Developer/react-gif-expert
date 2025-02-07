// import React from 'react'
import { useState, useEffect } from 'react';


import { GifItem } from "./GifItem.jsx";
import { useFetchGifs } from '../hooks/useFetchGifs.js';
//import { getGifs } from "../helpers/getGifs.js";

export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs(category);
    
//const [counter, setCounter] = useState(10);


    return (
    <>
        <h3>{category}</h3>
        {
            isLoading && (<h2>Cargando...</h2>)
        }
        
        <div className="card-grid">
            {
               images.map( (image) => (
                <GifItem 
                key={image.id} 
                {...image}
                />
                              
               ))
            }
        </div>
        {/*<p>{counter}</p>
        <button onClick={ ()=>setCounter(counter + 1)}>+1</button> */}
    </>
  )
}


