import React from "react";
import classes from './ToDoItem.module.css';


const Row: React.FC<{
  onDelete: (id: string) => void;
  id: string;
  text: string;
  key: string | number;
}> = (props) => {
  function deleteItem(){
      props.onDelete(props.id);
  }
  return (
    <li className={`${props.id} ${classes.item}`} key={props.id}>
      <b>{props.text}</b>

      <button onClick={deleteItem}>
                X
            </button>
    </li>
  );
};
export default Row;