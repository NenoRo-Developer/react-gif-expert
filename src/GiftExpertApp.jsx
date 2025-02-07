import {useState} from 'react';
import { AddCategory,GifGrid } from './components';
//import { AddCategory } from './components/AddCategory';
//import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ()=> {
const [categories,setCategories] = useState(['One Punch']);

const onAddCategory= (newCategory)=>{
    //console.log(newCategory)
    
    if( categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);
    //setCategories( cat => [...cat,'Hola Mundo'] )
};
    


    return(
        <>
        {/*titulo*/}
           <h1>GifExpertApp</h1>

           {/* Input */}
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory = { (value)=> onAddCategory(value)}
            />
           {/* Listado de Gif */}
           {/* <button onClick={ onAddCategory } >Agregar</button> */}
            {/* <ol> */}
                { categories.map(category => {
                    return (
                    
                        <GifGrid 
                        key={category}
                        category={category}
                        />
                    )
                    
                })
                }
            {/* </ol> */}
           {/* Gif Item */}
        </>
    );

}