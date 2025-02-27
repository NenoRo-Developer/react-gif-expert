import { useState } from "react";

export const AddCategory = ({onNewCategory})=>{
    
    const [inputValue,setInputValue] = useState('One Punch');

    const onInputChanged = (event)=>{
        setInputValue(event.target.value);
    };

    const onSubmit = (event)=>{
        //console.log(event);
        event.preventDefault();
        //console.log(inputValue);
        if( inputValue.trim().length <= 1) return;
        //setCategories(categories=>[inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim())
        
    };
    return(
        <form onSubmit= { (event) => onSubmit(event)}>

        
        <input
         type = "text"
         placeholder="Buscar gifs"
         value = {inputValue}
         onChange={onInputChanged}
        />

        </form>
    );
}