import React, { useContext, useRef } from "react";
import classes from './form.module.css';
import { ToDosContext } from "../store/storeTodos";

const CreateForm : React.FC = () =>{
    const inputRef = useRef<HTMLInputElement>(null);
    const ctxContext = useContext(ToDosContext)
    function handleSubmit (e : React.FormEvent){
        e.preventDefault();
        if(inputRef.current!.value){
            let enteredText = inputRef.current!.value;
            ctxContext.addToDo(enteredText);
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
export default CreateForm;