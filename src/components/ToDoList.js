//Returns a list of todos
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';


function TodoList(props){
  const items = props.items;
  const listItems = items.map(item =>
  {
    return <div className="list" key={item.key}>
      <p>
        <input 
        type="text" 
        id={item.key} 
        value={item.text} 
        onChange ={
          (e) =>{
            props.setUpdate(e.target.value, item.key)
          }
        } />
      <span>
      <MdDeleteForever className="todo-delete"
        onClick={ () => props.deleteItem(item.key)

        }
      ></MdDeleteForever>
      </span>
    </p>
    </div>
  })
  return(
    <div>{listItems}</div>

  )

}

export default TodoList;