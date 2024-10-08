import React, { ReactNode, useState } from "react";
import ToDo from "../models/ToDo";
import uniqid from 'uniqid'


interface ContextBlock {
    items: ToDo[],
    addToDo: (text: string)=>void,
    removeToDo: (id: string)=>void
}
type TodosContextProviderProps = {
    children: ReactNode;
};

export const ToDosContext =React.createContext<ContextBlock>({
    items: [],
    addToDo :()=>{},
    removeToDo :()=>{}
});

const TodosContextProvider : React.FC<TodosContextProviderProps> = props=>{
    const [todos , setTodos] = useState<ToDo[]>([]);
     // Add User
    function clickUpdate(text: string){
        setTodos(()=>( [...todos, {id: uniqid() , text}] ))
    }

    // Remove User
    function deleteItem(id:string){
        setTodos(prev=>( prev.filter(item=>item.id !== id)))
    }

    const ctxValue : ContextBlock = {
        items : todos,
        addToDo: clickUpdate,
        removeToDo: deleteItem
    }
    
    return <ToDosContext.Provider value={ctxValue}>{props.children}</ToDosContext.Provider>
}

export default TodosContextProvider;
