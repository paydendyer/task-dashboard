
import React from 'react';

const todos = ["Finish project", "Read book", "Clean apartment", "Do Laundry"];
const Todo = props => <li>{props.todo}</li>;

const ToDoList = () => {
  return(
    <ul>
      {todos.map(todo => (
        <Todo todo={todo}key={todo}></Todo>
      ))}
    </ul>
  )
}

export default ToDoList;