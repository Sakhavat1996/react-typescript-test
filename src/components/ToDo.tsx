import React from "react"
import ToDo from "../models/ToDo";

const ToDos: React.FC<{items: ToDo[]}> = props => {
    return (
      <ul>
        {props.items.map((item) => (
          <li className={item.id} key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
}

export default ToDos;