//Returns a list of todos
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import FlipMove from 'react-flip-move';
import { useState } from 'react';


function TodoList(props){
  const items = props.items;
  const [check, setCheck] = useState(false);
  const listItems = items.map(item =>
  {
    return <div className="list" key={item.key}>
      <p>
      <div className={check ? "list__item list__item-checked" : "list__item"}>
      <input
        type="checkbox"
        className="list__check"
        checked={item.check}
        onChange={() => setCheck(!check)}
      />
        <input 
        type="text" 
        data-testid="delete-todo"
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
      </div>
    </p>
    </div>
  })
  return(
    
    <div>
      <FlipMove duration={500} easing="ease-in-out">
        {listItems}
        </FlipMove>
      </div>

  )

}

export default TodoList;