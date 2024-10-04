import React, { useRef } from "react";
import classes from './form.module.css'

export const FormTR : React.FC<{addToDo : ( text : string ) => void}> = props =>{
    const inputRef = useRef<HTMLInputElement>(null)

    function handleSubmit (e : React.FormEvent){
        e.preventDefault();
        if(inputRef.current!.value){
            let enteredText = inputRef.current!.value;
            props.addToDo(enteredText);
            inputRef.current!.value = '';
        }
    }
    return(
        <form action="" className={classes.form} onSubmit={handleSubmit}>
            <label htmlFor="">AD</label>
            <input type="text" ref={inputRef} placeholder="Daxil et"/>
        </form>
    )
}