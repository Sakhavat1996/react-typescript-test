import React, { useContext, useState } from "react"
import Row from "./Item";
import { ToDosContext } from "../store/storeTodos";
import CreateForm from "./CreateForm";
import classes from './ToDos.module.css'

interface User {
  id: string;
  text: string;
}

interface Props {
  items: User[];
}

const ToDos: React.FC = () => {
  // const items = [new ToDo('Click') , new ToDo('update')]
  const ctxContext = useContext(ToDosContext)

  // function identity<Type>(arg: Type): Type {
  //   return arg;
  // }
  // let myIdentity: <Type>(arg: Type) => Type = identity
  // console.log(myIdentity(5));

  // 1ci yol
  /*
  const [items , setItems] = useState<User[]>(props.items)
  const [user  , setUser] = useState<User>({id : uniqid() , text : '' })
  function handleSubmit(e : any){
    e.preventDefault();
    if(user.text.trim() !== ''){
      setItems((prevItems) => [...prevItems , user]);
      setUser({id: uniqid() , text : ''})
    }
  }
    */

 
  return (
    <div className={classes.layout}>
      <CreateForm />
      <ul className={classes.items}>
        {ctxContext.items.map((item) => (
          <Row
            onDelete={ctxContext.removeToDo}
            key={item.id}
            id={item.id}
            text={item.text}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDos;