import React, { useState } from "react"
import Row from "./Item";
import uniqid from 'uniqid'
import { FormTR } from "./createForm";
import classes from './ToDos.module.css'

interface User {
  id: string;
  text: string;
}

interface Props {
  items: User[];
}

const ToDos: React.FC<Props> = props => {
  // const items = [new ToDo('Click') , new ToDo('update')]
  const [items, setItems] = useState<User[]>([]);

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

  // Add User
  function clickUpdate(text: string){
    setItems(()=>(
      [...items , {id: uniqid() , text}]
    ))
  }

  // Remove User
  function deleteItem(deleteID:string){
    setItems(prev=>(
      prev.filter(item=>item.id !== deleteID)
    ))
  }
  return (
    <div className={classes.layout}>
        {
        /* <form action="" onSubmit={handleSubmit}>
              <label htmlFor="">AD</label>
              <input 
                type="text"
                onChange={(e)=>setUser(prev=>{
                  return (
                    {
                      ...prev,
                      id : uniqid() ,
                      text: e.target.value
                    }
                  )
                })}
                value={user.text}
                placeholder="Daxil et"
                />
        </form> */
        }
      <FormTR addToDo={clickUpdate}/>
      <ul className={classes.items}>
        {items.map(item => <Row onDelete={deleteItem} key={item.id} id={item.id} text={item.text} />)}
      </ul>
    </div>
  );
}

export default ToDos;